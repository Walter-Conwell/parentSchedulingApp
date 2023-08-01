const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const permissions = [
  "",
  "deleteComments",
  "deleteComments changeTeacher changeGrade",
  "deleteComments changeTeacher changeGrade changeChildren editProfiles deleteProfiles",
]

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId, profileName }) => {
      if (profileId){
        return Profile.findOne({ _id: profileId });
      } else {
        return Profile.findOne({ name: profileName });
      }
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password, children, teacher_name, is_teacher }) => {
      const profile = await Profile.create({ name, email, password, children, teacher_name, is_teacher });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addComment: async (parent, { profileId, comment }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { comments: comment },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, { profileId }, context) => {
      if( context.user && profileId ) {
        // checks if logged in user is trying to delete themselves or if logged in user has permissions to delete others
        if (( profileId === context.user._id ) || ( permissions[ context.user.permission_level ].split(' ').includes('deleteProfiles') )) {
          return Profile.findOneAndDelete({ _id: profileId });
        }
      } else if ( context.user ) { // backup incase logged in user didnt specify a profileId
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a comment from their own profile
    removeComment: async (parent, { profileId, comment }, context) => {
      if ( context.user && profileId ) {
        // checks if logged in user is trying to delete themselves or if logged in user has permissions to delete other comments
        if (( profileId === context.user._id ) || ( permissions[ context.user.permission_level ].split(' ').includes('deleteComments') )) {
          return Profile.findOneAndUpdate(
            { _id: profileId },
            { $pull: { comments: comment }},
            { new: true }
          );
        }
      } else if ( context.user ) { // backup incase logged in user didnt specify a profileId
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments: comment }},
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
