import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
  getProducts {
    _id
    name
    description
    size
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