import React from 'react';
import { Link } from 'react-router-dom';

import emptyCart from '../assets/img/cart-empty.png';

const EmptyCart = () => {
    window.scrollTo(0, 0);
    return (
        <section className="cart">
            <h3 className="cart-status">Cart is empty 😕</h3>
            <p>
                You probably haven't ordered pizza yet. <br />
                To order pizza, go to the main page.
            </p>
            <img src={emptyCart} alt="cart is empty" />
            <Link className="btn" to="/  ">
                Come back
            </Link>
        </section>
    );
};

export default EmptyCart;
