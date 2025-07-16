'use client'

import Footer from "./includes/Footer"
import MainHeader from "./includes/MainHeader"
import SubMenu from "./includes/SubMenu"
import TopMenu from "./includes/TopMenu"
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

export default function MainLayout({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() =>{
        window.addEventListener("storage", function () {
            let res = localStorage.getItem('isLoading')
            res === 'false' ? setIsLoading(false) : setIsLoading(true)
        })
        return () => {
            window.removeEventListener("storage", () => {})
        }
    }, [])

    return (
        <>
            <div id="MainLayout" className="min-h-screen flex flex-col">
                {isLoading && <Loading />}

                <div className="flex-grow">
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />

                    {/* Main content container with responsive padding */}
                    <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        {children}
                    </main>
                </div>

                <Footer />
            </div>
        </>
    )
}