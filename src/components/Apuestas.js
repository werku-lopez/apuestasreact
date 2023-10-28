import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Apuestas extends Component {

    state = {
        apuestas: [],
        status: false,
    }

    loadApuestas = () => {
        var request = "api/apuestas";
        var url = Global.apiApuestas;
        axios.get(url + request).then((response) => {
            this.setState({
                apuestas: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        return (
            <div className="container pt-5">
                <div className="row gap-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1>Apuestas</h1>
                        <NavLink to="/nueva-apuesta" className="btn btn-outline-primary"> crear apuesta</NavLink>
                    </div><hr />
                    {
                        this.state.status === true &&
                        (
                            this.state.apuestas.map(function (apuesta, index) {
                                return (
                                    <div className="card col-md-3" style={{ width: " 18rem" }} key={index}>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>Usuario: </b> {apuesta.usuario}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary"><b>Fecha: </b> {apuesta.fecha}</h6>
                                            <p className="card-text"><b>Resultado: </b> {apuesta.resultado}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        )
    }
}
