import { gql } from '@apollo/client';

export const ADDTOCART = gql`mutation addToCart($productId: ID) {
  addToCart(productId: $productId) {
    _id
    username
    email
    password
  }
}`

export const REMOVEITEMFROMCART = gql`mutation removeItemFromCart($productId: ID) {
  removeItemFromCart(productId: $productId) {
    _id
    username
    email
    password
  }
}`


export const REMOVEFROMCART = gql`mutation removeFromCart($productId: ID) {
  removeFromCart(productId: $productId) {
    _id
    username
    email
    password
  }
}`