const typeDefs = `
    type Product {
        _id: ID!
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        category: Category
    }
    
    type Category {
        _id: ID!
        name: String
        description: String
        products: [Product]
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        saveOrder: [Order]!
        saveCart:[Product]!
    }

    type Order {
        orderId: ID!
        user: User!
        purchaseDate: String
        products: [Product]
        totalAmount: String
        paymentId: String
        paymentStatus: String
        customerDetails: String
    }

    type Auth {
        token: String
        user: User
    }

    type Checkout {
        session: ID
    }

    type Query {
        getSingleUser: User
        getProducts: [Product]
        getOrders:[Order]
       checkout: Checkout
       
    }
    input OrderInput {
        products: [String]!
        purchaseDate: String!
        totalAmount: String!
        paymentId: String!
        paymentStatus: String!
        customerDetails: String!
       

    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createProduct(name: String!, description: String, image: String, price: Float, quantity: Int,category: ID!): Product
        createOrders(userId: ID!, orders: [OrderInput!]!): [Order]
        deleteUser(userId:ID):User
        addToCart(productId:ID):User
        removeFromCart(productId:ID):User
        removeItemFromCart(productId:ID):User
    }
`;

export default typeDefs;
