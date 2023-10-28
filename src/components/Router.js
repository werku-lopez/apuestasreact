import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MenuApuestas from './MenuApuestas';
import Home from './Home';
import DetalleEquipo from './DetalleEquipo';
import PlantillaEquipo from './PlantillaEquipo';
import DetalleJugador from './DetalleJugador';
import Apuestas from './Apuestas';
import CrearApuesta from './CrearApuesta';

export default class Router extends Component {
    render() {

        function MostrarEquipo() {
            var { idequipo, nombre } = useParams();
            return (<DetalleEquipo idequipo={idequipo} nombre={nombre} />)
        }
        function MostrarPlantillaEquipo() {
            var { idequipo } = useParams();
            return (<PlantillaEquipo idequipo={idequipo} />);
        }
        function MostrarDatosJugador() {
            var { idjugador, nombre } = useParams();
            return (<DetalleJugador idjugador={idjugador} nombre={nombre} />)
        }
        return (
            <BrowserRouter>
                <MenuApuestas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/equipo/:nombre/:idequipo" element={<MostrarEquipo />} />
                    <Route path="/plantilla/equipo/:idequipo" element={<MostrarPlantillaEquipo />} />
                    <Route path="/jugador/:nombre/:idjugador" element={<MostrarDatosJugador />} />
                    <Route path="/apuestas" element={<Apuestas />} />
                    <Route path="/nueva-apuesta" element={<CrearApuesta />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
