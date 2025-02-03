import {gql} from '@apollo/client'

export const GET_USER = gql`
query Query {
  getSingleUser {
    _id
    username
    email
    password
    saveOrder {
      orderId
      purchaseDate
      totalAmount
      paymentStatus
      products {
        name
        image
        description
        price
        quantity
        category {
          name
          description
        }
      }
    }
    saveCart {
      _id
      name
      description
      image
      price
      quantity
    }
  }
}
`;