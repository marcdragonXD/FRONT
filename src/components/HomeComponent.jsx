import React, { Component } from 'react'
import axios from 'axios'
import DoctoresEspecialidad from './DoctoresEspecialidad';

export default class HomeComponent extends Component {
  
    url = "https://apidoctoresroutes2023.azurewebsites.net/index.html";

     state = {
        doctores: 0
    }

    loadDoctores = () => {
    let request = "/api/Doctores";
    axios.get(this.url).then((response) => {
      console.log("Leyendo doctores")
      this.setState({
        doctores: response.data
      })
    })
  }

      componentDidMount = () => {
        this.loadDoctores();
    }

    render() {
    return (
      <div>
        <h1>Home Component</h1>
        <label>Seleccione Especialidad: </label>
        <button onClick={this.loadDoctores}>
            Cargar doctores
        </button>
        </div>
    )
  }
}
