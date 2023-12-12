import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCartItems } from "../cart/cartSlice";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const cartItem =useSelector(state=>state.cart.cartItems);
    // best practice below
    const cartItem =useSelector(selectCartItems)
    // console.log(cartItem)



    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json();
                setProducts(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [])


    const handleClickBuy = (product) => {
        dispatch(addItemToCart(product))
    };

    return (
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">

            {products.map((product) => {
                return (
                    <div key={product.id} className="bg-white rounded-xl border shadow p-4">
                        <div className="group relative w-[75%] h-[300px] mx-auto overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full h-full object-containt group-hover:scale-110 transition-scale duration-500 ease-in-out" />
                        </div>
                        <div className="flex flex-col gap-6 mt-8">
                            <button
                                type="button"
                                className="bg-blue-700 hover:bg-blue-800 text-white  rounded-lg text-sm py-3 px-8"
                                onClick={() => handleClickBuy(product)}
                            >
                                buy now
                            </button>
                            <h3 className="font-bold">{product.title}</h3>
                            <h3>{product.price}</h3>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default ProductList
