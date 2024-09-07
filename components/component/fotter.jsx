import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="bg-white shadow  dark:bg-gray-800">
                <div className="w-full flrex mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex">© 2024 <a href="" className="hover:underline"><div className='text-sm font-bold'>
                        <span className='text-green-600'>&lt;</span>
                        <span >Blog</span>
                        <span className='text-green-600'>Post.com&gt;</span>
                    </div></a>. All Rights Reserved.
                    </span>
                    <span className='flex text-gray-400'>Created with &nbsp; <img className='w-3 mt-1 justify-center' src="/heart.png" alt="love" />&nbsp; by Ajith Narayan</span>
                    <ul className="flex flex-wrap items-center mt-3 tex t-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link href="/about" prefetch={false} className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" prefetch={false} className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer