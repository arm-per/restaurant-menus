const mainMenu = document.getElementById("menu-render"),
    app = document.getElementById("app");

const menuTags = [
    "Entradas",
    "Hamburguesas",
    "Cortes",
    "Bebidas",
    "Postres",
]


const menuItems = {
    entradas: [
        {
            nombre: "Platillo 1",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 2",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
        },
        {
            nombre: "Platillo 3",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        }
    ],
    fuertes: [
        {
            nombre: "Platillo 1",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 2",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 3",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        }
    ],
    variedad: [
        {
            nombre: "Platillo 1",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 2",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 3",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        }
    ],
    bebidas: [
        {
            nombre: "Platillo 1",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 2",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 3",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        }
    ],
    postres: [
        {
            nombre: "Platillo 1",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 2",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        },
        {
            nombre: "Platillo 3",
            desc: "Delicioso platillo con muchas cosas muy ricas, super deliciosas",
            price: '$100.00',
            img: "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
        }
    ]
};


/*const el1 = document.getElementById("el1-render"),
    el2 = document.getElementById("el2-render"),
    el3 = document.getElementById("el3-render"),
    el4 = document.getElementById("el4-render"),
    el5 = document.getElementById("el5-render");*/

//let div = document.createElement("div");

let i;

for(i = 0; i < menuTags.length; i++){
    app.innerHTML += `<section id="el${i + 1}">
        <div class="container">
            <h2 class="principal title my-2">${menuTags[i]}</h2>
            <div class="" id="el${i + 1}-render">
                <!-- Render -->
            </div>
        </div>
    </section>`
}

for(i = 0; i < menuItems.entradas.length; i++){
    window.el1.innerHTML += `<div class="grd my-1">
                        <div class="p-1">
                            <h3 class="dish secundario px-3">${menuItems.entradas[i].nombre}</h3>
                            <p class="par text-color my-1">${menuItems.entradas[i].desc}</p>
                            <p class="price text-color right">${menuItems.entradas[i].price}</p>
                        </div>
                        <div class="p-1">
                            <img class="img-fit" src="${menuItems.entradas[i].img}" alt="">
                        </div>
                     </div>`
}

for(let i = 0; i < menuItems.fuertes.length; i++){
    window.el2.innerHTML += `<div class="grd my-1">
                        <div class="p-1">
                            <h3 class="dish secundario px-3">${menuItems.fuertes[i].nombre}</h3>
                            <p class="par text-color my-1">${menuItems.fuertes[i].desc}</p>
                            <p class="price text-color right">${menuItems.fuertes[i].price}</p>
                        </div>
                        <div class="p-1">
                            <img class="img-fit" src="${menuItems.fuertes[i].img}" alt="">
                        </div>
                     </div>`
}

for(i = 0; i < menuItems.variedad.length; i++){
    window.el3.innerHTML += `<div class="grd my-1">
                        <div class="p-1">
                            <h3 class="dish secundario px-3">${menuItems.variedad[i].nombre}</h3>
                            <p class="par text-color my-1">${menuItems.variedad[i].desc}</p>
                            <p class="price text-color right">${menuItems.variedad[i].price}</p>
                        </div>
                        <div class="p-1">
                            <img class="img-fit" src="${menuItems.variedad[i].img}" alt="">
                        </div>
                     </div>`
}

for(i = 0; i < menuItems.bebidas.length; i++){
    window.el4.innerHTML += `<div class="grd my-1">
                        <div class="p-1">
                            <h3 class="dish secundario px-3">${menuItems.bebidas[i].nombre}</h3>
                            <p class="par text-color my-1">${menuItems.bebidas[i].desc}</p>
                            <p class="price text-color right">${menuItems.bebidas[i].price}</p>
                        </div>
                        <div class="p-1">
                            <img class="img-fit" src="${menuItems.bebidas[i].img}" alt="">
                        </div>
                     </div>`
}

for(i = 0; i < menuItems.postres.length; i++){
   window.el5.innerHTML += `<div class="grd my-1">
                        <div class="p-1">
                            <h3 class="dish secundario px-3">${menuItems.postres[i].nombre}</h3>
                            <p class="par text-color my-1">${menuItems.postres[i].desc}</p>
                            <p class="price text-color right">${menuItems.postres[i].price}</p>
                        </div>
                        <div class="p-1">
                            <img class="img-fit" src="${menuItems.postres[i].img}" alt="">
                        </div>
                     </div>`
}

for(i = 0; i < menuTags.length; i++){
    mainMenu.innerHTML += `<li><a href="#el${i + 1}" class="menu menu-btn secundario"> ${menuTags[i]} </a></li>`
}

const btns = document.querySelectorAll(".menu-btn");

btns.forEach(btn => btn.addEventListener('click', (ev) => {
    for(btn of btns){
        btn.style.backgroundColor = "transparent";
    }
    ev.currentTarget.style.backgroundColor = "#dfdfdf";

    let sections = document.querySelectorAll("section");

    /*for(i = 0; i < btns.length; i++){
       if(ev.currentTarget === btns[i]){
           sections[i].style.paddingTop = '11rem';
       }else{
           sections[i].style.paddingTop = '0';
       }
    }*/
}))


