import { gql } from '@apollo/client';

// Query: Get all products
export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      description
      price
      image
    }
  }
`;

// Query: Get product details by ID
export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      image
    }
  }
`;