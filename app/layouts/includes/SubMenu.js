'use client'

export default function SubMenu() {

    const menuItems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'Saved' },
        { id: 3, name: 'Electronics' },
        { id: 4, name: 'Motors' },
        { id: 5, name: 'Fashion' },
        { id: 6, name: 'Collectables and Art' },
        { id: 7, name: 'Sports' },
        { id: 8, name: 'Health & Beauty' },
        { id: 9, name: 'Industrial Equipment' },
        { id: 10, name: 'Home & Garden' },
        { id: 11, name: 'Sell' },
    ]

    return (
        <>
            <div id="SubMenu" className="border-b border-gray-200">
                <div className="w-full mx-auto max-w-[1200px] px-4 py-4">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2">
                        {menuItems.map(item => (
                            <div 
                                key={item.id} 
                                className="
                                    text-center
                                    p-1
                                    hover:underline
                                    cursor-pointer
                                    text-[13px]
                                    text-[#333333]
                                "
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}