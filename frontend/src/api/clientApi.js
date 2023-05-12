//Get all clients
fetch('/client/getAll')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

//Get client by ID
fetch('/client/getOne/CLIENT_ID')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

//Create client
const newClient = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password',
  gender: 'Male'
}

fetch('/client/create', {
  method: 'POST',
  body: JSON.stringify(newClient),
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

//Update client by ID
const updatedClient = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  password: 'new-password',
  gender: 'Female'
}

fetch('/client/update/CLIENT_ID', {
  method: 'PATCH',
  body: JSON.stringify(updatedClient),
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

//Delete client by ID
fetch('/client/delete/CLIENT_ID', {
  method: 'DELETE'
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error))
