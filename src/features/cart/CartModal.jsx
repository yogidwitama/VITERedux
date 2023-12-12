import Modal from '../../components/Modal';
import { useSelector } from "react-redux";
import { selectCartItems } from './cartSlice';

const CartModal = () => {
    const cartItems = useSelector(selectCartItems);
    return (
        <div>
            <Modal>
                <div className='flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]'>
                    <div className='flex flex-col gap-6 max-h-[500px] overflow-auto'>
                        {cartItems.map((product) => {
                            return (
                                <div key={product.id}
                                    className='w-full border-b-4 border-blue-200 pb-2'>
                                    <div className='w-[120px] h-auto overflow-hidden'>
                                        <img src={product.image} alt={product.title} className='w-full object-cover' />

                                    </div>
                                    <div className='ml-10 w-[75%]'>
                                        <h3 className='font-bold'>{product.title}</h3>

                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default CartModal
