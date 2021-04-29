import React, { Fragment, useState } from 'react'
import './styles/ComponentsStyles.css';
import image from '../assets/girl_1.jpg';

export default function BirthdateComponent({onUpdateBirthdate, nextStep}) {

    const [data, setData] = useState({
        day: '',
        month: '',
        year: '',
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value,
        });
        onUpdateBirthdate({
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
                                    <h4 style={{marginTop:5}}>¿Cuál es tu fecha de nacimiento?</h4>
                                    <input 
                                        placeholder="Dia" 
                                        name="day" 
                                        type="text" 
                                        className="form-control mt-4 input"
                                        onChange={handleInputChange} 
                                    />

                                    <input 
                                        placeholder="Mes" 
                                        name="month" 
                                        type="text" 
                                        className="form-control mb-4 mt-4 input"
                                        onChange={handleInputChange}
                                    />
                                    <input 
                                        placeholder="Año" 
                                        name="year" 
                                        type="text" 
                                        className="form-control mb-4 mt-4 input"
                                        onChange={handleInputChange}
                                    />
                              
                                </div>
                            </div>
                            <div className="row" style={{marginTop:10}}>
                                <div className="col-md-3">
                              
                                </div>
                                <div className="col-md-9 resultBox">
                                    <p>{data.day + ' ' + 'de' + ' ' + data.month + ' ' + 'de ' + data.year}</p>
                                </div>
                            </div>

                        </div>
                  
                    </form>
                    <button className="btn btn-success" style={{width:"90%"}} onClick={() => nextStep()} >Siguiente</button>
                </div>
                <div className="col-md-3"></div>
           
            </div>
        </Fragment>
    )
}
