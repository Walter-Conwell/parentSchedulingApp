import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addcomment($profileId: ID!, $comment: String!) {
    addComment(profileId: $profileId, comment: $comment) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_PROFILE = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removecomment($comment: String!) {
    removeComment(comment: $comment) {
      _id
      name
      skills
    }
  }
`;