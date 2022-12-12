import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";
import { addressPoints } from "./addressPoints";
// import {AdjustIcon} from '@mui/icons-material/';
// import MenuIcon from "@mui/icons-material/Menu";
import AdjustIcon from '@mui/icons-material/Adjust';

export default function Map() {
  const handleClick = (event) => {
    console.log("event:", event.latlng);
    alert("clicked")
  }
  useEffect(() => {
    var map = L.map("map").setView([-37.87, 175.475], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    // Function for Reading Heatmap layer points
    const points = addressPoints
      ? addressPoints.map((p) => {
        return [p[0], p[1]];
      })
      : [];
    ////////////////////////////////////////////
    var LeafIcon = L.Icon.extend({
      options: {
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
      }
    });
    var greenIcon = new LeafIcon({
      // iconUrl: './myicon2.png',
      // // shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
      iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
    })
    //Function for Reading Marker points 
    const addMarkersToMap = addressPoints.map((p) => {
      let marker = L.marker([p[0], p[1]], {

        icon: greenIcon

      }).addTo(map)
      marker.addEventListener('click', handleClick)
    })
    ////////////////////////////////////////////



    // Adding Heatmap layer
    L.heatLayer(points).addTo(map);
    ///////////////////////////////


    //rendering markers points to map
    let renderMarkers = addMarkersToMap;
    ///////////////////////////////////


    // L.marker([-37.87, 175.475]).addTo(map).addEventListener('click',handleClick)
    // L.marker([-37.8927369333, 175.4087452333,]).addTo(map)

    // let circle = L.circleMarker([-37.87, 175.475], {
    //   radius: 50,
    //   opacity: .9,
    //   color: 'red',
    //   fillColor: getColor(feature.properties.iconcategory),
    //   // fillOpacity: 0.3,
    //   //  html: feature.properties.iconcategory[0].toUpperCase(),

    // }).addTo(map)

    // circle.addEventListener('click', handleClick)

    // return (() => {
    //   circle.removeEventListener('click', handleClick)
    // })

  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
}
