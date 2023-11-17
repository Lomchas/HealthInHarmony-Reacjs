import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="logo">
                        <a href="index.html"><img src={logo} alt="Health in Harmony" /></a>
                        <span>Health in Harmony</span>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                    <ul className="menu">
                        <li><NavLink to="/" >Inicio</NavLink></li>
                        <li><NavLink to="/menu">Menú</NavLink></li>
                        <li><NavLink to="/about">Acerca de Nosotros</NavLink></li>
                        <li><NavLink to="/contact">Contáctanos</NavLink></li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav