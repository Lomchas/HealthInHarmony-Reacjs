import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'


const Footer = () => {
    return (
        <>
            <footer id="contacto">
                <div className="container">
                    <h3>Contact - us</h3>
                    <p>Estamos ubicados en Medellín, Colombia</p>
                    <p>Teléfono: +57 123 456 789</p>
                    <p>Correo Electrónico: info@healthinharmony.com</p>
                    <div className="social-links">
                        <Link target="_blank" href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></Link>
                        <Link target="_blank" href="https://twitter.com/"><img src={twitter} alt="Twitter" /></Link>
                        <Link target="_blank" href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer