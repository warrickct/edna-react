import React, { Component } from "react";
import MapWrapper from "./components/map-wrapper";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // when the button is clicked it changes the state here which then triggers
    // component received props in the map-wrapper component.
    this.state = { lat: -41.235726, lng: 172.5118422 };
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={() => this.setState({ lat: -31, lng: 130 })}>
            click to pan
          </button> */}
        <MapWrapper lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
