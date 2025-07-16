'use client'

import { usePathname } from "next/navigation"

export default function CheckoutItem({ product }) {

    const pathname = usePathname()

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-start rounded-lg mb-2 border border-gray-200 p-3 sm:p-4">
                <div className="flex justify-center sm:justify-start mb-3 sm:mb-0">
                    <img className="rounded-md w-full max-w-[150px] h-auto sm:w-[150px] sm:h-[150px]" src={product.url+'/150'} alt={product.title} />
                </div>

                <div className="overflow-hidden sm:pl-3">
                    <div className="font-semibold text-base sm:text-[16px]">
                        { product.title }
                    </div>

                    <div className="text-lg font-semibold mt-1">
                        <span className="font-bold">£{(product.price / 100).toFixed(2)}</span>
                    </div>

                    <div className="relative flex items-center text-[13px] sm:text-[14px] text-gray-500 mt-1">
                        <div className="line-through">£{((product.price * 1.2) / 100).toFixed(2)}</div>
                        <div className="px-2">-</div>
                        <div className="line-through">20%</div>
                    </div>

                    <div className="text-sm mt-2 line-clamp-2 sm:line-clamp-3">
                        {product.description.substring(0, 130)}...
                    </div>

                    {pathname == '/cart' ?
                        <div className="text-sm mt-3 w-full flex justify-end sm:justify-start underline text-blue-500 hover:text-blue-700 cursor-pointer">
                            Remove
                        </div>
                    : null}
                </div>
            </div>
        </>
    )
}