import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from './Global';
import img from "../assets/img/banner.png";
import Swal from "sweetalert2";

export default class Home extends Component {

  state = {
    jugadores: [],
    status: false
  }
  inputText = React.createRef();

  buscarJugador = (e) => {
    e.preventDefault();
    var jugador = this.inputText.current.value;

    if (jugador !== '') {
      var request = "api/Jugadores/BuscarJugadores/" + jugador;
      var url = Global.apiApuestas;

      axios.get(url + request).then((response) => {
        this.setState({
          jugadores: response.data,
          status: true
        })
      });
    } else {
      this.setState({
        status: false
      })
      /*Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })*/
    }
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="col-md-12">
          <div className="row">
            <label className="form-label col-md-3" htmlFor="serach-form">Buscar jugador: </label>
            <input type="text" id="serach-form" ref={this.inputText} className="form-control col-md-6" onChange={this.buscarJugador} placeholder="buscar jugador" />
          </div>
        </div>
        <div className="pt-5">
          <div className="row m-auto">
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
                      {/* <NavLink className="btn btn-outline-success" to={'/jugador/'+jugadores.nombre+'/' + jugadores.idJugador}> Detalles</NavLink> */}
                    </div>
                  )
                })
              )
            }</div>
          {
            this.state.status !== true &&
            (
              <div role="alert">
                <h1>BET 365</h1><hr />
                <div className="banner d-flex flex-wrap align-items-center gap-5">
                  <div className="col-md-5">
                    <img src={img} alt="BET365" style={{ width: "100%", height: "auto" }} />
                  </div>
                  <div className="col-md-6 text-center">
                    <h4>¡Conviértete en el ganador!</h4>
                    <p className="text-md-start text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi soluta laudantium in accusantium laborum perspiciatis tempore a eveniet est voluptas. Perferendis dolore modi eaque mollitia reiciendis velit? Perspiciatis, harum aut?
                      Explicabo delectus autem vel dolore saepe ratione nemo quam magnam eos repellendus deleniti libero sit excepturi cum tempore corporis et necessitatibus, recusandae facilis. Illo dicta nemo doloribus accusamus nulla accusantium!
                      Eius expedita ducimus accusantium iusto porro, quas, cum sunt numquam obcaecati autem quam! Eligendi sapiente esse quam odio, qui molestiae expedita necessitatibus porro tenetur id, aperiam incidunt minus optio accusantium.
                      Nobis nam architecto porro dicta error, voluptatum consequuntur officiis, impedit nostrum voluptatibus cupiditate perferendis at doloremque, illo maiores! Autem vel consectetur nisi repudiandae reiciendis magnam sit sequi laborum corporis eligendi.
                    </p>
                    <h6> Apuesta por tu equipo favorito !!!</h6>
                    <NavLink to="/apuestas" className="btn btn-outline-info"> <span className="text-decoration-underline"> Apostar !!!</span></NavLink>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    )
  }
}
