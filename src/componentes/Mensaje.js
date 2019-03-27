import React from 'react';

const Mensaje =(props)=>{
    return(
        <div className="container">
            <div className=" col s12 m6 offset-m3">
                <div className="card-panel red darken-4 error">
                    {props.mensaje}
                </div>
            </div>
        </div>
    )
}

export default Mensaje;