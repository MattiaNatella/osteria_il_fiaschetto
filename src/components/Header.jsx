
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <div id="header-top" className='container p-0 h-100 d-flex justify-content-between align-items-center'>

                <div className='logo-nome'>
                    Circolo Il Fiaschetto
                </div>

                <div>
                    <ul className='d-flex justify-content-between align-items-center list-unstyled m-0'>
                        <NavLink className='mx-4' to={'/'}>Home</NavLink>
                        <NavLink className='mx-4' to={'/menu'}>Menu</NavLink>
                        <li className='mx-4'><a href="#">Contatti</a></li>
                        <li className='mx-4'><a href="#">Prenota</a></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header