import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'


const DefaultLayout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="default-layout">
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </>

    )
}

export default DefaultLayout