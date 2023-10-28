import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from './Global';
import axios from 'axios';

export default class DetalleJugador extends Component {

    state = {
        jugador: [],
        status: false
    }

    cargarJugador = () => {
        var request = "api/jugadores/" + this.props.idjugador;
        var url = Global.apiApuestas;

        axios.get(url + request).then((response) => {
            this.setState({
                jugador: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarJugador();
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.status === true &&
                    (
                        <div className="card">
                            <h5 className="card-header">Detalles del jugador {this.state.jugador.idJugador}</h5>
                            <div className="row gap-2">
                                <img src={this.state.jugador.imagen} className="card-img-top col-md-6" style={{ width: "18rem" }} alt={this.state.jugador.nombre} />
                                <div className="card-body col-md-6">
                                    <p><b>Nombre: </b>{this.state.jugador.nombre}</p>
                                    <p><b>Posicion: </b> {this.state.jugador.posicion}</p>
                                    <p><b>Pais: </b> {this.state.jugador.pais}</p>
                                    <p><b>Posicion: </b> {this.state.jugador.posicion}</p>
                                    <p><b>Fecha de nacimiento: </b> {this.state.jugador.fechaNacimiento}</p>
                                    <div className="card-footer row gap-2">
                                        <NavLink className="btn btn-outline-danger col-md-3" to={'/plantilla/equipo/'+ this.state.jugador.idEquipo} >Volver</NavLink>
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
