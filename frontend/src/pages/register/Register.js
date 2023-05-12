import React, { Component } from 'react';
import './register.css';
import miFunc
 from './change_color';
import createClient from './registerFuncs';

 function Register() {
      return (
        <div className="body_negro" id="body">
        <title>register</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6">
              <div className="card-dark" id="card">
                <div className="card-header">
                  <a href="#" id="cambio" onClick={miFunc}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                      <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg></a>
                  <h2>Ruby Kart</h2>
                  <h4>Registrar cuenta</h4>
                </div>
                <div className="card-body" id="card-body">
                  <fieldset>
                    <img className="foto_perfil ml-3 mt-2 mb-2" id="foto_perfil" src="#" alt="" />
                  </fieldset><div className="form-group text-center">
                  </div><table>
                    <tbody><tr>
                        <td>
                          <label htmlFor="usuario" className="label_dark ml-3 mt-2 mb-2" id="label_light">Su correo</label>
                        </td>
                        <td>
                          <input id="usuario" type="text" className="form_control_dark ml-3 mt-2 mb-2" name="email" required />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="nick" className="label_dark ml-3 mt-2 mb-2" id="label_apodo_light">Su apodo</label>
                        </td>
                        <td>
                          <input id="nickform" type="text" className="form_control_dark ml-3 mt-2 mb-2 mr-3" name="usuario" required />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="genero" className="label_dark_gender ml-3 mt-2 mb-2" id="label_genero">¿Cómo se identifica?</label>
                        </td>
                        <td>
                          <select className="form_select_dark ml-3 mt-2 mb-2" id="select_genero_light">
                            <option value={1}>Seleccionar</option>
                            <option value={2}>Hombre</option>
                            <option value={3}>Mujer</option>
                            <option value={4}>Otra joda</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="genero" className="label_dark_gender ml-3 mt-2 mb-2" id="label_foto">Adjunte una foto de su jeta</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button className="btn btn-primary ml-3 mt-2 mb-2" id="btn_foto">insertar foto</button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="password" className="label_dark_psw ml-3 mt-2 mb-2" id="label_light_psw">Contraseña</label>
                        </td>
                        <td>
                          <input id="password" type="password" className="form_control_dark ml-3 mt-2 mb-2" name="password" required />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="password" className="label_dark ml-3 mt-2 mb-4" id="labelpswconfirm">Confirmela</label>
                        </td>
                        <td>
                          <input id="password_confirm" type="password" className="form_control_dark ml-3 mt-2 mb-4" name="password" required />
                        </td>
                      </tr>
                    </tbody></table>
                  <div className="form-group text-center">
                    <a href="/request">
                      <button type="submit" onClick={createClient} className="btn btn-primary" id="cambiarBtn">registrese</button>
                    </a>
                  </div>
                  <div className="form-group text-center">
                    <p className="p_dark" id="p_light">ya tiene cuenta? <a href="/login">inicie sesion</a></p>
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

  export default Register;