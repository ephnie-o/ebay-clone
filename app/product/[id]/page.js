'use client'

import SimilarProducts from "@/app/components/SimilarProducts"
import MainLayout from "../../layouts/MainLayout"
import { useCart } from "../../context/cart"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import useIsLoading from "../../hooks/useIsLoading"
import { useParams } from 'next/navigation'

export default function Product() {
    const cart = useCart()
    const { id } = useParams()

    const [product, setProduct] = useState({})

    const getProduct = async () => {
        useIsLoading(true)
        setProduct({})

        const response = await fetch(`/api/product/${id}`)
        const prod = await response.json()
        setProduct(prod)
        cart.isItemAddedToCart(prod)
        useIsLoading(false)

    }

    useEffect(() => {
        getProduct()
    }, [])


    return(
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row md:flex-row py-6 md:py-10 gap-6">

                        <div className="lg:w-[40%] md:w-[40%] w-full">
                            {product?.url
                            ? <img className="w-full rounded-lg max-h-[500px] object-contain" src={product?.url+'/280'} alt={product?.title} />
                            : <div className="w-full aspect-square bg-gray-100 rounded-lg"></div>
                            }
                        </div>

                        <div className="lg:w-[60%] md:w-[60%] w-full">
                            <div className="font-bold text-xl">{product?.title}</div>
                            <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>

                            <div className="border-b border-gray-200 my-3" />

                            <div className="py-2">
                                <div className="flex items-center">
                                Condition: <span className="font-bold text-[17px] ml-2">New</span>
                                </div>
                            </div>

                            <div className="border-b border-gray-200 my-3" />

                            <div className="py-3">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        Price:
                                        {product?.price
                                        ? <div className="font-bold text-[20px] ml-2">
                                            GBP £{(product?.price / 100).toFixed(2)}
                                            </div>
                                        : null }
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (cart.isItemAdded) {
                                                cart.removeFromCart(product)
                                                toast.info('Removed from cart', { autoClose: 3000 })
                                            } else {
                                                cart.addToCart(product)
                                                toast.success('Added to cart', { autoClose: 3000 })
                                            }
                                        }}
                                        className={`
                                            text-white py-2 px-4 rounded-full cursor-pointer bg-[#3498C9]
                                            ${cart.isItemAdded ? 'bg-[#e9a321] hover:bg-[#bf851a]' : 'bg-[#3498C9] hover:bg-[#0054A0]'}
                                            w-full sm:w-auto text-center
                                        `}
                                    >
                                        {cart.isItemAdded ? 'Remove From Cart' : 'Add To Cart'}
                                    </button>
                                </div>
                            </div>

                            <div className="border-b border-gray-200 my-3" />

                            <div className="py-3">
                                <div className="font-semibold pb-2">Description:</div>
                                <div className="text-sm whitespace-pre-line">{product?.description}</div>
                            </div>
                        </div>

                    </div>
                </div>

                <SimilarProducts />
            </MainLayout>
        </>
    )
}