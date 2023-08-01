const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
  children: {
    type: [{
      type: String
    }],
    validate: [hasChild, 'Need at least one child'],
  },
  teacher: {
    type: {
      is_teacher: {
        type: Boolean,
        default: false,
      },
      teacher_name: {
        type: String,
        default: '',
      },
    },
    validate: [teacherCheck, 'Need to be a teacher OR have a teacher name'],
  },
  class_grade: {
    type: String,
  },
  permission_level: {
    type: Number,
    default: 0,
    validate: [function (level) { return level >= 0; }, 'Level must be 0 or above'],
  },
  comments: [
    {
      type: String,
      trim: true,
    },
  ],
});

function teacherCheck (teacher) {
  if (!teacher.is_teacher && teacher.teacher_name === '') {
    return false; // Needs to have at least one field
  }
  if(teacher.is_teacher && teacher.teacher_name !== ''){
    return false; // Cannot have both fields
  }
  return true;
}

function hasChild (arr) {
  return arr.length > 0;
}

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
