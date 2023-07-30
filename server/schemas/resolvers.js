const { AuthenticationError } = require('apollo-server-express');
const { Profile, Comment } = require('../models');
const { signToken } = require('../utils/auth');

// Removes teacher_name and is_teacher from embedded object
// This allows graphQL to return those due to lack of object type
function formatProfileData (data) {
  if (data[1]) { // Detects if data is an array
    for(let i = 0; i < data.length; i++){
      data[i].teacher_name = data[i].teacher.teacher_name;
      data[i].is_teacher = data[i].teacher.is_teacher;
      delete data[i].teacher;
    }
  } else {
    data.teacher_name = data.teacher.teacher_name;
    data.is_teacher = data.teacher.is_teacher;
    delete data.teacher;
  }
  return data;
}

const resolvers = {
  Query: {
    profiles: async () => {
<<<<<<< HEAD
      return Profile.find().populate("comments");
=======
      const profiles = await Profile.find().lean(); 
      // .lean() converts the results into default JS object type rather than mongo type
      return formatProfileData(profiles);
>>>>>>> main
    },

    profile: async (parent, { profileId }) => {
      const profile = await Profile.findOne({ _id: profileId }).lean();
      // .lean() converts the results into default JS object type rather than mongo type
      return formatProfileData(profile);
    },

    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.profile) {
        return Profile.findOne({ _id: context.profile._id }).populate('comments');
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
<<<<<<< HEAD
    addProfile: async (
      parent,
      { name, email, password, children, teacher_name }
    ) => {
      const profile = await Profile.create({
        name,
        email,
        password,
        children,
        teacher_name,
      });
=======
    addProfile: async (parent, { name, email, password, children, teacher_name, is_teacher }) => {
      const teacher = {
        teacher_name: teacher_name,
        is_teacher: is_teacher,
      }
      const profile = await Profile.create({ name, email, password, children, teacher });
>>>>>>> main
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addComment: async (parent, { profileId, comment }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.profile) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { comments: commentText, commentAuthor: context.profile.profileId },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Make it so a logged in user can only remove a comment from their own profile
    removeComment: async (parent, { comment }, context) => {
      if (context.profile) {
        
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments: comment } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
