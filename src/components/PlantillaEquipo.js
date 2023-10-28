import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class PlantillaEquipo extends Component {
    state = {
        jugadores: [],
        status: false
    }

    cargarPlantillaEquipo = () => {
        var request = "api/jugadores/jugadoresequipos/" + this.props.idequipo;
        var url = Global.apiApuestas;

        axios.get(url + request).then((response) => {
            this.setState({
                jugadores: response.data,
                status: true
            });
        })
    }

    componentDidMount = () => {
        this.cargarPlantillaEquipo();
    }

    render() {
        return (
            <div className="row m-auto text-center">
                <h1>Plantilla Equipo</h1><hr/>
                {
                    this.state.status === true &&
                    (
                        this.state.jugadores.map(function (jugadores, index) {
                            return (
                                <div key={index} className="col-md-3 p-2">
                                    <img src={jugadores.imagen} alt={jugadores.nombre} className="bd-placeholder-img rounded-circle" width="140" height="140" />
                                    <h2 className="fw-normal">{jugadores.nombre}</h2>
                                    <p><b>Posicion: </b> {jugadores.posicion}</p>
                                    <p><b>Pais: </b> {jugadores.pais}</p>
                                    <p><b>Posicion: </b> {jugadores.posicion}</p>
                                    <p><b>Fecha de nacimiento: </b> {jugadores.fechaNacimiento}</p>
                                    <NavLink className="btn btn-outline-success" to={'/jugador/'+jugadores.nombre+'/' + jugadores.idJugador}> Detalles</NavLink>
                                </div>
                            )
                        })
                    )
                }
            </div>
        )
    }
}
