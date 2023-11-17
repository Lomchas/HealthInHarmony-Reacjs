import React from 'react'
import './menu.css'
import platos from '../../../utils/devAPI';



const Menu = () => {
  return (
    <>
      <main>
        <section id="menu" className="menu-section">
          <div className="container">
            <h2>Nuestro Delicioso Menú</h2>
            <div className="container-items">
              {platos.map((item, i) => (
                <div key={i} className="menu-item">
                  <div className="container-img">
                    <img src={item.imagen} alt="Plato 1" />
                  </div>
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <span className="price">{item.precio}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Menu