import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class CrearApuesta extends Component {
    state = {
        status: false
    }

    inputUsuario = React.createRef();
    inputResultado = React.createRef();
    inputFecha = React.createRef();

    asignarApuesta = (e) => {
        e.preventDefault();

        var usuario = this.inputUsuario.current.value;
        var resultado = this.inputResultado.current.value;
        var fecha = this.inputFecha.current.value;

        var apuesta = {
            idApuesta: 0,
            usuario: usuario,
            resultado: resultado,
            fecha: fecha
        }

        var request = "api/apuestas";
        var url = Global.apiApuestas;

        axios.post(url + request, apuesta).then((response) => {
            Swal.fire({
                position: 'top-centre',
                icon: 'success',
                title: "Se ha creado la apuesta",
                showConfirmButton: false,
                timer: 1000
            })
            this.setState({
                status: true
            })

        }).catch((error) => {
            console.log("Error al insertar");
            console.log(error);
        });

    }

    // componentDidMount = () => {

    //     if (this.state.status === true) {
    //         <Navigate to="/apuestas" />
    //     }
    // }
    render() {
        return (
            <div className="container pt-5">
                <h1>Crear Apuesta</h1><hr />
                {
                    this.state.status === true &&
                    <Navigate to="/apuestas" />
                }
                <form onSubmit={this.asignarApuesta}>
                    <div className="row gap-2">
                        <div className="col-md-5">
                            <label htmlFor="usuario" className="form-label">Usuario: </label>
                            <input ref={this.inputUsuario} type="text" className="form-control" placeholder="usuario" aria-label="usuario" id='usuario' />
                        </div>
                        <div className="col-md-5">
                            <label className="form-label" htmlFor="resultado">Resultado: </label>
                            <input ref={this.inputResultado} type="text" className="form-control" placeholder="resultado" aria-label="resultado" id="resultado" />
                        </div>
                        <div className="col-md-5">
                            <label className="form-label" htmlFor="fecha">Fecha: </label>
                            <input ref={this.inputFecha} type="date" className="form-control" placeholder="fecha" aria-label="fecha" id="fecha" />
                        </div>
                        <div className="col-md-5 pt-3">
                            <button className="btn btn-outline-primary col-md-12">generar apuesta</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
