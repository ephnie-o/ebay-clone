"use client"

import Link from "next/link";
import { CiDeliveryTruck } from 'react-icons/ci'
import MainLayout from "../layouts/MainLayout";
import { useUser } from "../context/user";
import useIsLoading from "../hooks/useIsLoading";
import { useState, useEffect } from "react";
import { toast } from "react-toastify"
import moment from "moment";

export default function Orders() {

    const { user } = useUser()
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        try {
            if (!user && !user?.id) return
            const response = await fetch("/api/orders")
            const result = await response.json()
            setOrders(result)
            useIsLoading(false)
        } catch (error) {
            toast.error('Something went wrong?', { autoClose: 3000 })
            useIsLoading(false)
        }
    }

    useEffect(() => {
        useIsLoading(true)
        getOrders()
    }, [user])

    return (
        <>
            <MainLayout>
                <div id="OrdersPage" className="mt-4 max-w-[1200px] mx-auto px-4 min-h-[50vh]">
                    <div className="bg-white w-full p-4 sm:p-6 min-h-[150px] rounded-lg shadow-sm">
                        <div className="flex items-center text-xl">
                            <CiDeliveryTruck className="text-green-500" size={30}/>
                            <span className="pl-3 sm:pl-4">Orders</span>
                        </div>
                        {orders.length < 1 ?
                            <div className="flex items-center justify-center py-8 text-gray-500">
                                You have no order history
                            </div>
                        : null}

                        <div className="mt-4 space-y-6">
                            {orders.map(order => (
                                <div key={order?.id} className="border-b border-gray-200 pb-6 last:border-0">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">

                                        <div>
                                            <span className="font-bold">Order ID: </span>
                                            {order?.stripe_id}
                                        </div>

                                        <div>
                                            <span className="font-bold">Delivery Address: </span>
                                            {order?.name}, {order?.address}, {order?.zipcode}, {order?.city}, {order?.country}
                                        </div>

                                        <div>
                                            <span className="font-bold">Total: </span>
                                            £{order?.total / 100}
                                        </div>

                                        <div>
                                            <span className="font-bold">Order Created: </span>
                                            {moment(order?.created_at).calendar()}
                                        </div>

                                        <div>
                                            <span className="font-bold">Delivery Time: </span>
                                            {moment(order?.created_at).add(3, 'days').calendar()}
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="font-semibold mb-2">Items:</h4>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                            {order?.orderItem.map(item => (
                                                <Link key={item.id} href={`/product/${item.product_id}`} className="group border border-gray-200 rounded-lg p-2 hover:shadow transition-all">
                                                    <img className="rounded w-full aspect-square object-cover mb-2" width="120" src={item.product.url+'/120'} alt={item.product.title} />
                                                    <div className="text-sm font-medium group-hover:text-blue-600 line-clamp-2">
                                                        {item.product.title}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}