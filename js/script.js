
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
                    <button class="botonComprar text-center justify-content-center" data-id="${this.id}" data-nombre="${this.nombre}" data-precio="${this.precio}" data-imagen="${this.imagen}" data-categoria="${this.categoria}">
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
                    <button class="botonComprar text-center justify-content-center" data-id="${this.id}" data-nombre="${this.nombre}" data-precio="${this.precio}" data-imagen="${this.imagen}" data-categoria="${this.categoria}" data-talle="${this.talle}">
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
                        <p>$${this.precio}</p>
                    </div>

                 </div>   

                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center" data-id="${this.id}" data-nombre="${this.nombre}" data-precio="${this.precio}" data-imagen="${this.imagen}" data-categoria="${this.categoria}" data-descripcion="${this.descripcion}">
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

//----------------------------------------- API PRODUCTOS JSON --------------------------------------

const contenedorProductosMembresia = document.getElementById('productosMembresias');
const contenedorProductosIndumentaria = document.getElementById('productosIndumentaria');
const contenedorProductosArticulos = document.getElementById('productosArticulos');

document.addEventListener('DOMContentLoaded', () => {

     // Mostrar el spinner
     const spinner = document.getElementById('spinner');
     const contenido = document.getElementById('contenido');
 
     spinner.style.display = 'block'; // Mostrar spinner
 
     // Ocultar el spinner cuando la página esté completamente cargada
     window.addEventListener('load', function() {

        

            spinner.style.display = 'none'; // Ocultar spinner
            contenido.style.display = 'block'; // Mostrar contenido    
        
        
        
             
     });

    fetch('/js/productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(data => {
            // Procesar los productos
            data.forEach(producto => {
                // Llama a la función adecuada para renderizar los productos
                if (producto.categoria === 'membresia') {
                      // Crear una instancia de ProductoMembresia
                      const productoMembresia = new ProductoMembresia(
                        producto.id,
                        producto.nombre,
                        producto.precio,
                        producto.imagen,
                        producto.categoria,
                        producto.duracion
                    );
                    
                    // Renderizar el producto y añadirlo al contenedor
                    contenedorProductosMembresia.innerHTML += productoMembresia.renderizar();                                        
                } else if (producto.categoria === 'indumentaria') {
                     // Crear una instancia de ProductoIndumentaria
                     const productoIndumentaria = new ProductoIndumentaria(
                        producto.id,
                        producto.nombre,
                        producto.precio,
                        producto.imagen,
                        producto.categoria,
                        producto.descripcion,
                        producto.talle
                    );
                    // Renderizar el producto y añadirlo al contenedor
                    contenedorProductosIndumentaria.innerHTML += productoIndumentaria.renderizarIndumentaria();

                } else if (producto.categoria === 'articulos') {
                    // Crear una instancia de ProductoArticulos
                    const productoArticulos = new ProductoArticulos(
                        producto.id,
                        producto.nombre,
                        producto.precio,
                        producto.imagen,
                        producto.categoria,
                        producto.descripcion,
                        producto.talle
                    );
                    // Renderizar el producto y añadirlo al contenedor
                    contenedorProductosArticulos.innerHTML += productoArticulos.renderizarArticulos();
                }                 
                           });

           //Llama a la función que asigna los eventos a los botones de COMPRAR y BORRAR                
           agregarEventos() 
           //Actualiza el valor de la membresía del carrito del DOM         
           const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
           renderizarMembresiaDOM(nombreMembresiaGuardada);    
           //Carga los productos del carrito almcaneados en LocalStorage    
           inicializarCarritoDesdeLocalStorage();
        })
        .catch(error => {            
            mostrarToastErrorCarga();
        });        

        //Para mostrar los mensajes al seleccionar los radios del método de pago del modal de pagos
        const radiosPago = document.getElementsByName('pago');
        const campoCBU = document.getElementById('campoCBU');
        const campoCuotas = document.getElementById('campoCuotas');
    
        radiosPago.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'transferencia') {
                    campoCBU.style.visibility = 'visible';
                    campoCuotas.style.visibility = 'hidden';
                } else if (radio.value === 'tarjeta') {
                    campoCBU.style.visibility = 'hidden';
                    campoCuotas.style.visibility = 'visible';
                } else {
                    campoCBU.style.visibility = 'hidden';
                    campoCuotas.style.visibility = 'hidden';
                }
            });
        });    

        //Eventos del botón de pagar o submit del formulario de pago
        const pagoForm = document.getElementById('pagoForm');

        pagoForm.addEventListener('submit', function(event) {
            // Evita el envío del formulario por defecto
            event.preventDefault();
    
            // Verifica si el formulario es válido
            if (pagoForm.checkValidity()) {
                // Ejecuta la función swalPagarCarrito() si es válido
                swalPagarCarrito();                
            } else {
                
            }
        });
});

//Asigna los eventos a los botones de COMPRAR y BORRAR
function agregarEventos() {
    // Agregar evento a todos los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll('.botonComprar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', eventoAgregarAlCarrito);
    });

    // Agregar evento a todos los botones de quitar del carrito
    const botonesQuitar = document.querySelectorAll('.botonQuitarId');
    botonesQuitar.forEach(boton => {
        boton.addEventListener('click', eliminarProductoDelCarrito);
    });
}

//----------------------------------------- FIN API PRODUCTOS JSON --------------------------------------

// Array de los productos de membresía
const productosMembresias = [];

// // Array de los productos de indumentaria
const productosIndumentaria = [];

// Array de los productos de artículos
const productosArticulos = [];

// Array vacío para almacenar el carrito
let carrito = [];
let duracionMembresia = "";

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
// Función para renderizar el costo total del carrito en el modal del pago
function renderizarPrecioTotalModalPago(productosTotales) {    
    const contenedorPrecioTotalModalPago = document.getElementById(`costoFinalModalPago`);
    contenedorPrecioTotalModalPago.innerHTML = `<p>$${productosTotales}</p>`;
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

     // Usar un Set para almacenar los IDs únicos de los productos
     const idsUnicos = new Set();
    productosAgrupados.forEach(producto => {
         // Añadir el ID del producto al Set
         idsUnicos.add(producto.id);
            carritoDOM.innerHTML += `
                <div class="contenedorProductosCarrito">

                    <div clas="contenedorImgCarrito">
                        <img class="carritoModalImg" src="${producto.imagen}" alt="logoCRT">
                    </div>

                    <div class="contenedorDatosProductoCarrito">
                        <h3 class="h3ProductosCarrito">${producto.nombre}</h3>                
                        
                        ${producto.talle ? `<p class="textoH3PruductosCarrito">Talle: <strong>${producto.talle}</strong></p>` : ''}
                            <div class="contenedorCantidadProdcutosCarrito">
                                <button class="botonQuitarDelCarrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-imagen="${producto.imagen}" data-categoria="${producto.categoria}" data-talle="${producto.talle}" >
                                    -
                                </button>
                                    <p class="textoH3PruductosCarrito">Cantidad: <strong>${producto.cantidad}</strong> </p>   
                                <button class="botonAumentarCantidad  text-center justify-content-center" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-imagen="${producto.imagen}" data-categoria="${producto.categoria}" data-talle="${producto.talle}">
                                    +
                                </button>  
                            </div>                      
                        <p class="textoH3PruductosCarritoPrecio">Precio unitario: <strong>$${producto.precio}</strong></p>
                        <p class="textoH3PruductosCarritoTotal">Total: <strong>$${(producto.precio * producto.cantidad)}</strong></p>
                    </div>     
                </div>
                
            `;
            cantidadProductos += producto.cantidad; // Sumar la cantidad de productos de este grupo al total
            
        });
    //Asigna el valor de la cantidad de productos distintos a la const
    const cantidadProductosDistintos = idsUnicos.size;
     //Muestra la cantidad de distintos productos en el DOM
    document.getElementById('productosFinalDOM').innerText = `${cantidadProductosDistintos}`;
    
    // Mostrar la cantidad total de productos en el carrito
    renderizarCantidadDeProductosDOM(cantidadProductos);
    // Calcular y mostrar el precio total del carrito
    let total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    renderizarPrecioTotalDOM(total);
    renderizarPrecioTotalModal(total);
    renderizarPrecioTotalModalPago(total);
    
    if (carrito.length === 0) {
        const modalCarrito = document.getElementById('modalCarrito');
        modalCarrito.style.display = 'none'; // Cerrar el modal del carrito

        // Mostrar el toast de carrito vacío
        mostrarToastCarritoVacio();
    }  
    agregarEventoAumentarCantidad();
    agregarEventoEliminarProducto();  
}

function eventoAgregarAlCarrito(e) {
    const id = e.currentTarget.getAttribute('data-id');
    const nombre = e.currentTarget.getAttribute('data-nombre');
    const precio = parseFloat(e.currentTarget.getAttribute('data-precio'));    
    const categoria = e.currentTarget.getAttribute('data-categoria');
    const imagen = e.currentTarget.getAttribute('data-imagen');
    const descripcion = e.currentTarget.getAttribute('data-descripcion');

    // Verificar si ya existe una membresía en el carrito
    const existeMembresiaEnCarrito = carrito.some(producto => producto.categoria === 'membresia');

    if (categoria === 'indumentaria') {
        const radioTalles = document.querySelectorAll(`input[name="talles-${id}"]:checked`);

        if (radioTalles.length === 0) {
            mostrarToastElijeTalle();
            return;
        }
        const talleSeleccionado = radioTalles[0].id.split('-')[0];

        // Verificar si ya existe un producto con el mismo nombre, precio y talle en el carrito
        const productoExistente = carrito.find(producto =>             
            producto.nombre === nombre &&
            producto.precio === precio &&
            producto.categoria === categoria &&
            producto.iamgen === imagen &&
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
                imagen,
                categoria,
                talle: talleSeleccionado
            });
        }
    } else if (categoria === 'membresia' && existeMembresiaEnCarrito) {
        mostrarToastMembresiaExistente();
        return;
    } else if (categoria === 'membresia') {
        // Agregar la membresía al carrito
        carrito.push({
            id,
            nombre,
            precio,
            imagen,
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
            imagen,
            cantidad: 1,
            descripcion
        });
    }
    
    mostrarEstelaVerde();   
    // Guardar carrito en localStorage y actualizar el carrito en el DOM
    guardarCarritoEnLocalStorage();
    mostrarCarritoDOM();
    mostrarToastAñadir()   
}

// Función para manejar el evento de eliminar del carrito
function eliminarProductoDelCarrito(e) {
    const idProducto = e.currentTarget.getAttribute('data-id');
    const nombre = e.target.getAttribute('data-nombre');
    const talle = e.target.getAttribute('data-talle');
    
    const radioTalles = document.querySelectorAll(`input[name="talles-${idProducto}"]:checked`);
    // Recupera el valor del talle seleccionado en el radio, en caso de existir, y sino asigna valor de null
    const talleSeleccionado = radioTalles.length > 0 ? radioTalles[0].id.split('-')[0] : null;
    // Encontrar el índice del producto en el carrito según su ID y su TALLE
    const indice = carrito.findIndex(producto => producto.id === idProducto &&
        (producto.talle === talleSeleccionado || (producto.talle === undefined && talleSeleccionado === null)));
  
if (indice !== -1) {
    // Si el producto existe, incrementar la cantidad
    carrito[indice].cantidad--;
        // Si la cantidad llega a 0, eliminar el producto del carrito
        if (carrito[indice].cantidad === 0) {
            // Eliminar el producto del carrito usando splice
            carrito.splice(indice, 1);

            // Guardar carrito actualizado en localStorage
            guardarCarritoEnLocalStorage();
            mostrarCarritoDOM();

            // Mostrar el toast de eliminación
            mostrarToastEliminar();
            mostrarEstelaRoja();
            
             // Remueve el valor de la membresía
            localStorage.removeItem('nombreMembresia');
            renderizarMembresiaDOM(''); // Actualizar el nombre de la membresía seleccionada en el DOM            
        }  
        else {            
            // Guardar carrito actualizado en localStorage
            guardarCarritoEnLocalStorage();
            mostrarCarritoDOM();
        }
    } else {
        mostrarToastProdcutoInexistente();       
    }

}

function agregarEventoAumentarCantidad() {
    const botonesAumentar = document.getElementsByClassName('botonAumentarCantidad');
    
    Array.from(botonesAumentar).forEach(boton => {
        boton.addEventListener('click', function(e) {
            const idProducto = e.currentTarget.getAttribute('data-id');
            const talle = e.target.getAttribute('data-talle');  

            // Encontrar el índice del producto en el carrito según su ID y su TALLE
            const indice = carrito.findIndex(producto => producto.id === idProducto &&
                (producto.talle === talle || (producto.talle === undefined )));

    if (indice !== -1) {
        const producto = carrito[indice];

        // Verificar si el producto pertenece a la categoría "membresía"
        if (producto.categoria === 'membresia') {
            // Si es membresía y ya tiene una cantidad de 1, no se puede aumentar más
            if (producto.cantidad >= 1) {
                mostrarToastMembresiaExistente();
                return; // Salir de la función sin hacer cambios
            }
        }

        // Aumentar la cantidad del producto en 1
        carrito[indice].cantidad++;

        // Guardar carrito actualizado en localStorage y actualizar el carrito en el DOM
        guardarCarritoEnLocalStorage();
        mostrarCarritoDOM();
        mostrarToastAñadir();
            }           
             else {                
                mostrarToastProdcutoInexistente();
            }
        });
    });
}

function agregarEventoEliminarProducto() {
    const botonesEliminar = document.querySelectorAll('.botonQuitarDelCarrito');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            const idProducto = e.currentTarget.getAttribute('data-id');
            const talle = e.target.getAttribute('data-talle');         
           
            // Encontrar el índice del producto en el carrito según su ID y su TALLE
            const indice = carrito.findIndex(producto => producto.id === idProducto &&
                (producto.talle === talle || (producto.talle === undefined )));
        
            if (indice !== -1) {
                // Disminuir la cantidad del producto en 1
                carrito[indice].cantidad--;

                // Si la cantidad llega a 0, eliminar el producto del carrito
                if (carrito[indice].cantidad === 0) {

                    // Si existe una memebresía, y se borra, actualiza el valor de membresía del DOM
                    if (carrito[indice].categoria === 'membresia') {
                        // Eliminar el nombre de la membresía del localStorage
                        localStorage.removeItem('nombreMembresia');
                        // Actualizar el nombre de la membresía en el DOM
                        renderizarMembresiaDOM('');
                    }
                    // Eliminar el producto del carrito usando splice
                    carrito.splice(indice, 1);                        
                }

                // Guardar carrito actualizado en localStorage
                guardarCarritoEnLocalStorage();
                mostrarCarritoDOM();
                mostrarToastEliminar();

            } else {
                mostrarToastProdcutoInexistente();
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
            p.imagen === producto.imagen &&
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
                imagen: producto.imagen,
                precio: producto.precio,
                categoria: producto.categoria,
                cantidad: producto.cantidad,
                talle: producto.talle
            });            
        }
    });
   
    return productosAgrupados;
}

// Función para agregar eventos a los botones
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
     try {
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    } catch (error) {        
        mostrarToastErrorCargarLS();
    }  
}

//---------------------------------- MODAL CARRITO ---------------------------------------------
//Para abrir y cerrar el modal, eventos de los botones del carrito
    const abrirCarrito = document.getElementById('abrirCarritoTOP');
    const iconoCarrito = document.getElementById('iconoCarrito');
    const modalCarrito = document.getElementById('modalCarrito');    
    const botonCerrarModal = document.getElementById('botonCerrarModal');
    //Valores del modal de formulario de pago
    const confirmarCarrito = document.getElementById('confirmarCarrito');
    const botonCerrarPagoModal = document.getElementById('botonCerrarPagoModal');
    const modalPagoCarrito = document.getElementById('modalPagoCarrito');    

     // Cerrar modal  del fomrulario de pago al hacer clic en el botón "Cerrar"
     confirmarCarrito.addEventListener('click', function() {
        modalPagoCarrito.style.display = 'block';
    });

    // Abrir modal al hacer clic en el boton de CARRITO de arriba
    abrirCarrito.addEventListener('click', function() {
        if (carrito.length <= 0){
             //Condicional para que frene el proceso si el carrito está vacío                 
             mostrarToastCarritoVacio();
              return      
        }        
        modalCarrito.style.display = 'block';
    });

    // Abrir modal al hacer clic en el icono de carrito
    iconoCarrito.addEventListener('click', function() {
        if (carrito.length <= 0){
             //Condicional para que frene el proceso si el carrito está vacío                 
             mostrarToastCarritoVacio();
              return       
        }        
        modalCarrito.style.display = 'block';
    });

    // Cerrar modal al hacer clic en el botón "Cerrar"
    botonCerrarModal.addEventListener('click', function() {
        modalCarrito.style.display = 'none';        
    });
    // Cerrar modal de pago del formulario de pago al hacer clic en el botón "Cerrar"
    botonCerrarPagoModal.addEventListener('click', function() {
        modalPagoCarrito.style.display = 'none';
           });

    // Cerrar modal si el usuario hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target === modalCarrito) {
            modalCarrito.style.display = 'none';
        }
    });

    //Botón de vaciar carrito del menú superior
    const vaciarCarritoBtnTOP = document.getElementById('vaciarCarritoTOP');
    //Botón de vaciar carrito del modal del carrito
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');

    //Eventos de los botones de vaciar carrito ------------------------------
    vaciarCarritoBtnTOP.addEventListener('click', function() {
        //Condicional para que frene el proceso si el carrito está vacío
        if (carrito.length <= 0){            
             mostrarToastCarritoVacio();
              return
        }
        //Sweet alert para vaciar el carrito
        swalVaciarCarrito()
    });
   
    vaciarCarritoBtn.addEventListener('click', function() {
        //Sweet alert para vaciar el carrito
        swalVaciarCarrito()
    });

//---------------------------------- FIN MODAL CARRITO ---------------------------------------------
   
// ----------------------- FUNCIONES PARA PAGAR Y VACIAR CARRITO ----------------------------------

    function vaciarCarrito() {
        // Vaciar el contenedor del carrito eliminando todos sus hijos
        
            localStorage.clear();            
            carrito = []           
            const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
            mostrarEstelaRoja();
            renderizarMembresiaDOM(nombreMembresiaGuardada);
            mostrarCarritoDOM();  //Para que se actualicen los datos de DOM     
    }

    function pagarCarrito() {
        // Vaciar el contenedor del carrito eliminando todos sus hijos
        
            localStorage.clear();            
            carrito = []           
            const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
            mostrarEstelaVerde();
            renderizarMembresiaDOM(nombreMembresiaGuardada);
            mostrarCarritoDOM();  //Para que se actualicen los datos de DOM     
    }

//-------------------------------------- TOAST --------------------------------------------------

    function mostrarToastCarritoVaciado() {
       //Muestra Toast de "Carrito vaciado"
       Toastify({
        text: "Se ha vaciado el carrito",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 2000,      
        style: {
            background: "linear-gradient(to right,#e65b5b, #ec8b8b)",
        },
        })    
            .showToast();       
    }  

function mostrarToastCarritoVacio() {
    //Muestra Toast de "carrito vacío"
    Toastify({
        text: "No hay productos en el carrito",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {
            background: "linear-gradient(to right, #e6ba5b, #ffd884)",
        },
        })    
            .showToast();
}

function mostrarToastAñadir() {
     // Muestra Toast de "producto agregado"
     Toastify({
        text: "Producto Agregado",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 900,      
        style: {
            background: "linear-gradient(to right, #60e65b, #8af786)",
          },
        })    
            .showToast();
}

function mostrarToastEliminar() {
    // Muestra Toast de "producto eliminado"
    Toastify({
        text: "Producto Eliminado",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 900,      
        style: {
            background: "linear-gradient(to right, #e65b5b, #ec8b8b)",
        },
        })    
            .showToast();
}

function mostrarToastProdcutoInexistente() {
     // Muestra Toast de "producto inexistente"
     Toastify({
        text: "No existe el producto en el carrito",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {
            background: "linear-gradient(to right, #e6ba5b, #ffd884)",
        },
        })    
            .showToast();
}

function mostrarToastMembresiaExistente() {
     // Muestra Toast de "membresia existente"
     Toastify({
        text: "Ya tienes una membresía en el carrito, elimina la actual para agregar otra.",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {            
            background: "linear-gradient(to right, #e6ba5b, #ffd884)",
        },
        })    
            .showToast();
}

function mostrarToastElijeTalle() {
    Toastify({
        text: "Debes seleccionar el talle",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {            
            background: "linear-gradient(to right, #e6ba5b, #ffd884)",
        },
        })    
            .showToast();
}

function mostrarToastCompraConcretada() {
    Toastify({
        text: "Que lo disfrutes! :)",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {            
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }, 
        
        })    
            .showToast();
}
function mostrarToastErrorCarga() {
    Toastify({
        text: "Error en la carga de los datos.",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {            
            background: "linear-gradient(to right, #e65b5b, #ec8b8b)",
        }, 
        
        })    
            .showToast();
}

function mostrarToastErrorCargarLS() {
    Toastify({
        text: "Error al guardar los datos del carrito.",    
        close: true,
        position: "left",
        stopOnFocus: true,
        gravity: "bottom",
        newWindow: true,
        duration: 1500,      
        style: {            
            background: "linear-gradient(to right, #e65b5b, #ec8b8b)",
        }, 
        
        })    
            .showToast();
}

//------------------------------ SWEET ALERTS -------------------------------------------------
     //Sweet alert para vaciar el carrito
     function swalVaciarCarrito(){
        Swal.fire({
            title: "ATENCIÓN!",
            text: "¿Deseas vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            background: "#fff5ee",            
            color: "#e97100",
            confirmButtonColor: "#e97100",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito(),
                mostrarToastCarritoVaciado(),
            Swal.fire({      
                text: "El carrito ha sido vaciado.",
                color: "#e97100",
                confirmButtonColor: "#e97100",                
                icon: "success"
            });
            }
        });
    }

    //Sweet alert para vaciar el carrito
    function swalPagarCarrito(){
        // Obtener el método de pago seleccionado
        const metodoPagoSeleccionado = document.querySelector('input[name="pago"]:checked').value;

        // Mapeo de los valores del radio a textos más amigables
        const textoMetodoPago = {
            efectivo: 'Efectivo',
            transferencia: 'Transferencia',
            tarjeta: 'Tarjeta'
        }[metodoPagoSeleccionado];
       
        Swal.fire({
            title: "ATENCIÓN!",
            text:  `El pago se realizará en ${textoMetodoPago}. ¿Deseas confirmar la transacción?`,
            icon: "warning",
            showCancelButton: true,    
            color: "#e97100",
            confirmButtonColor: "#e97100",
            cancelButtonColor: "#d33",
            confirmButtonText: "Pagar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Obtener los valores del formulario
                const nombre = document.getElementById('nombre').value;
                const direccion = document.getElementById('direccion').value;
            
                    pagarCarrito(),
                    mostrarToastCompraConcretada(),
                    
                        //Oculta el modal del formulario de pago
                        modalPagoCarrito.style.display = 'none';
                        //Reinicia los valores del form
                        pagoForm.reset();
            Swal.fire({      
                text: `${nombre}, muchas gracias por tu compra! Se enviarán los productos a ${direccion}.`,
                color: "#e97100",
                confirmButtonColor: "#e97100",
                icon: "success",                
            });
            }
        });
      
    }

    
//---------------------------------- ESTELAS CARRITO--------------------------------------
 
function mostrarEstelaVerde() {
    // Obtener el elemento del carrito por su ID
    const iconoCarrito = document.getElementById('iconoCarrito');
    
    // Añadir la clase 'estela-verde' al elemento
    iconoCarrito.classList.add('estela-verde');
  
    // Eliminar la clase después de 300 milisegundos (la duración de la animación)
    setTimeout(() => {
      iconoCarrito.classList.remove('estela-verde');
    }, 300); // Asegúrate de que esta duración coincida con la duración de la animación en CSS
  }

  function mostrarEstelaRoja() {
    // Obtener el elemento del carrito por su ID
    const iconoCarrito = document.getElementById('iconoCarrito');
    
    // Añadir la clase 'estela-verde' al elemento
    iconoCarrito.classList.add('estela-roja');
  
    // Eliminar la clase después de 300 milisegundos (la duración de la animación)
    setTimeout(() => {
      iconoCarrito.classList.remove('estela-roja');
    }, 300); // Asegúrate de que esta duración coincida con la duración de la animación en CSS
  }
 //---------------------------------- FINAL ESTELAS------------------------------- ---------------------

