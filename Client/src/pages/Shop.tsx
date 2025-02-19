import { GET_PRODUCTS } from "../graphQL/queries/products"
import { useQuery, useMutation } from '@apollo/client';
import { Product } from "../types/product";
import { ADDTOCART } from "../graphQL/mutations/cart";
import { GET_USER } from "../graphQL/queries/user";
// import { toast } from "react-hot-toast";
import { useState } from "react";
function Shop() {
    const { loading, data, error } = useQuery(GET_PRODUCTS)
    const [addAddToCart] = useMutation(ADDTOCART, {
        refetchQueries: [GET_USER]
    })
    const [notification, setNotification] = useState("");

    const addToCart = async (event: any) => {

        console.log("addind to cart!");

        console.log(event.target.id)

        const productId = event.target.id;
        
        console.log("Added!");  
        try {
            const response = await addAddToCart({
                variables: { productId },
            });

            if (response.data) {
                setNotification("Product added to cart!");
                setTimeout(() => setNotification(""), 1000);
            }
        } catch (error) {
            setNotification("Failed to add product to cart.");
            setTimeout(() => setNotification(""), 1000);
        }
    };

    if (error) {
        console.log(JSON.stringify(error));
    }
    const productData: Product[] = data?.getProducts || [];
    console.log(productData);


    return (
        <div className="container mx-auto py-10 px-4 text-center">
        <h1
        className="text-4xl sm:text-5xl text-blue-400 mb-5"
        style={{ fontFamily: 'Genty Regular, serif' }}>
                Merch
            </h1>
            {/* Notification */}
            {notification && (
            <div className="fixed top-6 left-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition-opacity duration-300 ease-in-out">
                {notification}
            </div>
)}
            {loading ? (
                <h1 className="text-center text-2xl font-semibold">Loading...</h1>
            ) : (

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {productData.map((product) => (
                        <div key={product._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg bg-skyblue">
                            <a href="#">
                                <div className="w-full h-96 overflow-hidden">
                                    <img className="w-full h-full object-cover rounded-t-lg" src={product.image} alt={product.name} />
                                </div>
                            </a>
                            <div className="px-4 pb-5">
                                {/* <br /> */}
                                <a href="#">
                                    <h5 className="mt-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                </a>
                                <p className="text-gray-700 dark:text-white text-sm mt-1">{product.description}</p>

                                { product.size.length>0 && <><label htmlFor="sizes" className="sr-only">Choose a size</label>
                                <select id="sizes" className="bg-blue-700 border border-[#38B6FF] text-bg-[#38B6FF] text-sm rounded-e-lg border-s-[#38B6FF] dark:border-s-bg-blue-100 border-s-0 focus:ring-2 focus:ring-blue-100 focus:outline-none block rounded-lg px-sm p-2.5 dark:bg-blue-100 dark:bg-[#38B6FF] dark:placeholder-[#38B6FF] dark:text-[#38B6FF] dark:focus:ring-[#38B6FF] dark:focus:border-blue-600">
                                    <option selected>Choose a size</option>
                                    {product.size.map((size, i) => (
                                        <option key={i} value={size}>{size}</option>
                                    ))}
                                </select></>}

                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                    <a href="#" className="text-[#38B6FF] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#FFF4E5] dark:hover:bg-blue-600 dark:focus:ring-blue-400">
                                        <button id={`${product._id}`} onClick={addToCart}> Add to cart</button>

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

// bg-[#38B6FF]
// text-[#FFF4E5]