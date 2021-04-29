import React, { Fragment, useState } from 'react'
import './styles/ComponentsStyles.css';
import image from '../assets/girl_1.jpg';

export default function ContactComponent({onUpdateContact, name, birthdate, finish}) {

    const [data, setData] = useState({
        email: '',
        phone: '',
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value,
        });
        onUpdateContact({
            ...data,
            [event.target.name] : event.target.value,
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(data.nombre + ' ' + data.apellidoPaterno);
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form className="column divParent" onSubmit={handleSubmit} >
                        <div className="row" style={{paddingTop:30}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={image} className="img" />
                                </div>
                                <div className="col-md-9 divQuestion">
                                    <h4 style={{marginTop:5}}>Datos de Contacto</h4>
                                    <input 
                                        placeholder="Correo Electronico" 
                                        name="email" 
                                        type="text" 
                                        className="form-control mt-4 input"
                                        onChange={handleInputChange} 
                                    />

                                    <input 
                                        placeholder="Telefono celular" 
                                        name="phone" 
                                        type="text" 
                                        className="form-control mb-4 mt-4 input"
                                        onChange={handleInputChange}
                                    />
                                  
                                
                                </div>
                                <div className="row" style={{marginTop:10}}>
                                    <div className="col-md-3">
                                
                                    </div>
                                    <div className="col-md-9 resultBox">
                                        <p>Correo electronico {data.email}</p>
                                        <p>Telefono celular {data.phone}</p>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:10}}>
                                    <div className="col-md-3">
                                
                                    </div>
                                    <div className="col-md-9 resultBoxGrey">
                                        <p>Si tus datos son correctos por favor continuemos</p>
                                    </div>
                                </div>
                                <button className="btn btn button" style={{width:"90%"}} onClick={() => finish()} >Iniciar</button>
                                <div className="row" style={{marginTop:10}}>
                                  
                                    <div className="resultBox" style={{margin:20}}>
                                        <p>Fecha de nacimiento {birthdate.day + ' ' + 'de' + ' ' + birthdate.month + ' ' + 'de ' + birthdate.year}</p>
                                        <p>Correo electronico {data.email}</p>
                                        <p>Telefono celular {data.phone}</p>
                                        <p>Nombre {name.nombre + ' ' + name.segundoNombre + ' ' + name.apellidoPaterno + ' ' + name.apellidoMaterno}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
          
                    </form>

                </div>
                <div className="col-md-3"></div>
           
            </div>
        </Fragment>
    )
}
