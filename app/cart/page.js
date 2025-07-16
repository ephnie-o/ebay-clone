"use client"

import MainLayout from "../layouts/MainLayout"
import SimilarProducts from "../components/SimilarProducts"
import CartItem from "../components/CartItem"
import { useCart } from "../context/cart"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useIsLoading from "../hooks/useIsLoading"
import ClientOnly from "../components/ClientOnly"

export default function Cart() {
    const router = useRouter()
    const cart = useCart()

    useEffect(() => {
        useIsLoading(true)
        cart.getCart()
        cart.cartTotal()
        useIsLoading(false)
    }, [cart])

    const goToCheckout = () => {
        if (!cart.cartTotal()) {
        alert("You don't have any items in the cart.")
        return
        }
        router.push('/checkout')
    }

    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px] px-4">
                    <div className="text-2xl font-bold my-4">Shopping cart</div>
                    <div className="flex flex-col lg:flex-row md:flex-row gap-6">
                        <ClientOnly>
                            <div className="w-full lg:w-[100%] md:w-[100%]">
                                {cart.getCart().map(product => (
                                    <CartItem key={product.id} product={product}/>
                                ))}
                            </div>
                        </ClientOnly>

                        <div id="GoToCheckout" className="w-full lg:w-[50%] md:w-[100%]">
                            <ClientOnly>
                                <div className="bg-white p-4 border border-gray-200 sticky top-4">
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => goToCheckout()}
                                            className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-2"
                                        >
                                            Go to checkout
                                        </button>

                                        <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                            <div>Items ({cart.getCart().length})</div>
                                            <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                                        </div>
                                        <div className="flex items-center justify-between mb-4 text-sm">
                                            <div>Shipping:</div>
                                            <div>Free</div>
                                        </div>

                                        <div className="border-b border-gray-300"/>

                                        <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                            <div>Subtotal</div>
                                            <div>£{(cart.cartTotal() / 100).toFixed(2)}</div>
                                        </div>
                                    </div>
                                </div>
                            </ClientOnly>
                        </div>
                    </div>
                </div>

                <SimilarProducts />
            </MainLayout>
        </>
    )
}
