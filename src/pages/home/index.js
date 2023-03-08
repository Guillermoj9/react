import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
    <div>
        <h1>Home</h1>
        
        <ul>
            <li> <Link to= {`/`}>Inicio</Link></li>
            <li> <Link to= {`/contacto`}>Contacto</Link></li>
            <li> <Link to= {`/producto`}>Producto</Link></li>
        </ul>
    </div>
    );
}
export default Home;