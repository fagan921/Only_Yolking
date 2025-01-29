const typeDefs = `
    type Product{
        productID:ID
        name: String
        description: String
        image: String
        price: Number
        quantity: Number
        category: [Catergory]
        purchaseDate: String
    }
    type Category{
        categoryId:ID
        name: string
        description?: string
        products?: [Product]
    }
    type User {
         _id : ID!
        username: String
        email: String
        password: String
        saveOrder:[Order]

    }
    type Order{
        orderId:ID
        purchaseDate:string
        products:string
        totalAmount:string
        paymentId:string
        paymentStatus:string
        customerDetails:string
        product:[Product]
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