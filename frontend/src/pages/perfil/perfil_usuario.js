const usuario = document.getElementById("usuario");
const body = document.getElementById("body");
const div = document.getElementById("card");

const label_correo = document.getElementById("label_correo");
const label_sucorreo = document.getElementById("label_sucorreo");
const label_apodo = document.getElementById("label_apodo");
const label_suapodo = document.getElementById("label_suapodo");
const label_genero = document.getElementById("label_genero");
const label_sugenero = document.getElementById("label_sugenero");
const label_foto = document.getElementById("label_foto");


const labelapodo = document.getElementById("label_apodo_light");

function miFunc() {

    const element = document.getElementById("body");
    const card = document.getElementById("card");
    const label_correo = document.getElementById("label_correo");
    const label_sucorreo = document.getElementById("label_sucorreo");
    const label_apodo = document.getElementById("label_apodo");
    const label_suapodo = document.getElementById("label_suapodo");
    const label_genero = document.getElementById("label_genero");
    const label_sugenero = document.getElementById("label_sugenero");
    const label_foto = document.getElementById("label_foto");


    if (element.className == "body_negro") {
        element.className = "body_color";
        card.className = "card";

        label_correo.className = "label_light ml-3 mt-2 mb-2";
        label_sucorreo.className = "label_light_shadow ml-3 mt-2 mb-2";

        label_apodo.className = "label_light ml-3 mt-2 mb-2";
        label_suapodo.className = "label_light_shadow ml-3 mt-2 mb-2";

        label_genero.className = "label_light ml-3 mt-2 mb-2";
        label_sugenero.className = "label_light_shadow ml-3 mt-2 mb-2";

        label_foto.className = "label_light ml-3 mt-2 mb-2";


    } else {
        element.className = "body_negro";
        card.className = "card-dark";

        label_correo.className = "label_dark ml-3 mt-2 mb-2";
        label_sucorreo.className = "label_dark_shadow ml-3 mt-2 mb-2";

        label_apodo.className = "label_dark ml-3 mt-2 mb-2";
        label_suapodo.className = "label_dark_shadow ml-3 mt-2 mb-2";

        label_genero.className = "label_dark ml-3 mt-2 mb-2";
        label_sugenero.className = "label_dark_shadow ml-3 mt-2 mb-2";

        label_foto.className = "label_dark ml-3 mt-2 mb-2";

    }

}