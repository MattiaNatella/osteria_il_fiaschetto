
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <div id="header-top" className='container   d-flex justify-content-between align-items-center'>

                <div className='logo-nome'>
                    <h1>Circolo Il Fiaschetto</h1>
                </div>

                <div>
                    <ul className='d-flex justify-content-between align-items-center list-unstyled m-0'>
                        <NavLink className='mx-sm-4 mx-auto' to={'/'}>Home</NavLink>
                        <NavLink className='mx-sm-4 mx-auto' to={'/menu'}>Menu</NavLink>
                        <li className='mx-sm-4 mx-auto'><a href="#">Contatti</a></li>
                        <li className='mx-sm-4 mx-auto'><a href="#">Prenota</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header