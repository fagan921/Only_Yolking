import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
query Checkout($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;