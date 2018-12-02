import React, { Component } from "react";
import Map from "./components/Map";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // when the button is clicked it changes the state here which then triggers
    // component received props in the map-wrapper component.
    this.state = { lat: -41.235726, lng: 172.5118422 };
  }

  submitSearch() {
    console.log("search");
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="search-container">
            <Search />
            <Search />
          </div>
          {/* <button onClick={() => this.setState({ lat: -31, lng: 130 })}>
            click to pan
          </button> */}
          <button onClick={() => this.submitSearch()}>search</button>
          <Map lat={this.state.lat} lng={this.state.lng} />
        </div>
      </div>
    );
  }
}

export default App;
