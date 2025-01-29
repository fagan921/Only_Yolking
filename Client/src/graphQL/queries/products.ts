import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
  getProducts {
    _id
    name
    description
    image
    price
    quantity
    category {
      _id
      name
      description
    }
  }
}
`;