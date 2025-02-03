export interface Product {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    category: {
        _id: string;
        name: string;
        description: string;
    }
}
