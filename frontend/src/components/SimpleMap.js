import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function GMaps() {

const defaultProps = {
    center: {lat: 7.0377507,
      lng: -73.072259,},
    zoom: 11
  };

  return (
   <div style={{width: '100%', height: '400px'}}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDETLsfJoIVdiWFHFaUUqR7Z3SL7Mxta3U" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
     />
        <AnyReactComponent
          lat={6.860985433763661}
          lng={-73.25683593750001}
          text="Mi Ubicación"
        />
   </div>
  )
}

//export default GMaps;