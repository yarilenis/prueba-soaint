//Nota: se importaron las liberias requeridas
import React from "react";
import ReactDOM from "react-dom";

class FetchGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      error: ""
    };
  }

  componentDidMount() {
    this.initData();
  }

  initData() {
    fetch("https://api.github.com/users/workshopsjsmvd")
      .then((res) => res.json())
      // Nota: se agrego un then que hacia falta para resolver la promesa
      .then((result) => {
        this.setState({
          name: result.name,
          location: result.location
        });
      })
      //Nota: se agrego catch para manejo de errores
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    // Nota: se agrego la deestructuración de state
    const { name, location, error } = this.state;

    return (
      //Nota: la sintaxis utilizada no era la correcta
      <div>
        {!error ? (
          <div>
            <h1 key="name">{`Nombre: ${name}`}</h1>
            <h2 key="location">{`País: ${location}`}</h2>
          </div>
        ) : (
          <h1 key="error">{`Error: ${error}`}</h1>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FetchGithub />, rootElement);
