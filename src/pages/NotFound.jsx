import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="cart">
            <h3 className="cart-status">Page is not found 😕</h3>
            <p>
                You probably wrote incorrect page name. <br />
                To order pizza, go to the main page.
            </p>
            <Link className="btn" to="/">
                Go to main page
            </Link>
        </section>
    );
};

export default NotFound;
