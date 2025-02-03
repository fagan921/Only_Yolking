import { gql } from '@apollo/client';

export const CHECKOUT = gql`
query Checkout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;