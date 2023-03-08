import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../pages/home';
import Contacto from '../pages/contacto';
import Producto from '../pages/producto';

export const Rutas = () => (
    <BrowserRouter>
    <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route path = "/contacto" element={<Contacto/>}/>
        <Route path = "/producto" element={<Producto/>}/>
        <Route path = "*" element={() => <div>Error 404</div>}/>
    </Routes>
    </BrowserRouter>
)