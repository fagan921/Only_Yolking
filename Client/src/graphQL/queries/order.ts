import { gql } from '@apollo/client';

export const GET_ORDER = gql`
  query GetOrders {
  getOrders {
    customerDetails
    orderId
    products {
      _id
      name
      description
      image
      price
      quantity
      category {
        name
        description
      }
    }
  }
}
`;  