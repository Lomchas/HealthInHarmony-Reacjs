import React from 'react';
import './about.css';
import illustration from '../../../assets/team.png';

const About = () => {
  return (
    <>
      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="container-title">
            <h2>Acerca de Nosotros</h2>
            <img src={illustration} alt="Nuestro Equipo" />
          </div>
          <div className="about-content">
            <p>Somos un equipo apasionado por brindar alimentos saludables y deliciosos. En Health in Harmony,
              creemos en el poder de la nutrición para mejorar la vida de las personas.</p>
            <p>Nuestra misión es ofrecer opciones de comida saludable que no solo sean beneficiosas para la
              salud, sino también deliciosas y satisfactorias para el paladar. Nos comprometemos a utilizar
              ingredientes frescos y de alta calidad en cada plato que servimos.</p>
            <p>Desde nuestros inicios, hemos trabajado arduamente para crear un ambiente acogedor y armonioso
              donde nuestros clientes puedan disfrutar de una experiencia culinaria única. Estamos
              comprometidos con la sostenibilidad y apoyamos a los agricultores locales siempre que sea
              posible.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About