const { AuthenticationError } = require('apollo-server-express');
const { Profile, Comment } = require('../models');
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
      const profiles = await Profile.find();
      return profiles;
    },

    profile: async (parent, { profileId, profileName }) => {
      let profile;
      if (profileId){
        profile = await Profile.findOne({ _id: profileId });
      } else {
        profile = await Profile.findOne({ name: profileName });
      }
      return profile;
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        const profile = Profile.findOne({ _id: context.user._id });
        return profile;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password, is_teacher }) => {
      const profile = await Profile.create({ name, email, password, is_teacher });
      const token = signToken(profile);

      return { token, profile };
    },
    addChild: async (parent, { profileId, profileName, childName, teacherNames, parents, gradeLevel }, context) => {
      const childToCreate = {
        name: childName,
        teachers: teacherNames, 
        parents: parents,
        grade_level: gradeLevel,
      }
      if ( ( profileId || profileName ) && permissions[ context.user.permission_level ].split(' ').includes('changeChildren')) {
        if ( profileId ) {
          return Profile.findOneAndUpdate(
            { _id: profileId },
            { $addToSet: { children: childToCreate }},
            { new: true }
          );
        }
        return Profile.findOneAndUpdate(
          { name: profileName },
          { $addToSet: { children: childToCreate }},
          { new: true }
        );
      }
      if ( context.user ) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { children: childToCreate }},
          { new: true }
        );
      }

      throw new AuthenticationError('You need to be logged in!');
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
    // addComment: async (parent, { profileId, comment }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.profile) {
    //     return Profile.findOneAndUpdate(
    //       { _id: profileId },
    //       {
    //         $addToSet: { comments: commentText, commentAuthor: context.profile.profileId },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError("You need to be logged in!");
    // },
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
      throw new AuthenticationError("You need to be logged in!");
    },
    // Make it so a logged in user can only remove a comment from their own profile
    // removeComment: async (parent, { profileId, comment }, context) => {
    //   if ( context.user && profileId ) {
    //     // checks if logged in user is trying to delete themselves or if logged in user has permissions to delete other comments
    //     if (( profileId === context.user._id ) || ( permissions[ context.user.permission_level ].split(' ').includes('deleteComments') )) {
    //       return Profile.findOneAndUpdate(
    //         { _id: profileId },
    //         { $pull: { comments: comment }},
    //         { new: true }
    //       );
    //     }
    //   } else if ( context.user ) { // backup incase logged in user didnt specify a profileId
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { comments: comment }},
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },
};

module.exports = resolvers;
