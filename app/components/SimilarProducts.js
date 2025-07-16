'use client'

import { useEffect, useState } from "react"
import { BiLoader } from "react-icons/bi"
import ProductComp from "./Product"

export default function SimilarProducts () {

    const [products, setProducts] = useState([])

    const getRandomProducts = async () => {
        try {
            const response = await fetch('/api/products/get-random')
            const result = await response.json()

            if (result) {
                setProducts(result)
                return
            }

            setProducts([])
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => { getRandomProducts() }, [])

    return (
        <>
            <div className="px-4">
                <div className="border-b py-1 max-w-[1200px] mx-auto" />

                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar sponsored items</div>

                    {products.length > 0 ?
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pb-4">
                            {products.map(product => (
                                <ProductComp key={product.id} product={product} />
                            ))}
                        </div>
                    : <div className="flex items-center justify-center py-8">
                        <div className="flex items-center justify-center gap-4 font-semibold">
                            <BiLoader size={30} className="text-blue-400 animate-spin"/>
                            Loading Products...
                        </div>
                    </div>}
                </div>

            </div>
        </>
    )
}