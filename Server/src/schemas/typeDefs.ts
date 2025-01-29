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