const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    PropertyType: { type: String, required: true },
    price: { type: Number, required: true },
    photos: [{ type: String, required: true }],
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now } ,// Automatically set to the current timestamp
    location: { type: String, required: true } // Add the location field

});

const PropertyModel = mongoose.model('Property', PropertySchema);

module.exports = PropertyModel;
