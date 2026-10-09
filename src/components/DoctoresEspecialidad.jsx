import React, { Component } from 'react'
import axios from 'axios'
import HomeComponent from './HomeComponent';

export default class DoctoresEspecialidad extends Component {
  
    selectIdDoctor = React.createRef();
    url = "https://apidoctoresroutes2023.azurewebsites.net/index.html";

    state = {
        especialidad: 0
    }

    loadEspecialidad = () => {
    let request = "/api/Doctores";
    axios.get(this.url).then((response) => {
      console.log("Leyendo especialidad")
      this.setState({
        especialidad: response.data
      })
    })
  }

      componentDidMount = () => {
        this.loadEspecialidad();
    }



  
    render() {
    return (
      <div>
        <h1>Doctores Especialidad</h1>
        <label>Seleccione Especialidad: </label>
        <ul>
            {
            this.state.doctores.map((doc, index) => {
                return (<h4 key={index}
                style={{color: "blue"}}>
                    Especialidad: {doc.EspecialidadName}
                </h4>)
            })
        }
        </ul>
        <button onClick={this.loadEspecialidad}>
            Cargar tabla
        </button>
        </div>
    )
  }
}

/*
    componentDidMount = () => {
        this.loadDoctores();
    }

        




*/