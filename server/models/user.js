const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrpyt = require('bcrypt-nodejs');

// Define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});


// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next){
  const user = this;

  // Gen a salt, then run callback
  bcrpyt.genSalt( 10, function(err, salt){
    if (err) return next(err);

    // Hash the pass using salt
    bcrpyt.hash(user.password, salt, null, function(err, hash){
      if (err) return next(err);

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    })
  })
})


// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass; 