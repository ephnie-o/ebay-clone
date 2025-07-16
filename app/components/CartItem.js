'use client'

import { useCart } from "../context/cart"
import { toast } from "react-toastify"

export default function CartItem({ product }) {

    const cart = useCart()

    const removeItemFromCart = () => {
        let res = confirm(`Are you sure you want to remove this? "${product.title}"`)
        if (res) {
            cart.removeFromCart(product)
            toast.info('Removed from cart', { autoClose: 3000 })
        }
    }

    return (
        <>
            <div className="relative flex flex-col sm:flex-row justify-start my-2 border border-gray-200 w-full p-4 sm:p-6">
                <div className="flex justify-center sm:block mb-4 sm:mb-0">
                    <img src={product?.url+'/150'} className="rounded-md w-full max-w-[150px] h-auto sm:w-[150px] sm:h-[150px]" alt={product?.title} />
                </div>

                <div className="overflow-hidden sm:pl-4 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                        <div className="font-semibold text-base w-[400px] sm:text-[16px] underline break-words">
                            {product?.title}
                        </div>
                        <div className="font-bold text-lg mt-2 sm:mt-0">
                            £{(product?.price / 100).toFixed(2)}
                        </div>
                    </div>

                    <div className="font-semibold mt-2 text-sm sm:text-base">
                        NEW
                    </div>

                    <div className="text-sm mt-2 line-clamp-2 sm:line-clamp-3">
                        {product?.description.substring(0, 150)}...
                    </div>

                    <div className="mt-4 sm:absolute sm:right-0 sm:bottom-0 sm:p-4 text-sm">
                        <button onClick={() => removeItemFromCart()} className="underline text-blue-500 hover:text-blue-700">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}