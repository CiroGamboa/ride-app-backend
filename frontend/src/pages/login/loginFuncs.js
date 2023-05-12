

function checkLogin(){

    const email = document.getElementById("usuario").value;
    const password = document.getElementById('password').value;
    console.log(email);
    console.log(password);
    var valid = false;
    //Get all clients
    fetch('http://localhost:5000/api/client/getAll')
    .then(response => response.json())
    .then(data => {
        for(let index in data){
            var user = data[index]
            console.log(user);
            if(user.email === email && user.password === password){
                valid = true
                localStorage.setItem('name', JSON.stringify(user.name));
                localStorage.setItem('email', JSON.stringify(user.email));
                localStorage.setItem('password', JSON.stringify(user.password));
                localStorage.setItem('gender', JSON.stringify(user.gender));
            }
        }
        if(!valid){
            alert("Correo o contraseña incorrecto")
        } else {
            // redirect
            window.location.replace("http://localhost:3000/request");
        }
        console.log(data)
    })
    .catch(error => console.error(error))

}

export default checkLogin;