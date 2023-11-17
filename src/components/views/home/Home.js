import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Bienvenido a Health in Harmony</h1>
          <p>Tu destino para la comida saludable y deliciosa</p>
          <Link to='/menu' className="btn">Explorar Menú</Link>
        </div>
      </div>
    </>
  )
}

export default Home