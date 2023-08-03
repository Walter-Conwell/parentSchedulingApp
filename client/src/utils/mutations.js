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
  mutation Mutation($childName: String!, $teacherNames: [String]!, $parents: [String]!, $gradeLevel: Int!) {
  addChild(childName: $childName, teacherNames: $teacherNames, parents: $parents, gradeLevel: $gradeLevel) {
    children {
      name
    }
  }
}
`;