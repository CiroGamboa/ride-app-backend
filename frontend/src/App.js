import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SolicitudCarrera from './pages/solicitud_carrera/solicitudCarrera';
import EsperaCarrera from './pages/espera_carrera/esperaCarrera';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Perfil from './pages/perfil/Perfil';
import ProcesoCarrera from './pages/proceso_carrera/ProcesoCarrera';
import Grade from './pages/calificacion/Grade';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
  " Longitude: " + position.coords.longitude);
}

function getMedia() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      /* use the stream */
    })
    .catch(function(error) {
      console.log(error);
    });
  } else {
    console.log("getUserMedia is not supported by this browser.");
  }
}


function App() {
  {getLocation()}
  {getMedia()}
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/" element={<Login />} />
          <Route path="/request" element={<SolicitudCarrera />} />
          <Route path="/wait" element={<EsperaCarrera />} />
          <Route path="/process" element={<ProcesoCarrera />} />
          <Route path="/grade" element={<Grade />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
