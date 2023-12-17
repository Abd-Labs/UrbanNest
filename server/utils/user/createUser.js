const User = require('../../mongodb/models/user')

const createUser = async (profile) => {
    try {
        const { displayName, emails, photos, id } = profile;
    
        // Check if the user already exists
        let user = await User.findOne({ googleId: id });
    
        if (!user) {
          // If the user doesn't exist, create a new user
          user = await User.create({
            name: displayName,
            email: emails[0].value,
            avatar: photos[0].value,
            googleId: id,
            allProperties: [], // Add this line to set an empty array initially
          });
          console.log("New User created")

        }
        else{
          console.log("User exists already")
        }
        return user;
      } catch (error) {
        throw error;
      }
}
module.exports = createUser;