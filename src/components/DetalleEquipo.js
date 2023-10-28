import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetalleEquipo extends Component {

    state = {
        equipo: [],
        status: false
    }

    cargarEquipo = () => {
        var request = "api/equipos/" + this.props.idequipo;
        var url = Global.apiApuestas;

        axios.get(url + request).then((response) => {
            this.setState({
                equipo: response.data,
                status: true
            })
        });
    }

    componentDidUpdate = (oldProps)=>{
        if(this.props.idequipo !== oldProps.idequipo){
            this.cargarEquipo();
        }
    }
    componentDidMount = () => {
        this.cargarEquipo();
    }
    render() {
        return (
            <div className="container pt-5">
                {this.state.status === true &&
                    (
                        <div className="card">
                            <h5 className="card-header">Detalles del Equipo {this.state.equipo.idEquipo}</h5>
                            <div className="row gap-2">
                                <img src={this.state.equipo.imagen} className="card-img-top col-md-6" style={{width:"18rem"}} alt={this.state.equipo.nombre}/>
                                <div className="card-body col-md-6">
                                    <p><b>Nombre: </b>{this.state.equipo.nombre}</p>
                                    <p><b>Descripcion: </b>{this.state.equipo.descripcion}</p>
                                    <p><b>Champions:</b>{this.state.equipo.champions}</p>
                                    <p><b>Web:</b> {this.state.equipo.web}</p>
                                    <p><b>Finalista:</b> {this.state.equipo.finalista}</p>
                                    <div className="card-footer row gap-2">
                                        <NavLink className="btn btn-outline-danger col-md-3" to="/" >Volver</NavLink>
                                        <NavLink className="btn btn-outline-primary col-md-6" to={'/plantilla/equipo/'+this.state.equipo.idEquipo}>Plantilla</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
