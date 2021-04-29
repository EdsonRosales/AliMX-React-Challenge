import React, { Fragment, useState } from 'react'

export default function NameComponent() {
    return (
        <Fragment>
            <h1>¿Cuál es tu fecha de nacimiento?</h1>
            <form className="column" >
                <div className="col-md-3" >
                    <input placeholder="Día" className="form-control mt-4" />
                </div>
                <div className="col-md-3" >
                    <input placeholder="Mes" className="form-control mb-4 mt-4" />
                </div>
                <div className="col-md-3" >
                    <input placeholder="Año" className="form-control mb-4 mt-4" />
                </div>
            </form>
        </Fragment>
    )
}
