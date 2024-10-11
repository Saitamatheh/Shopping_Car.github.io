let productos = [
    {
        "id": "pc1",
        "titulo": "Computadora Gamer Xtreme PC Gaming CM-05501, Intel Core i9-12900F 2.4GHz, 32GB, 1TB SSD, Wi-Fi, NVIDIA GeForce RTX 4070 Super, Windows 11 Prueba, Blanco Tank Pro",
        "imagen": "../ProyectoA/img/articulos/CP-XTREMEPCGAMING-XTBRI932GB54070STPW-1.webp",
        "categoria": {
            "nombre": "Computadora Gamer",
            "id": "Computadora Gamer"
        },
        "precio": 33529
    },
    {
        "id": "pc2",
        "titulo": "Computadora Gamer Xtreme PC Gaming CM-99964, Intel Core i7-12700F 2.10GHz, 32GB, 1TB SSD, NVIDIA GeForece RTX 4060, Windows 11 Prueba",
        "imagen": "../ProyectoA/img/articulos/CP-XTREMEPCGAMING-XTPCI732GB4060S-4fba93.jpg",
        "categoria": {
            "nombre": "Computadora Gamer",
            "id": "Computadora Gamer"
        },
        "precio": 19329
    },
    {
        "id": "pc3",
        "titulo": "Computadora Gamer Digital Master PC Streaming Intel RTX V1.2, Intel Core i5-11400, NVIDIA GeForce RTX 4060, 16GB, 1TB SSD, Windows 11 Pro Prueba",
        "imagen": "../ProyectoA/img/articulos/CP-DIGITALMASTERPC-PCSTREAMINGINTELRTXV12-2.webp",
        "categoria": {
            "nombre": "Computadora Gamer",
            "id": "Computadora Gamer"
        },
        "precio": 16949
    },
    {
        "id": "pc4",
        "titulo": "Computadora Gamer Xtreme PC Gaming CM-50228, AMD Ryzen 5 5500 3.60GHz, 16GB, 2TB + 500GB SSD, Wi-Fi, NVIDIA GeForce GTX 1650, Windows 10 Prueba, Negro ― incluye Monitor 27, Teclado y Mouse",
        "imagen": "../ProyectoA/img/articulos/CP-XTREMEPCGAMING-XTMSIR516GB1650MDS-1.jpg",
        "categoria": {
            "nombre": "Computadora Gamer",
            "id": "Computadora Gamer"
        },
        "precio": 13439
    },
    {
        "id": "pc5",
        "titulo": "Computadora Gamer Xtreme PC Gaming CM-05442, Intel Core i7-12700 3.60GHz, 16GB, 1TB SSD, Wi-Fi, Windows 10 Prueba, Blanco ― Incluye Monitor de 27, Teclado y Mouse",
        "imagen": "../ProyectoA/img/articulos/CP-XTREMEPCGAMING-XTPCI716GBHD770MW-1.jpg",
        "categoria": {
            "nombre": "Computadora Gamer",
            "id": "Computadora Gamer"
        },
        "precio": 13439
    },
    {
        "id": "accesorio1",
        "titulo": "Mouse Gamer Logitech G502 X Plus, Lightspeed, Mouse Óptico Inalámbrico RGB, Interruptores Híbridos LIGHTFORCE, Sensor Gaming Hero 25K, Blanco, 910-006170",
        "imagen": "../ProyectoA/img/articulos/adc891a347884f66936d8bb9c25949cb.png",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 2599
    },
    {
        "id": "accesorio2",
        "titulo": "Silla Gamer Deportiva Xzeal XZ15 Blanca / RGB / Tela de doble capa / XZSXZ15W",
        "imagen": "../ProyectoA/img/articulos/4f5f68b84cbfc7baaf8214de5d47e7fc.png",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 3399
    },
    {
        "id": "accesorio3",
        "titulo": "Teclado Gamer Mecánico Redragon Fizz RGB / Switches Red / Transparente / Alámbrico / Iluminación LED RGB / Inglés / K617CT-RGB",
        "imagen": "./img/articulos/tecladogamer.png",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 899
    },
    {
        "id": "accesorio4",
        "titulo": "Audífonos Gamer Corsair HS80 RGB Wireless / Inalámbrico / USB / Negro / CA-9011235-NA",
        "imagen": "./img/articulos/Audífonos Gamer Corsair HS80 RGB Wireless.png",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 2499
    },
    {
        "id": "accesorio5",
        "titulo": "Sofa Gamer Cougar Ranger ONE / Black Orange / Diseño Ajustable / 3MRAOORB.0001",
        "imagen": "./img/articulos/sillagamer2.png",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 5699
    },
    {
        "id": "accesorio6",
        "titulo": "Kit Gamer de Teclado y Mouse Xzeal XST-201 / Alámbrico / USB / Negro / Español / XST-201",
        "imagen": "./img/articulos/tecladoymouse.png",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 219
    },
    {
        "id": "accesorio7",
        "titulo": "Logitech Audífonos Gamer G733 7.1 para PS4/PC, Inalámbrico, USB, Blanco",
        "imagen": "./img/articulos/audifonos.jpg",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 2459
    },
    {
        "id": "accesorio8",
        "titulo": "Corsair Audífonos Gamer VOID RGB ELITE Wireless 7.1, Inalámbrico, USB, Negro/Blanco",
        "imagen": "./img/articulos/Audifono2.jpg",
        "categoria": {
            "nombre": "AcesoriosG",
            "id": "AcesoriosG"
        },
        "precio": 1919
    },
    {
        "id": "Laptop1",
        "titulo": "Laptop Acer Aspire Lite 14 AL14-31P-353Y 14, WUXGA, Intel Core i3-N300 1.80GHz, 8GB, 512GB SSD, Windows 11 Home 64-bit, Español, Plata",
        "imagen": "./img/articulos/Laptop2.webp",
        "categoria": {
            "nombre": "Laptops",
            "id": "Laptops"
        },
        "precio": 6279
    },
    {
        "id": "Laptop2",
        "titulo": "Laptop Lenovo ThinkPad E16 Gen 1 16, WUXGA, AMD Ryzen 7 7730U 2GHz, 40GB, 1TB SSD, Windows 11 Pro 64-bit, Español, Negro",
        "imagen": "./img/articulos/Laptop1.webp",
        "categoria": {
            "nombre": "Laptops",
            "id": "Laptops"
        },
        "precio": 25799
    },
    {
        "id": "Laptop3",
        "titulo": "Laptop Gamer ASUS Laptop TUF Gaming A15 / FA507NU-LP101W / AMD Ryzen 5 7535HS / NVIDIA GeForce RTX 4050 / 144Hz / 8GB RAM / 512GB SSD / Windows 11 / FA507NU-LP134W",
        "imagen": "./img/articulos/Laptop3.png",
        "categoria": {
            "nombre": "Laptops",
            "id": "Laptops"
        },
        "precio": 24799
    },
    {
        "id": "Laptop4",
        "titulo": "Laptop Gamer ASUS TUF Gaming F15 / 15.6 Full HD / Intel Core i7-13620H / 16GB de RAM / 1TB SSD / NVIDIA GeForce RTX 4070 / Negro / Gratis juego Star Wars Outlaws",
        "imagen": "./img/articulos/Laptop4.png",
        "categoria": {
            "nombre": "Laptops",
            "id": "Laptops"
        },
        "precio": 27999
    },
    {
        "id": "Laptop5",
        "titulo": "Laptop Asus Vivobook F412DA Grey / Ryzen 3-3250U / Radeon Graphics / 8GB RAM / 256GB SSD / 14, FHD LED / Windows 10 Home / F412DA-WS33",
        "imagen": "./img/articulos/Laptop5.jpg",
        "categoria": {
            "nombre": "Laptops",
            "id": "Laptops"
        },
        "precio": 1000
    }
];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}