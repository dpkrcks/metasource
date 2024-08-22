import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className='h-screen w-screen flex flex-col'>
            <Navbar />
            <div className="flex-1 overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}
