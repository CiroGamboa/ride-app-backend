import React, { Component } from 'react';
import './perfil_usuario.css';
import miFunc
 from './perfil_usuario';

 function Perfil() {
      return (
        <div className="body_negro" id="body">
        <title>Perfil de Usuario</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="perfil_usuario.css" />
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card-dark" id="card">
                <div className="card-header">
                  <a href="#" id="cambio" onclick="miFunc()"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg></a>
                  <h2>Ruby Kart</h2>
                  <h4>Registrar cuenta</h4>
                </div>
                <div className="card-body" id="card-body">
                  <table>
                    <tbody><tr>
                        <td>
                          <label htmlFor="usuario" className="label_dark ml-3 mt-2 mb-2" id="label_correo">Su correo</label>
                        </td>
                        <td>
                          <label htmlFor="nick" className="label_dark_shadow ml-3 mt-2 mb-2" id="label_sucorreo">{localStorage.getItem("email")}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="nick" className="label_dark ml-3 mt-2 mb-2" id="label_apodo">Su apodo</label>
                        </td>
                        <td>
                          <label htmlFor="nick" className="label_dark_shadow ml-3 mt-2 mb-2" id="label_suapodo">{localStorage.getItem("name")}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="genero" className="label_dark_gender ml-3 mt-2 mb-2" id="label_genero">¿Cómo se identifica?</label>
                        </td>
                        <td>
                          <label htmlFor="genero" className="label_dark_shadow ml-3 mt-2 mb-2" id="label_sugenero">{localStorage.getItem("gender")}</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="genero" className="label_dark_gender ml-3 mt-2 mb-2" id="label_foto">Su foto</label>
                        </td>
                        <td>
                          <fieldset>
                            <img className="foto_perfil ml-3 mt-2 mb-2" id="foto_perfil" src="#" alt="" />
                          </fieldset>
                        </td>
                      </tr>
                      <tr>
                      </tr></tbody></table>
                  <div className="form-group text-center">
                    <a href="/request">
                      <button type="submit" className="btn btn-primary" id="cambiarBtn">Ok</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  ;

  export default Perfil;