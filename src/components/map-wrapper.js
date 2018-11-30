import React, { Component } from "react";
import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import "leaflet-css";

export default class extends Component {
  shouldComponentUpdate() {
    // stops react from only rendering the div element that leaflet mounts.
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // always called when props received but won't force a re-rendering
    this.map.flyTo([nextProps.lat, nextProps.lng], 12);
  }

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
    this.map = L.map(this.refs.map, {
      zoomSnap: 0.25,
      zoomDelta: 0.25,
      layers: tileLayer,
      fullscreenControl: true
    }).setView([-41.235726, 172.5118422], 5.75);
  }

  render() {
    return <div className="map" id="map" ref="map" />;
  }
}
