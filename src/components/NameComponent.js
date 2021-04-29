import React, { Fragment, useState } from 'react'

export default function NameComponent() {

    const [data, setData] = useState({
        nombre: '',
        segundoNombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
    })

    return (
        <Fragment>
            <h1>¿Cuál es tu nombre?</h1>
            <form className="column" >
                <div className="col-md-3" >
                    <input placeholder="Nombre" type="text" className="form-control mt-4" />
                </div>
                <div className="col-md-3" >
                    <input placeholder="Segundo Nombre" type="text" className="form-control mb-4 mt-4" />
                </div>
                <div className="col-md-3" >
                    <input placeholder="Apellido Paterno" type="text" className="form-control mb-4 mt-4" />
                </div>
                <div className="col-md-3" >
                    <input placeholder="Apellido Materno" type="text" className="form-control mb-4 mt-4" />
                </div>
            </form>
        </Fragment>
    )
}
