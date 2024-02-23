const Property = require("../mongodb/models/property");
const User = require("../mongodb/models/user.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.error("Error fetching properties:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getPropertyDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        // Assuming photos field contains paths to images
        const photos = property.photos.map(photoPath => `${req.protocol}://${req.get('host')}/${photoPath}`);
        res.status(200).json({ ...property.toObject(), photos });
    } catch (error) {
        console.error("Error fetching property:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateProperty = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProperty) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.status(200).json(updatedProperty);
    } catch (error) {
        console.error("Error updating property:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteProperty = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.status(200).json({ message: "Property deleted successfully" });
    } catch (error) {
        console.error("Error deleting property:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const createProperty = async (req, res) => {
    const session = await Property.startSession();
    session.startTransaction();
    try {
        const { title, description, location, PropertyType, price } = req.body;
        const creator = req.user; // Assuming req.user_id is set by the middleware
        console.log(creator)
        const photos = req.files.map((file) => file.path);

        // Create a new property instance
        const newProperty = new Property({
            title,
            description,
            location,
            PropertyType,
            price,
            photos,
            creator,
        });

        console.log(newProperty);
        // Save the property to the database
        await newProperty.save({ session });
        // Commit the transaction if everything is successful
        await session.commitTransaction();
        session.endSession();

        res.status(201).json(newProperty); // Respond with the created property
    } catch (error) {
        // Rollback the transaction if any part of the process fails
        await session.abortTransaction();
        session.endSession();

        console.error("Error creating property:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getAllProperties,
    getPropertyDetail,
    createProperty,
    updateProperty,
    deleteProperty,
    upload,
};
