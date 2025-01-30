import { GET_PRODUCTS } from "../graphQL/queries/products"
import { useQuery } from '@apollo/client';

interface Product {
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

function Shop() {
    const { loading, data, error } = useQuery(GET_PRODUCTS)
    console.log(data);
    
    if (error) {
        console.log(JSON.stringify(error));
    }
    const productData: Product[] = data?.getProducts || [];

    return (
        <div className="container mx-auto px-4 py-8">
            {loading ? (
                <h1 className="text-center text-2xl font-semibold">Loading...</h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {productData.map((product) => (
                        <div key={product._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-blue-400 dark:border-blue-700">
                            <a href="#">
                                <div className="w-full h-96 overflow-hidden">
                                    <img className="w-full h-full object-cover rounded-t-lg" src={product.image} alt={product.name} />
                                </div>
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                </a>
                                <p className="text-gray-700 dark:text-gray-200 text-sm mt-2">{product.description}</p>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Shop;
