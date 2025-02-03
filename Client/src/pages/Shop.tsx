import { GET_PRODUCTS } from "../graphQL/queries/products"
import { useQuery,useMutation } from '@apollo/client';
import { Product } from "../types/product";
import { ADDTOCART } from "../graphQL/mutations/cart";
import { GET_USER } from "../graphQL/queries/user";
import { toast } from "react-hot-toast";
import { useState } from "react";
function Shop() {
    const { loading, data, error } = useQuery(GET_PRODUCTS)
    const [addAddToCart] = useMutation(ADDTOCART, {
        refetchQueries: [GET_USER]
    })
    const [notification, setNotification] = useState("");

    console.log(data);


    const addToCart =  async (event: any) =>{
       

        console.log("addind to cart!");
       
        console.log(event.target.id)

        const productId = event.target.id;

        

        

        console.log("Added!")
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
   
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-blue-400 py-4 shadow-md right-150px">
                <div className="text-white font-bold uppercase hover:underline">
                {notification }
                </div>
            
            </div>
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
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                </a>
                                <p className="text-gray-700 dark:text-white text-sm mt-2">{product.description}</p>

                                <div className="flex items-center justify-between mt-4">
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