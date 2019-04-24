import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Product catalog</Link>
                </li>
                <li>
                    <Link to="/basket-summary">Basket summary</Link>
                </li>
            </ul>
            <hr />
        </div>
    );
}


export default Header;