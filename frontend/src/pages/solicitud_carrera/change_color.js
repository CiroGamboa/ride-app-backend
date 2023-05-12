const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const body = document.getElementById("body");
const div = document.getElementById("card");

function miFunc() {

    const element = document.getElementById("body");
    const card = document.getElementById("card");
    const label = document.getElementById("label_light");
    const labelcontraseña = document.getElementById("label_light_psw");
    const parrafo = document.getElementById("p_light");
    const user = document.getElementById("usuario");
    const psw = document.getElementById("password");

    if (element.className == "body_negro") {
        element.className = "body_color";
        card.className = "card";

        user.className = "form_control ml-3 mt-2 mb-2";
        psw.className = "form_control ml-3 mt-2 mb-3";
    } else {
        element.className = "body_negro";
        card.className = "card-dark";

        user.className = "form_control_dark ml-3 mt-2 mb-2";
        psw.className = "form_control_dark ml-3 mt-2 mb-3";

    }
    
}

export default miFunc;