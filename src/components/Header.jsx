import React from 'react'
const Header = () => {
    return (
        //  {/* contenitore header */}
        < div id="header-top" className="container-fluid p-0 d-flex justify-content-center">

            {/* contenitore logo e nome azienda */}
            <div className='header-logo-container d-flex flex-column justify-content-center align-items-center'>
                <img className='header-logo' src="/public/img/fiasco-header.webp" alt="" />
                <h1>Osteria Il Fiaschetto</h1>
            </div>
            <div>
                {/* contenitore menu */}
                <nav className='header-menu-container d-flex justify-content-center align-items-center'>
                    <ul className='header-menu d-flex justify-content-center align-items-center'>
                        <li className='header-menu-item'>Home</li>
                        <li className='header-menu-item'>Menu</li>
                        <li className='header-menu-item'>Contatti</li>
                        <li className='header-menu-item'>Chi siamo</li>
                    </ul>
                </nav>
            </div>
        </ div>
    )
}

export default Header