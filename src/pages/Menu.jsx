import React from 'react'
import { menuData, menuCategories } from '../data/menuData'

const MenuCard = ({ nome, desc, prezzo }) => (
    <div className="menu-card">
        <h3>{nome}</h3>
        <p className="description">{desc}</p>
        <p className="price">€ {prezzo.toFixed(2)}</p>
    </div>
);

const Menu = () => (
    <div className='container mt-4 px-2 px-sm-3 px-md-4'>
        <h1 className='text-center mb-4 mb-md-5'>Il Nostro Menu</h1>
        {menuCategories.map(category => (
            <div key={category} className="menu-section mb-4 mb-md-5">
                <h2 className='menu-title mb-3 mb-md-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
                    {menuData[category].map(piatto => (
                        <div className="col" key={piatto.id}>
                            <MenuCard {...piatto} />
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export default Menu;