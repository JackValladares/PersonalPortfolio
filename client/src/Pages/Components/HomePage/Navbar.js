import {useState} from 'react';
import './Navbar.less';
function NavBar()
{

    const navButtons =
        [
            "Home",
            "About Me",
            "Portfolio",
            "Contact Me",
            "My Links"
        ]

    return (
        <div class="navBar">
            <ul class="navButtonHolder">
                {navButtons.map(button => (
                    <li key={button} class='navButton'>{button}</li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;