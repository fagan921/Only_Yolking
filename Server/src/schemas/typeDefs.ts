const typeDefs = `
    type User {
         _id : ID!
        username: String
        email: String
        password: String
    }
    type Auth {
        token: String
        user: User
    }
     type Category {
         _id : ID!
        name: String
        description: String
    }
    type Product {
        _id : ID!
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        category: Category
    }
    
    type Query {
        getSingleUser: User
        getProducts: [Product]
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

export default typeDefs;