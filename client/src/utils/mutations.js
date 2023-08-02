import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!, $isTeacher: Boolean) {
    addProfile(name: $name, email: $email, password: $password, is_teacher: $isTeacher) {
      token
      profile {
        _id
      }
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

export const ADD_CHILD = gql`
  mutation addChild($childName: String!, $teacherNames: [String]!, $parents: [String]!, $gradeLevel: Int!, $profileId: ID, $profileName: String) {
    addChild(childName: $childName, teacherNames: $teacherNames, parents: $parents, gradeLevel: $gradeLevel, profileId: $profileId, profileName: $profileName) {
      _id
      name
      children {
        _id
        name
        teachers
        parents
      }
    }
  }
`