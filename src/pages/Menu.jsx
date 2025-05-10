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
    <div className='container mt-4'>
        <h1 className='text-center mb-5'>Il Nostro Menu</h1>
        {menuCategories.map(category => (
            <div key={category} className="menu-section mb-5">
                <h2 className='menu-title mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
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