import React from "react";
import '../style/footer.css';
import logo from '../bionew-logo.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';

export function Footer() {
    return (
        <footer>
            <ul className="adresses">
                <li>
                    <h3>Adresse du magasin</h3>
                    <p>Rue 9 N10 BD 6 Novembre <br></br> Idriss El Harti SEBATA Casablanca</p>
                </li>
                <li>
                    <h3>Adresse du siège</h3>
                    <p>285 Avenue Brahim Roudani, <br></br> Etage1 N°2 Maarif, Casablanca.</p>
                </li>
            </ul>
            <div className="media-links">
                <img src={logo} className="logo"/>
                <ul className="media">
                    <li><a href=""><AiOutlineInstagram size="47px" color='white' /></a></li>
                    <li><a href=""><CiFacebook size="45px" color='white' /></a></li>
                </ul>
            </div>
            <div className="links">
                <h3>Liens rapides</h3>
                <a href="">Boutique</a>
                <a href="">Professionel</a>
                <a href="">A propos</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
            </div>
        </footer>
    )
}