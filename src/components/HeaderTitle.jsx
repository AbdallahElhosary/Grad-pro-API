import React from 'react'
import { IoPersonCircle } from "react-icons/io5";


const HeaderTitle = ({ name }) => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Student Guide</h1>
                <div className='flex gap-2 justify-center items-center'>
                    <span className='text-xl'>{name ? name : "Login"}</span>
                    <a href="/login" className="rounded-full text-white bg-blue-700 p-2 hover:bg-blue-800">
                        <IoPersonCircle className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default HeaderTitle
