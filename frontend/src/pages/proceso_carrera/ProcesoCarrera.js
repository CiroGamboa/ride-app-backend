import React, { Component } from 'react';
import './proceso_carrera.css';
import miFunc
 from './proceso_carrera';
import GMaps from '../../components/SimpleMap';


 function ProcesoCarrera() {
      return (
        <div className="body_negro" id="body"> 
        <title>Solicitud de Carrera</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="proceso_carrera.css" />
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card-dark" id="card">
                <div className="card-header">
                  <a href="#" id="cambio" onClick={miFunc}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={13} fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg></a>
                  <h2>Ruby Kart</h2>
                </div>
                <div className="card-body" id="card-body">
                  <div id="map">
                  <GMaps/>
                  </div>
                  <a href="/grade">
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-primary text-center">Pedir carro</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  ;

  export default ProcesoCarrera;