

function createClient(){

    // Obtener referencias a los campos del formulario
const nameInput = document.getElementById('nickform');
const emailInput = document.getElementById("usuario");
const passwordInput = document.getElementById('password');
const genderInput = document.getElementById('select_genero_light');


// Obtener los valores de los campos del formulario
const name = nameInput.value;
const email = emailInput.value;
const password = passwordInput.value;
const genderVal = genderInput.value;

if(genderVal === 2){
    var gender = "M"
} else if(genderVal === 3){
    var gender = "M"
} else {
    var gender = "O"
}

// Crear un objeto con los datos que deseas enviar
const data = {
    name: name,
    email: email,
    password: password,
    gender: gender
  };
  // Guarde los datos en el almacenamiento local
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));
    localStorage.setItem('gender', JSON.stringify(gender));


  // Configurar las opciones para la solicitud fetch()
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  
  // Enviar la solicitud fetch() a la URL del punto final de API
  fetch('http://localhost:5000/api/client/create', options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
}

export default createClient;
