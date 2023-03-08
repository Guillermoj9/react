import React from 'react';
import { Link } from 'react-router-dom';

function Contacto() {

    return (
    <div>
        <h1>Concacto</h1>
        
        <ul>
            <li> <Link to= {`/`}>Volver al inicio</Link></li> 
        </ul>
    </div>
    );
}
export default Contacto;