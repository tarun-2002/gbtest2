import React from "react";
import { NavLink } from "react-router-dom";
import '../components/Hamburger.css';

function Hamburger() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <label className="menu-label" htmlFor="navi-toggle" onClick={handleClick}>
                <span className={`icon ${click ? "clicked" : ""}`}>&nbsp;</span>
            </label>
            

            <div className={`navigation ${click ? "clicked" : ""}`}>
                <ul className="list">
                    <li>
                        <NavLink className="item-link" onClick={handleClick} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item-link" onClick={handleClick} to="/aboutus">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item-link" onClick={handleClick} to="/book">
                            Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item-link" onClick={handleClick} to="/contactus">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="item-link" onClick={handleClick} to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Hamburger;
