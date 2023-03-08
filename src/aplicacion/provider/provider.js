import React, { createContext, useState, useEffect } from 'react';
const Myprovider = ({ children }) => {

const [state, setState] = useState({});
return (
     <div>
        <AppContext.Provider value={[state, setState ]}>
            {children}
        </AppContext.Provider>
     </div>
    );
}
export default Myprovider;
export const AppContext = createContext();