import React from 'react'
import { menuCena, menuCategories } from '../data/menuCena'

const MenuCard = ({ nome, desc, prezzo, img }) => (
    <div className="menu-card">
        <div className="menu-card-image-wrapper">
            <img
                src={img || '/placeholder-dish.jpg'}
                alt={nome}
                className="menu-card-image"
            />
        </div>
        <h3>{nome}</h3>
        <p className="description">{desc}</p>
        <p className="price">€ {prezzo.toFixed(2)}</p>
    </div>
);

const Menu = () => (
    <div className='container mt-4 px-2 px-sm-3 px-md-4'>
        <div className="d-flex justify-content-center">
            <h1 className='menu-title main-title mb-4 mb-md-5'>Menù Cena</h1>
        </div>
        {menuCategories.map(category => (
            <div key={category} className="menu-section mb-4 mb-md-5">
                <h2 className='menu-title mb-3 mb-md-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
                    {menuCena[category].map(piatto => (
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