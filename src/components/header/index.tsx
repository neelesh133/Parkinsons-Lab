"use client"
import { useState } from 'react'
import Image from 'next/image'
import Logo from "@/assets/logo-svg/logo-white.svg"
import Link from 'next/link'
export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Test", path: "form"},
        { title: "About us", path: "/aboutus" },
        { title: "Team", path: "/team" }
    ]

    return (
        <nav className="overflow-hidden bg-black top-0 z-30  w-full">
            <div className="items-center  z-30 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex z-30 items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <Image
                            className='-my-[100px]'
                            src={Logo}
                            width={250}
                            height={20}
                            alt="Parkinsons Lab"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="z-30 justify-end items-center space-y-6 md:flex md:space-x-20 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="z-30 text-white text-xl tracking-wide font-mono hover:text-cyan-200">
                                        <Link href={item.path} className="block" >
                                            {item.title} 
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}