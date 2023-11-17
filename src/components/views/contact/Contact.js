import React from 'react'
import './contact.css'
import illustration from '../../../assets/ContactUs.png';

const contact = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-form">
            <h3>Envíanos un Mensaje</h3>
            <form action="procesar_formulario.php" method="POST">
              <div className="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>
              </div>
              <div className="form-group">
                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" name="correo" required/>
              </div>
              <div className="form-group">
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn">Enviar Mensaje</button>
              </div>
            </form>
          </div>
          <div className="container-illustration">
            <img src={illustration} alt="contact us"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default contact