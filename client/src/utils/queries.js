import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      is_teacher
      kids {
        _id
        name
        teachers
        parents
      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID, $profileName: String) {
    profile(profileId: $profileId, profileName: $profileName) {
      _id
      email
      is_teacher
      name
      kids {
        _id
        name
        teachers
        parents
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      is_teacher
      kids {
        _id
        name
        teachers
        parents
      }
    }
  }
`;
