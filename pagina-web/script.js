let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

//login desde el landing page
function login(){
    var user, password;

    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasenia").value;

    if(user == "hola" && password == "1234"){
        alert("Hola de nuevo! :)");
        window.open("pagina.html"); 
    }
    else{
        alert("Hay un error en su cuenta, intente de nuevo :/")
    }
}