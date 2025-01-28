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
    if (error) {
        console.log(JSON.stringify(error));
    }
    const productData: Product[] = data?.getProducts || [];
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="container">
                    {productData.map((product, i) => (

                        <div key={i} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={product.image}
                                    alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
}

export default Shop