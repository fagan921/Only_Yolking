import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
 mutation Mutation($userId: ID!, $orders: [OrderInput!]!) {
  createOrders(userId: $userId, orders: $orders) {
    orderId
    user {
      email
      username
    }
    purchaseDate
    products {
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
    totalAmount
    paymentId
    paymentStatus
    customerDetails
  }
}
`;