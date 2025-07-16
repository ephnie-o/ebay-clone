'use client'

import Link from "next/link"
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'
import debounce from "debounce"
import { useState } from "react";

export default function MainHeader() {

    const [items, setItems] = useState([])
    const [isSearching, setIsSearching] = useState(null)

    const handleSearchName = debounce(async (event) => {
        if (event.target.value == "") {
            setItems([])
            return
        }

        setIsSearching(true)

        try {
            const response = await fetch(`/api/products/search-by-name/${event.target.value}`)
            const result = await response.json()

            if (result) {
                setItems(result)
                setIsSearching(false)
                return
            }
            setItems([])
            setIsSearching(false)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }, 500)


    return (
        <>
            <div id="MainHeader" className="border-b border-gray-200">
                <div className="block md:hidden w-full text-center py-2">
                    <Link href='/'>
                        <img width='80' src="/images/logo.svg" alt="Logo" className="mx-auto" />
                    </Link>
                </div>
                <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between gap-4 sm:gap-10 max-w-[1150px] w-full px-3 py-3 sm:py-5 mx-auto">
                            <Link href='/'>
                                <img
                                    width='120'
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    className="w-[80px] sm:w-[100px] lg:w-[120px] hidden md:block"
                                />
                            </Link>

                            <div className="w-full">
                                <div className="relative">
                                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
                                        <div className="relative flex items-center border-2 border-gray-900 w-full p-2 ">
                                            <button className="flex items-center">
                                                <AiOutlineSearch size={18} className="sm:size-[22px]" />
                                            </button>

                                            <input
                                                className="
                                                    w-full
                                                    placeholder-gray-400
                                                    text-xs sm:text-sm
                                                    pl-2 sm:pl-3
                                                    focus:outline-none
                                                "
                                                onChange={handleSearchName}
                                                placeholder="Search for anything"
                                                type="text"
                                            />

                                            {isSearching ?
                                                <BiLoaderCircle
                                                    className="sm:size-[22px] mr-1 sm:mr-2 animate-spin"
                                                    size={18}
                                                />
                                            : null}

                                            {items.length > 0 ?
                                                <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-10 sm:top-12 border p-1 shadow-lg">
                                                    {items.map((item) => (
                                                        <div className="p-1" key={item.id}>
                                                            <Link
                                                                href={`/product/${item?.id}`}
                                                                className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                                            >
                                                                <div className="flex items-center">
                                                                    <img className="rounded-md" width="40" src={item?.url+'/40'} />
                                                                    <div className="truncate ml-2 text-xs sm:text-sm">{item?.title}</div>
                                                                </div>
                                                                <div className="truncate text-xs sm:text-sm">£{(item?.price / 100).toFixed(2)}</div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            : null}
                                        </div>

                                        <button className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-xs sm:text-sm font-semibold text-white p-[11px] sm:ml-2 sm:px-14">
                                            Search
                                        </button>

                                        <div className="hidden sm:block text-xs px-2 hover:text-blue-500 cursor-pointer">
                                            Advanced
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}