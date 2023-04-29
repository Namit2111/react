import React from 'react';

import NavSort from './NavSort';

function NavList({ value, onClickCategory }) {
    const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    return (
        <nav className="nav">
            <ul className="nav__list">
                {categories.map((categoryName, index) => (
                    <li key={index}>
                        <div
                            href="#index"
                            onClick={() => onClickCategory(index)}
                            className={value === index ? 'active' : ''}>
                            {categoryName}
                        </div>
                    </li>
                ))}
            </ul>
            <NavSort />
        </nav>
    );
}

export default NavList;
