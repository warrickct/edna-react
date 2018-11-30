import React, { Component } from "react";
import ReactDOM from "react-dom";
import L from "leaflet";
import "/leaflet/dist/leaflet.css";

class Map extends Component {
  componentDidMount() {
    var tileLayer = L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
        subdomains: "abcd",
        maxZoom: 19,
        minZoom: 5.75
      }
    );
    // var map = L.map("Map", {
    var map = (this.map = L.map(ReactDOM.findDOMNode(this), {
      zoomSnap: 0.25,
      zoomDelta: 0.25,
      layers: tileLayer,
      fullscreenControl: true
    }).setView([-41.235726, 172.5118422], 5.75));
    var bounds = map.getBounds();
    bounds._northEast.lat += 10;
    bounds._northEast.lng += 10;
    bounds._southWest.lat -= 10;
    bounds._southWest.lng -= 10;
  }

  render() {
    return (
      <div className="Map">
        <div id="map" />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Map;
