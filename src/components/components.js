import React from "react";


export const Mycomponent =({param,param2, children}) => <div>
    Lorem ipsum dolor sit amet, consectetur
    Lorem importedum {param} {param2}

    <p>{children}</p>
</div>;
export const Mycomponent2 = _ => <div>
Lorem ipsum dolor sit amet, consectetur.
</div>;

export default _ => <div>Por defecto</div>;