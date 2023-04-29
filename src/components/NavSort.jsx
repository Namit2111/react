import React from 'react';

import arrow from '../assets/img/arrow.svg';

function NavSort() {
    const [isActive, setIsActive] = React.useState(false);
    const [selected, setSelected] = React.useState(0);
    const list = ['popularity', 'price', 'alphabet'];

    const onClickList = (i) => {
        setSelected(i);
        setIsActive(false);
    };
    return (
        <div className="nav__sort">
            <img src={arrow} alt="^-^" />
            <p>
                Sort by <span onClick={() => setIsActive(!isActive)}>{list[selected]}</span>
            </p>
            <ul className={isActive ? 'nav__menu_active' : 'nav__menu'}>
                {list.map((names, i) => (
                    <li
                        key={i}
                        onClick={() => onClickList(i)}
                        className={selected === i ? 'menu__item_active' : 'menu__item'}>
                        {names}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NavSort;
