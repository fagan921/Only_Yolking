import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
query Checkout {
  checkout {
    session
  }
}
`;