import React, { useState, useEffect } from "react";
import "./map.css";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import mapStyles from "./mapStyles";
import Delayed from "./delayed";

const options = {
  styles: mapStyles,
  disableDefaultUI: false,
  zoomControl: true,
};

const apiKey =
  "https://maps.googleapis.com/maps/api/js?key=" +
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY +
  "&v=3.exp&libraries=geometry,drawing,places";

export default function Map(wines) {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");

  const [wineList, setWineList] = useState([wines]);

  useEffect(() => {
    setWineList(wines);
    wines.wineList.map((wine) => {
      Geocode.fromAddress(wine.address).then(
        (response) => {
          wine.coords = response.results[0].geometry.location;
          return wine;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }, [wines, wineList]);

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        className="map"
        defaultZoom={1.5}
        options={options}
        defaultCenter={{ lat: 0, lng: 0 }}
      >
        {wines.wineList.map((wine) => {
          return (
            <Marker position={wine.coords} key={wine._id}>
              <InfoWindow>
                <div>
                  {wine.wine_name} {wine.year}
                </div>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    ))
  );

  return (
    <Delayed waitBeforeShow={700}>
      <MapWithAMarker
        googleMapURL={apiKey}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `545px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Delayed>
  );
}
