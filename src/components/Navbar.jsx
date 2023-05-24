import React from "react";
import logo from "../bionew-logo.png";
import '../style/navbar.css';

export function Navbar() {

    return (
        <nav>
            <img src={logo} />       
            <ul className="links">
                <li><a href="">Acceuil</a></li>
                <li><a href="">Boutique</a></li>
                <li><a href="">A propos</a></li>
                <li><a href="">Professionel</a></li>
                <li><a href="">Franchise</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">BLOG</a></li>
                <li>
                    <select name="" className="drop">
                        <option value="">Français</option>
                        <option value="">Anglais</option>
                    </select>
                </li>
                <li>
                    <select name="" className="drop">
                        <option value="">MAD</option>
                        <option value="">EUR</option>
                        <option value="">USD</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}