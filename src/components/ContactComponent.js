import React, { Fragment, useState } from 'react'

export default function NameComponent() {
    return (
        <Fragment>
            <h1>Datos de Contacto</h1>
            <form className="column" >
                <div className="col-md-3" >
                    <input placeholder="Correo electrónico" type="email" className="form-control mt-4" />
                </div>
                <div className="col-md-3" >
                    <input placeholder="Teléfono celular" type="date" className="form-control mb-4 mt-4" />
                </div>
                <div className="col-md-3" >
                    <button className="btn btn-primary" type="submit" >Iniciar</button>
                </div>
            </form>
        </Fragment>
    )
}
