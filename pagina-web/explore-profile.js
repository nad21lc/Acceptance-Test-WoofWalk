let workers = {
    data:[
    {
        workerName: "Esteban Quito",
        category: "Paseador",
        rate: "4 / 5",
        image: "imagenes/paseador1.jpg"
    },
    {
        workerName: "Jonathan Moly",
        category: "Paseador",
        rate: "4.5 / 5",
        image: "imagenes/paseador2.jpg"
    },
    {
        workerName: "Ana Sandoval",
        category: "Paseador",
        rate: "4.3 / 5",
        image: "imagenes/paseador3.jpg"
    },
    {
        workerName: "Juana Aranda",
        category: "Paseador",
        rate: "4.7 / 5",
        image: "imagenes/paseador4.jpg"
    },
    {
        workerName: "Maria Sotelo",
        category: "Cuidador",
        rate: "4 / 5",
        image: "imagenes/cuidador1.jpg"
    },
    {
        workerName: "Romulo Pizarro",
        category: "Cuidador",
        rate: "4.2 / 5",
        image: "imagenes/cuidador2.jpg"
    },
    {
        workerName: "Dina Morales",
        category: "Cuidador",
        rate: "4.4 / 5",
        image: "imagenes/cuidador3.jpg"
    }
    ],
};

for(let i of workers.data){
    //creacion de card
    let card = document.createElement("div");
    //categoria y escondida al inicio
    card.classList.add("card", i.category, "hide");
    //imagen div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    //worker name
    let name = document.createElement("h5");
    name.classList.add("workerName");
    name.innerText = i.workerName.toUpperCase();
    container.appendChild(name);
    
    //paseador o cuidador
    let categoryworker = document.createElement("h6");
    categoryworker.classList.add("category");
    categoryworker.innerText = i.category.toUpperCase();
    container.appendChild(categoryworker);

    //rate
    let rate = document.createElement("h6");
    rate.innerText = i.rate + "⭐";
    container.appendChild(rate);

    card.appendChild(container);
    document.getElementById("workers").appendChild(card);
}

function filterWorker(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else {
            button.classList.remove("active");
        }
    })

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "Ambos"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".workerName");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
});


window.onload = () => {
    filterWorker("Ambos");
}


document.getElementById("workers").addEventListener("click", () => {
    window.open("dogsitter-profile.html", "_self");
});
