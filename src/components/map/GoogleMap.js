/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import styled from 'styled-components';

const MapWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

`

let map, infoWindow;

function initMap() {
  const containerLocationPos = { lat: 3.388571, lng: -76.541327 } 
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 3.388571, lng: -76.541327 },
    zoom: 17 ,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  const containerButton = document.createElement("button");

  locationButton.textContent = "Mi ubicación";
  locationButton.classList.add("map-recycle-container");

  containerButton.textContent = "Ubicar contenedor";
  containerButton.classList.add("map-recycle-container");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    locationButton
  );
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    containerButton
  );

  containerButton.addEventListener("click", () => {
    console.log("[btn ubicar]")
    infoWindow.setPosition(containerLocationPos);
    infoWindow.setContent("CONTENEDOR CAPRI");
    infoWindow.open(map);
    map.setCenter(containerLocationPos);
  });

  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

const GoogleMap = () => {
  useEffect(() => {
    window.setTimeout(() => {
      console.log("[mount] google var: ", google, document.getElementById("map"))
      initMap();

    }, 2000)
  }, [])
  return (
    <MapWrapper id="map">
      
    </MapWrapper>
  )
}

export default GoogleMap;