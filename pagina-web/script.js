//header
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

let btnSeccion = document.querySelectorAll('.btn-nav');

btnSeccion[0].onclick = function(){
    for(i=0; i<4; i++){
        btnSeccion[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}
btnSeccion[1].onclick = function(){
    for(i=0; i<4; i++){
        btnSeccion[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}
btnSeccion[2].onclick = function(){
    for(i=0; i<4; i++){
        btnSeccion[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
}
btnSeccion[3].onclick = function(){
    for(i=0; i<4; i++){
        btnSeccion[i].classList.remove("nav-active");
    }
    this.classList.add("nav-active");
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

//reseñas
var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function(){
    slide.style.transform = "translateX(0px)";
    for(i=0; i<4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)";
    for(i=0; i<4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)";
    for(i=0; i<4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)";
    for(i=0; i<4; i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}