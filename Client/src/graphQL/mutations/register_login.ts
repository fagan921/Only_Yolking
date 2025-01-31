import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
 mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      username
      _id
    }
  }
}

`;
export const DELETE_USER = gql`
mutation DeleteUser($userId: ID) {
  deleteUser(userId: $userId) {
    username
    email
  }
}

`;