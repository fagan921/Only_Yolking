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
    type Query {
        getSingleUser: User
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;
export default typeDefs;
