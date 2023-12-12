import Cart from "../assets/cart.svg";
import {useSelector} from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";

const Header = ({handleOpenModalCart}) => {
    const cartTotalItems = useSelector(selectCartTotalItems);
    // console.log(cartTotalItems);
    return (
        <header className="bg-blue-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <h1 className="text-3xl font-bold text-gray-100">Simple</h1>
                    <button
                        type="button"
                        className="relative rounded-full bg-blue-800 p-2"
                        onClick={handleOpenModalCart}
                    >
                        <span className="absolute -top-2 -right- w-6 h-6 rounded-full bg-red-600 text-white text-sm flex flex-center justify-center " >{cartTotalItems}</span>
                        <img src={Cart} alt="cart" className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
