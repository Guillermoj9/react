import React, { useRef, useContext} from 'react';
import { AppContext } from '../../aplicacion/provider/provider';
const Login = () => {

    let nom = useRef(null);
    const [state,setState] = useContext(AppContext);
    
    return (
        <input type="text" ref={nom} onChange={() =>
        {setState({name:nom.current.value})}} />
    );
}
export default Login;