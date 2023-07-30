const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    children: [String]!,
    teacher_name: String,
    class_grade: String,
    comments: [String]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    comments(profileId: String): [Comment]
    comment(commentId: ID!): Comment
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, children: [String]!, teacher_name: String!): Auth
    login(email: String!, password: String!): Auth

    addComment(profileId: ID!, comment: String!): Profile
    removeProfile: Profile
    removeComment(comment: String!): Profile
  }
`;

module.exports = typeDefs;
