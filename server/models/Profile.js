const { Schema, model } = require('mongoose');
const { commentSchema } = require('./Comment');
const bcrypt = require('bcrypt');

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  teachers: {
    type: [{
      type: String,
      validate: [function (teacher) {
        if (Profile.findOne({ name: teacher })) {
          return true;
        } 
        return false;
      }, 'Not a valid teacher name'],
    }]
  },
  parents: {
    type: [{
      type: String,
      validate: [function (parent) {
        if (Profile.findOne({ name: parent })){
          return true;
        }
        return false;
      }, 'Not a valid parent name'],
    }]
  },
  grade_level: {
    type: Number,
    required: true,
    validate: [(num) => { return num > 0; }, 'Grade level must be above 0'],
  }
});

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  is_teacher: {
    type: Boolean,
    default: false,
  },
  children: {
    type: [childSchema],
    // validate: [(arr) => { return this.is_teacher || arr.length > 0; }, 'Must be a teacher or have children'],
  },
  permission_level: {
    type: Number,
    default: 0,
    validate: [(level) => { return level >= 0; }, 'Level must be 0 or above'],
  },
  comments: {
    type: [commentSchema],
  }
});

// set up pre-save middleware to create password
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
