import React from "react";
import Hlasses from './Header.module.css'


const Header = () => {
    return (
        <header className={Hlasses.header}>
            <img className={Hlasses.imag}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1024px-Vk_Logo.svg.png"
                 alt="gfahbab"/>
        </header>)
}

export default Header;