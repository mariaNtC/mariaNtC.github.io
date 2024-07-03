// Clase para estructurar los valores de los productos de membresía
class ProductoMembresia {
    constructor(id, nombre, precio, imagen, categoria, duracion) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
      this.duracion = duracion;
    }
    
    // Método para renderizar el HTML de un producto de la sección Membresía
    renderizar() {
        return `
        <div class="idTiendaContainer justify-content-center">
          <div class="producto ${this.categoria} idItemContainer">
            <div class="idItemImgContainer">
                <img src="${this.imagen}" alt="${this.nombre}" class="img-fluid idImg">
            </div>
            <div class="idTextContainer">
                <h3 class="idItemImgName text-center">
                    <p>${this.nombre}</p>
                </h3>       
                <div class="idItemImgDesc text-center">
                    <p class="idItemImgTextDesc">DURACIÓN: ${this.duracion}</p>
                </div>
                <div class="idItemImgPrecio text-center">
                    <p>$${this.precio}</p>
                </div>
                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center" data-id="${this.id}" data-nombre="${this.nombre}" data-precio="${this.precio}" data-categoria="${this.categoria}">
                        UNITE
                    </button>
                    <div class="botonBorrarItem text-center">
                        <button class="botonQuitarId" data-id="${this.id}" data-nombre="${this.nombre}">
                            <img src="../images/tachoTienda.png" class="img-fluid tachoTienda" alt="Quitar">
                        </button>
                    </div> 
                </div>
            </div>
          </div>
        </div>
        `;
    }
}
// Clase para estructurar los valores de los productos de Indumentaria
class ProductoIndumentaria {
    constructor(id, nombre, precio, imagen, categoria, talle) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.categoria = categoria;
      this.talle = talle;
      this.talleSeleccionado = ""; // Nuevo atributo para almacenar el talle seleccionado
    }

    renderizarIndumentaria() { // Método para renderizar el HTML de un producto de la sección Indumentaria
        return ` <div class="indumentariaTiendaContainer ">
                    <div class="indumentariaItemContainer producto ${this.categoria}">
                        <div class="indumentariaItemImgContainer">
                            <img src="${this.imagen}" class="img-fluid indumentariaImg ${this.nombre}" alt="Varios">
                        </div>
                
                    <div class="indumentariaTextContainer">
                        <div class="indumentariaItemImgName text-center">
                            <p>${this.nombre}</p>
                        </div>
                    
                        <div class="indumentariaItemImgDesc text-center">
                            <p class="indumentariaItemImgTextDesc">Elige el talle:</p>
                        </div>                        

                    <form class="tallesContenedorTienda">
                        <input class="inputTalles" type="radio" id="S-${this.id}" name="talles-${this.id}">
                        <label class="labelInputTalles" for="S-${this.id}">S</label><br>
                    
                        <input class="inputTalles" type="radio" id="M-${this.id}" name="talles-${this.id}">
                        <label class="labelInputTalles" for="M-${this.id}">M</label><br>
                    
                        <input class="inputTalles" type="radio" id="L-${this.id}" name="talles-${this.id}">
                        <label class="labelInputTalles" for="L-${this.id}">L</label><br>
                    
                        <input class="inputTalles" type="radio" id="XL-${this.id}" name="talles-${this.id}">
                        <label class="labelInputTalles" for="XL-${this.id}">XL</label><br>
                    </form>

                    <div class="indumentariaItemImgPrecio text-center">
                        <p>$${this.precio}</p>
                    </div>
                    
                    </div>   
            
                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center" data-id="${this.id}" data-nombre="${this.nombre}" data-precio="${this.precio}" data-categoria="${this.categoria}" data-talle="${this.talle}">
                        COMPRAR
                    </button> 
                   
                    <button class="botonQuitarId" data-id="${this.id}" data-nombre="${this.nombre}">
                        <img src="../images/tachoTienda.png" class="img-fluid tachoTienda" alt="Quitar">
                    </button>               
                </div>              
            </div>             
        </div>`;
    }
}

// Clase para estructurar los valores de los productos de Articulos
class ProductoArticulos {
    constructor(id, nombre, precio, imagen, categoria, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;       
        this.descripcion = descripcion;
    }

    renderizarArticulos() { // Método para renderizar el HTML de un producto de la sección Articulos
        return `
        <div class="articuloTiendaContainer">
            <div class="articuloItemContainer producto ${this.categoria}">

                <div class="articuloItemImgContainer">
                    <img src="${this.imagen}" class="img-fluid articuloImg ${this.nombre}"" alt="Varios">
                </div>
                
                <div class="articuloTextContainer">
                    <div class="articuloItemImgName text-center">
                        <p>${this.nombre}</p>
                    </div>
                    
                    <div class="articuloItemImgDesc text-center">
                        <p class="articuloItemImgTextDesc">${this.descripcion}</p>
                    </div>
                    
                    <div class="articuloItemImgPrecio text-center">
                        <p>${this.precio}</p>
                    </div>

                 </div>   

                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center" data-id="${this.id}" data-nombre="${this.nombre}" data-precio="${this.precio}" data-categoria="${this.categoria}" data-descripcion="${this.descripcion}">
                        COMPRAR
                    </button> 
                   
                    <button class="botonQuitarId" data-id="${this.id}" data-nombre="${this.nombre}">
                        <img src="../images/tachoTienda.png" class="img-fluid tachoTienda" alt="Quitar">
                    </button>
                </div>
            </div>
        `

    }
}
// Instancias de los productos de membresía
const productoMembresia0 = new ProductoMembresia(0, "MEMBRESÍA DE 1 MES", 25000, "../images/indexImg/shop/logoW2tienda.png", "membresia", "1 MES");
const productoMembresia1 = new ProductoMembresia(1, "MEMBRESÍA DE 6 MESES", 144000, "../images/indexImg/shop/logoW2tienda.png", "membresia", "6 MESES");
const productoMembresia2 = new ProductoMembresia(2, "MEMBRESÍA DE 12 MESES", 264000, "../images/indexImg/shop/logoW2tienda.png", "membresia",  "12 MESES");

// Array de los productos de membresía
const productosMembresias = [productoMembresia0, productoMembresia1, productoMembresia2];

// Instancias de los productos de indumentaria
const productoIndumentaria0 = new ProductoIndumentaria(3, "Remera Naranja CRT- Tribal Heart", 15000, "../images/indexImg/shop/shop3.jpg", "indumentaria", "");
const productoIndumentaria1 = new ProductoIndumentaria(4, "Campera Naranja CRT- Tribal Heart", 40000, "../images/indexImg/shop/shop2.jpg", "indumentaria", "");
const productoIndumentaria2 = new ProductoIndumentaria(5, "Remera Negra CRT- Tribal Heart", 15000, "../images/indexImg/shop/shop1.jpg", "indumentaria", "");
// Array de los productos de indumentaria
const productosIndumentaria = [productoIndumentaria0, productoIndumentaria1, productoIndumentaria2];

// Instancias de los productos de articulos
const productoArticulos0 = new ProductoArticulos(6, "Botella CRT", 4000, "../images/indexImg/shop/articuloBotellaTienda.png", "articulos", "Botella de plástico endurecido de 500cc.");
// Array de los productos de artículos
const productosArticulos = [productoArticulos0];

// Array vacío para almacenar el carrito
let carrito = [];
let duracionMembresia = "";

// Función para renderizar los productos de membresías
function renderizarProductosMembresias() {
    const contenedorProductosMembresia = document.getElementById('productosMembresias');
    productosMembresias.forEach(productoMembresia => {
        const productoMembresiaHTML = productoMembresia.renderizar();
        contenedorProductosMembresia.innerHTML += productoMembresiaHTML;
    });
}
// Función para renderizar los productos de indumentaria
function renderizarProductosIndumentaria() {
    const contenedorProductosIndumentaria = document.getElementById('productosIndumentaria');
    productosIndumentaria.forEach(productoIndumentaria => {
        const productoIndumentariaHTML = productoIndumentaria.renderizarIndumentaria();
        contenedorProductosIndumentaria.innerHTML += productoIndumentariaHTML;
    });
}
// Función para renderizar los productos de articulos
function renderizarProductosArticulos() {
    const contenedorProductosArticulos = document.getElementById('productosArticulos');
    productosArticulos.forEach(productoArticulos => {
        const productoArticulosHTML = productoArticulos.renderizarArticulos();
        contenedorProductosArticulos.innerHTML += productoArticulosHTML;
    });
}

// Función para renderizar el costo total del carrito
function renderizarPrecioTotalDOM(productosTotales) {    
    const contenedorPrecioTotalDOM = document.getElementById(`costoFinalDOM`);
    contenedorPrecioTotalDOM.innerHTML = `<p>$${productosTotales}</p>`;       
}
// Función para renderizar el costo total del carrito en el modal
function renderizarPrecioTotalModal(productosTotales) {    
    const contenedorPrecioTotalModal = document.getElementById(`costoFinalModal`);
    contenedorPrecioTotalModal.innerHTML = `<p>$${productosTotales}</p>`;
}
// Función para renderizar la cantidad de productos
function renderizarProductosDOM(length) {    
    const contenedorPrecioTotalDOM = document.getElementById(`productosFinalDOM`);
    contenedorPrecioTotalDOM.innerHTML = `<p>${length}</p>`;       
}
// Función para renderizar el nombre de la membresía adquirida para mostrarla en la sección superior con dataos del carro
function renderizarMembresiaDOM(nombre) {    
    const contenedorMembresiaDOM = document.getElementById(`membresiaFinalDOM`);
    if (nombre) {
        contenedorMembresiaDOM.innerHTML = `<p>${nombre}</p>`;
    }else {
        contenedorMembresiaDOM.innerHTML = `<p>Elige tu membresía</p>`;
    }
}
// Función para renderizar la cantidad total de productos del carrito
function renderizarCantidadDeProductosDOM(cantidadProductos) {   
    const contenedorCantidadDeProductosDOM = document.getElementById(`cantidadFinalDOM`);
    contenedorCantidadDeProductosDOM.innerHTML = `<p>${cantidadProductos}</p>`;   
}


// Función que mostrará e imprimirá los datos dee los productos añadidos al carro
function mostrarCarritoDOM() {
    const carritoDOM = document.getElementById("carrito");
    carritoDOM.innerHTML = ""; // Limpiar contenido previo del carrito
    // Agrupar productos por nombre, precio y talle (en el caso de la indumentaria)
    const productosAgrupados = agruparProductos(carrito);
    let cantidadProductos = 0; // Inicializar la cantidad de productos en el carrito
    // Mostrar cada grupo de productos agrupados
    productosAgrupados.forEach(producto => {
        
        carritoDOM.innerHTML += `
            <div class="contenedorProductosCarrito">
            <hr>
                <h3 class="h3ProductosCarrito">${producto.nombre}</h3>
                ${producto.talle ? `<p class="textoH3PruductosCarrito">Talle: ${producto.talle}</p>` : ''}
                    <button class="botonQuitarDelCarrito" data-id="${producto.id}" >
                        -
                    </button>
                        <p class="textoH3PruductosCarrito">Cantidad: ${producto.cantidad} </p>   
                    <button class="botonAumentarCantidad  text-center justify-content-center" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-categoria="${producto.categoria}" data-talle="${producto.talle}">
                        +
                    </button>             
                <p class="textoH3PruductosCarritoPrecio">Precio unitario: $${producto.precio}</p>
                <p class="textoH3PruductosCarritoTotal">Total: $${(producto.precio * producto.cantidad)}</p>
                  <hr>  
            </div>
            
        `;
        cantidadProductos += producto.cantidad; // Sumar la cantidad de productos de este grupo al total
       
    });
    
    // Mostrar la cantidad total de productos en el carrito
    renderizarCantidadDeProductosDOM(cantidadProductos);
    // Calcular y mostrar el precio total del carrito
    let total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    renderizarPrecioTotalDOM(total);
    renderizarPrecioTotalModal(total);
    // Muestra la cantidad de productos del mismo tipo sumados al carrito
    let productosTotales = carrito.length; //Utilizo el length del carrito para saber que cantidad de objetos distintos hay
    renderizarProductosDOM(productosTotales);    
    if (carrito.length === 0) {
        const modalCarrito = document.getElementById('modalCarrito');
        modalCarrito.style.display = 'none'; // Cerrar el modal del carrito

        // Mostrar el popover de carrito vacío
        mostrarPopoverCarritoVacio();
    }  

    agregarEventoAumentarCantidad();
    agregarEventoEliminarProducto();
  
}

function agregarEventoAumentarCantidad() {
    const botonesAumentar = document.getElementsByClassName('botonAumentarCantidad');
    
    Array.from(botonesAumentar).forEach(boton => {
        boton.addEventListener('click', function(e) {
            const idProducto = e.currentTarget.getAttribute('data-id');
            const nombreProducto = e.currentTarget.getAttribute('data-nombre');

            // Encontrar el índice del producto en el carrito según su ID
            const indice = carrito.findIndex(producto => producto.id === idProducto);


            // Verificar si ya existe una membresía en el carrito
    const existeMembresiaEnCarrito = carrito.some(producto => producto.categoria === 'membresia');
    

    if (indice !== -1) {
        const producto = carrito[indice];

        // Verificar si el producto pertenece a la categoría "membresía"
        if (producto.categoria === 'membresia') {
            // Si es membresía y ya tiene una cantidad de 1, no se puede aumentar más
            if (producto.cantidad >= 1) {
                alert('Solo se permite una membresía por cliente.');
                return; // Salir de la función sin hacer cambios
            }
        }

        // Aumentar la cantidad del producto en 1
        carrito[indice].cantidad++;

        // Guardar carrito actualizado en localStorage y actualizar el carrito en el DOM
        guardarCarritoEnLocalStorage();
        mostrarCarritoDOM();
            }
           
             else {                
                console.error('Producto no encontrado en el carrito');
            }
        });
    });
}

function agregarEventoEliminarProducto() {
    const botonesEliminar = document.querySelectorAll('.botonQuitarDelCarrito');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            const idProducto = e.currentTarget.getAttribute('data-id');

            // Encontrar el índice del producto en el carrito según su ID
            const indice = carrito.findIndex(producto => producto.id === idProducto);

            if (indice !== -1) {
                // Disminuir la cantidad del producto en 1
                carrito[indice].cantidad--;

                // Si la cantidad llega a 0, eliminar el producto del carrito
                if (carrito[indice].cantidad === 0) {
                    // Eliminar el producto del carrito usando splice
                    carrito.splice(indice, 1);
                }

                // Guardar carrito actualizado en localStorage
                guardarCarritoEnLocalStorage();
                mostrarCarritoDOM();
            } else {
                console.error('No se encontró el producto en el carrito.');
            }
        });
    });
}


// Función para agrupar productos por nombre, precio y talle
function agruparProductos(carrito) {
    const productosAgrupados = [];

    carrito.forEach(producto => {
        const encontrado = productosAgrupados.find(p => 
            p.id === producto.id &&  // Buscar por ID
            p.nombre === producto.nombre && 
            p.precio === producto.precio && 
            p.talle === producto.talle &&
            p.categoria === producto.categoria
        );

        if (encontrado) {
            encontrado.cantidad += producto.cantidad; // Sumar la cantidad del producto al grupo encontrado
        } else {
            productosAgrupados.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                categoria: producto.categoria,
                cantidad: producto.cantidad,
                talle: producto.talle
            });
        }
    });
   
    return productosAgrupados;
}

// Función para agregar evento al botón "UNITE"
function agregarEvento(evento, clase, eventoString) {
    const nodos = document.getElementsByClassName(clase);
    Array.from(nodos).forEach(el => { // Convertir los nodos encontrados en un array para usar métodos
        el.addEventListener(eventoString, evento);
    });
}



// Función para inicializar el carrito desde localStorage al cargar la página
function inicializarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);        
        mostrarCarritoDOM();
    }
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));   
}

// Inicialización de eventos al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    renderizarProductosMembresias();
    renderizarProductosIndumentaria();
    renderizarProductosArticulos();
    inicializarCarritoDesdeLocalStorage();
    agregarEventoAumentarCantidad();
    agregarEvento(eventoAgregarAlCarrito, 'botonComprar', 'click');    
    agregarEvento(eliminarProductoDelCarrito, 'botonQuitarId', 'click');


    agregarEvento(eventoAgregarAlCarrito, 'botonComprarModal', 'click');  
   
    
    

    const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
    renderizarMembresiaDOM(nombreMembresiaGuardada);
    
});


function eventoAgregarAlCarrito(e) {
    const id = e.currentTarget.getAttribute('data-id');
    const nombre = e.currentTarget.getAttribute('data-nombre');
    const precio = parseFloat(e.currentTarget.getAttribute('data-precio'));
    const categoria = e.currentTarget.getAttribute('data-categoria');
    const descripcion = e.currentTarget.getAttribute('data-descripcion');

    // Verificar si ya existe una membresía en el carrito
    const existeMembresiaEnCarrito = carrito.some(producto => producto.categoria === 'membresia');

    if (categoria === 'indumentaria') {
        const radioTalles = document.querySelectorAll(`input[name="talles-${id}"]:checked`);

        if (radioTalles.length === 0) {
            alert(`Debes seleccionar el talle`);
            return;
        }
        const talleSeleccionado = radioTalles[0].id.split('-')[0];

        // Verificar si ya existe un producto con el mismo nombre, precio y talle en el carrito
        const productoExistente = carrito.find(producto =>             
            producto.nombre === nombre &&
            producto.precio === precio &&
            producto.categoria === categoria &&
            producto.talle === talleSeleccionado
        );

        if (productoExistente) {
            // Si el producto existe, incrementar la cantidad
            productoExistente.cantidad++;
        } else {
            // Si no existe, agregar el producto al carrito
            carrito.push({
                id,
                nombre,
                precio,
                cantidad: 1,
                categoria,
                talle: talleSeleccionado
            });
        }
    } else if (categoria === 'membresia' && existeMembresiaEnCarrito) {
        alert('Ya tienes una membresía en el carrito. Elimina la membresía actual para agregar otra.');
        return;
    } else if (categoria === 'membresia') {
        // Agregar la membresía al carrito
        carrito.push({
            id,
            nombre,
            precio,
            cantidad: 1,
            categoria
        });
        
        renderizarMembresiaDOM(nombre); // Actualizar el nombre de la membresía seleccionada en el DOM

        localStorage.setItem('nombreMembresia', nombre); //Almacena en el dom el valor del nombre de la membresí añadida al carro
        
    } else if (categoria === 'articulos') {
        carrito.push({
            id,
            nombre,
            precio,
            cantidad: 1,
            descripcion
        });
    }
    
    // Guardar carrito en localStorage y actualizar el carrito en el DOM
    guardarCarritoEnLocalStorage();
    mostrarCarritoDOM();
    mostrarPopoverAñadir()    
    
}

// Función para manejar el evento de eliminar del carrito
function eliminarProductoDelCarrito(e) {
    const idProducto = e.currentTarget.getAttribute('data-id');
    const nombre = e.target.getAttribute('data-nombre');

    // Encontrar el índice del producto en el carrito según su ID
    const indice = carrito.findIndex(producto => producto.id === idProducto);
    
    if (indice !== -1) {
        // Disminuir la cantidad del producto en 1
        carrito[indice].cantidad--;

        // Si la cantidad llega a 0, eliminar el producto del carrito
        if (carrito[indice].cantidad === 0) {
            // Eliminar el producto del carrito usando splice
            carrito.splice(indice, 1);

            // Guardar carrito actualizado en localStorage
            guardarCarritoEnLocalStorage();
            mostrarCarritoDOM();

            // Mostrar el popover de eliminación
            mostrarPopover();

            renderizarMembresiaDOM(nombre); // Actualizar el nombre de la membresía seleccionada en el DOM
            localStorage.setItem('nombreMembresia', nombre); 
        } 
        else {
            
            // Guardar carrito actualizado en localStorage
            guardarCarritoEnLocalStorage();
            mostrarCarritoDOM();
        }
    } else {

        alert('No se encontró el producto en el carrito.');
        console.error('No se encontró el producto en el carrito.');
    }

}

function mostrarPopover() {
    const popover = document.getElementById('popoverEliminarProducto');
    popover.style.display = 'block';

    // Ocultar el popover después de 1 segundos
    setTimeout(() => {
        popover.style.display = 'none';
    }, 1300); //  1.3 segundos
}
function mostrarPopoverAñadir() {
    const popover = document.getElementById('popoverAñadirProducto');
    popover.style.display = 'block';

    // Ocultar el popover después de 1.3 segundos
    setTimeout(() => {
        popover.style.display = 'none';
    }, 1300); // 1.3 segundos
}


// JavaScript para abrir y cerrar el modal
document.addEventListener('DOMContentLoaded', function() {
    const abrirCarrito = document.getElementById('abrirCarritoTOP');
    const iconoCarrito = document.getElementById('iconoCarrito');
    const modalCarrito = document.getElementById('modalCarrito');
    const botonCerrarModal = document.getElementById('botonCerrarModal');
  
    
    // Abrir modal al hacer clic en el boton de CARRITO de arriba
    abrirCarrito.addEventListener('click', function() {
        if (carrito.length <= 0){
             //Condicional para que frene el proceso si el carrito está vacío
        if (carrito.length <= 0){
            popoverCarritoVacio.style.display = 'block';
             mostrarPopoverCarritoVacio();
              return
        };
            return
        }
        
        modalCarrito.style.display = 'block';
    });

    // Abrir modal al hacer clic en el icono de carrito
    iconoCarrito.addEventListener('click', function() {
        if (carrito.length <= 0){
             //Condicional para que frene el proceso si el carrito está vacío
        if (carrito.length <= 0){
            popoverCarritoVacio.style.display = 'block';
             mostrarPopoverCarritoVacio();
              return
        };
            return
        }
        modalCarrito.style.display = 'block';

    });

    // Cerrar modal al hacer clic en el botón "Cerrar"
    botonCerrarModal.addEventListener('click', function() {
        modalCarrito.style.display = 'none';
    });

    // Cerrar modal si el usuario hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modalCarrito) {
            modalCarrito.style.display = 'none';
        }
    });

    
    const vaciarCarritoBtnTOP = document.getElementById('vaciarCarritoTOP');
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
    const confirmarVaciarCarritoBtn = document.getElementById('confirmarVaciarCarritoBtn');
    const cancelarVaciarCarritoBtn = document.getElementById('cancelarVaciarCarritoBtn');
    const popoverVaciarCarrito = document.getElementById('popoverVaciarCarrito');
    const popoverCarritoVaciado = document.getElementById('popoverCarritoVaciado');
    const popoverCarritoVacio = document.getElementById('popoverCarritoVacio');
    
    const carritoContenedor = document.getElementById('carrito');

 
    vaciarCarritoBtnTOP.addEventListener('click', function() {
        //Condicional para que frene el proceso si el carrito está vacío
        if (carrito.length <= 0){
            popoverCarritoVacio.style.display = 'block';
             mostrarPopoverCarritoVacio();
              return
        }
        //Si hay productos, muestra los pop overs
        popoverVaciarCarrito.style.display = 'block';
    });
   
    vaciarCarritoBtn.addEventListener('click', function() {
        
        popoverVaciarCarrito.style.display = 'block';
    });

    cancelarVaciarCarritoBtn.addEventListener('click', function() {
        popoverVaciarCarrito.style.display = 'none';
    });

    confirmarVaciarCarritoBtn.addEventListener('click', function() {
        vaciarCarrito();
        popoverVaciarCarrito.style.display = 'none';
        modalCarrito.style.display = 'none';
        mostrarPopoverCarritoVaciado();
    });

      
    const pagarCarritoBtn = document.getElementById('pagarCarrito');
    const confirmarPagoCarritoBtn = document.getElementById('confirmarPagoCarritoBtn');
    const cancelarPagoCarritoBtn = document.getElementById('cancelarPagoCarritoBtn');
    const popoverPagarCarrito = document.getElementById('popoverPagarCarrito');
    const popoverCarritoComprado = document.getElementById('popoverCarritoComprado');

   
    pagarCarritoBtn.addEventListener('click', function() {
        popoverPagarCarrito.style.display = 'block';
    });

    cancelarPagoCarritoBtn.addEventListener('click', function() {
        popoverPagarCarrito.style.display = 'none';
    });

    confirmarPagoCarritoBtn.addEventListener('click', function() {
        pagarCarrito();
        popoverPagarCarrito.style.display = 'none';
        modalCarrito.style.display = 'none';
        mostrarPopoverCompra();
    });

   
        

    function vaciarCarrito() {
        // Vaciar el contenedor del carrito eliminando todos sus hijos
        
            localStorage.clear();            
            carrito = []           
            const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
            renderizarMembresiaDOM(nombreMembresiaGuardada);
            mostrarCarritoDOM();  //Para que se actualicen los datos de DOM     
    }

    function pagarCarrito() {
        // Vaciar el contenedor del carrito eliminando todos sus hijos
        
            localStorage.clear();            
            carrito = []           
            const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
            renderizarMembresiaDOM(nombreMembresiaGuardada);
            mostrarCarritoDOM();  //Para que se actualicen los datos de DOM     
    }

    function mostrarPopoverCarritoVaciado() {
        popoverCarritoVaciado.style.display = 'block';
        setTimeout(function() {
            popoverCarritoVaciado.style.display = 'none';
        }, 1300); // Ocultar después de 2 segundos
    }

   
    
});

function mostrarPopoverCarritoVacio() {
    popoverCarritoVacio.style.display = 'block';
    setTimeout(function() {
        popoverCarritoVacio.style.display = 'none';
    }, 1300); // Ocultar después de 2 segundos
}