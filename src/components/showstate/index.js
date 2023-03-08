import React, { useRef, useContext } from 'react';
import { AppContext } from '../../aplicacion/provider/provider';
const Showstate = () => {

    const [state,setState] = useContext(AppContext);
    return (
        <div>
            <p>{state.name}</p>
        </div>
    );
}
export default Showstate;