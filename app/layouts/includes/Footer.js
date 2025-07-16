'use client'

export default function Footer() {
    return (
        <>
            <div id="Footer" className="border-t border-gray-200 mt-20 px-4 sm:px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full mx-auto max-w-[1200px] py-8 sm:py-10">
                {/* Buy Section */}
                    <div className="text-gray-700">
                        <h3 className="font-bold text-lg mb-3 sm:mb-4">Buy</h3>
                        <ul className="space-y-2">
                            <li className="text-xs hover:underline cursor-pointer">Registration</li>
                            <li className="text-xs hover:underline cursor-pointer">eBay Money Back Guarantee</li>
                            <li className="text-xs hover:underline cursor-pointer">Bidding & buying help</li>
                            <li className="text-xs hover:underline cursor-pointer">Stores</li>
                        </ul>
                    </div>

                    {/* Sell Section */}
                    <div className="text-gray-700">
                        <h3 className="font-bold text-lg mb-3 sm:mb-4">Sell</h3>
                        <ul className="space-y-2">
                            <li className="text-xs hover:underline cursor-pointer">Start selling</li>
                            <li className="text-xs hover:underline cursor-pointer">Learn to sell</li>
                            <li className="text-xs hover:underline cursor-pointer">Affiliates</li>
                        </ul>
                    </div>

                    {/* About eBay Section */}
                    <div className="text-gray-700">
                        <h3 className="font-bold text-lg mb-3 sm:mb-4">About eBay</h3>
                        <ul className="space-y-2">
                            <li className="text-xs hover:underline cursor-pointer">Company info</li>
                            <li className="text-xs hover:underline cursor-pointer">News</li>
                            <li className="text-xs hover:underline cursor-pointer">Investors</li>
                            <li className="text-xs hover:underline cursor-pointer">Careers</li>
                            <li className="text-xs hover:underline cursor-pointer">Government relations</li>
                            <li className="text-xs hover:underline cursor-pointer">Policies</li>
                        </ul>
                    </div>

                    {/* Help & Contact Section */}
                    <div className="text-gray-700">
                        <h3 className="font-bold text-lg mb-3 sm:mb-4">Help & Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-xs hover:underline cursor-pointer">Contact Us</li>
                            <li className="text-xs hover:underline cursor-pointer">eBay Returns</li>
                            <li className="text-xs hover:underline cursor-pointer">Community</li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="text-gray-700">
                        <h3 className="font-bold text-lg mb-3 sm:mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li className="text-xs hover:underline cursor-pointer">eBay Sites</li>
                            <li className="text-xs hover:underline cursor-pointer">Developers</li>
                            <li className="text-xs hover:underline cursor-pointer">Security Center</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
                    <p>Copyright © 2023 eBay Inc. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}