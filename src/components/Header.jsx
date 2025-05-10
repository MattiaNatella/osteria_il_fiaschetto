import React from 'react'

const Header = () => {
    return (
        <>

            <div id="header-top" className='container border border-2 p-0 h-100 d-flex justify-content-around align-items-center'>

                <div className='logo-nome'>
                    Osteria Il Fiaschetto
                </div>

                <div>
                    <ul className='d-flex justify-content-between align-items-center list-unstyled m-0'>
                        <li className='mx-4'><a href="#">Home</a></li>
                        <li className='mx-4'><a href="#">Menu</a></li>
                        <li className='mx-4'><a href="#">Contatti</a></li>
                        <li className='mx-4'><a href="#">Prenota</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header