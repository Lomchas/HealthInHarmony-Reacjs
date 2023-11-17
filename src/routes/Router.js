import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/views/home/Home.js';
import Menu from '../components/views/menu/Menu.js';
import About from '../components/views/about/About.js';
import Contact from '../components/views/contact/Contact.js';
import Nav from '../components/nav/Nav.js';
import Footer from '../components/footer/Footer.js';


const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' exact Component={Home}/>
                <Route path='/menu' Component={Menu} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
                <Route path="*" element='Page Not Found' />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router