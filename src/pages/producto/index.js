import React from 'react';
import { Link } from 'react-router-dom';

function Producto() {
    return (
    <div>
        <h1>Producto</h1>
        
        <ul>
            <li> <Link to= {`/`}>Volver al inicio</Link></li>
        </ul>
    </div>
    );
}
export default Producto;