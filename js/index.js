/* =====================================
   FILTROS DEL CATÁLOGO TECHZONE
===================================== */

const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetasProducto = document.querySelectorAll(".producto-card");
const contadorProductos = document.querySelector(".total-productos");

// Escuchar los clics de los filtros
botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoriaSeleccionada = boton.dataset.filtro;

    // Actualizar botón activo
    botonesFiltro.forEach((item) => {
      item.classList.remove("activo");
      item.setAttribute("aria-pressed", "false");
    });

    boton.classList.add("activo");
    boton.setAttribute("aria-pressed", "true");

    // Filtrar tarjetas
    let productosVisibles = 0;

    tarjetasProducto.forEach((producto) => {
      const categoriaProducto = producto.dataset.categoria;

      const mostrar =
        categoriaSeleccionada === "todos" ||
        categoriaSeleccionada === categoriaProducto;

      producto.hidden = !mostrar;

      if (mostrar) {
        productosVisibles++;
      }
    });

    // Actualizar contador
    contadorProductos.textContent = `${productosVisibles} ${
      productosVisibles === 1 ? "producto" : "productos"
    }`;
  });
});

/* ==========================================
   TECHZONE - PÁGINA DE PRODUCTOS
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================
       1. FILTROS DEL CATÁLOGO
    ========================================== */

  const botonesFiltro = document.querySelectorAll(".filtro");
  const tarjetasProducto = document.querySelectorAll(".producto-card");
  const contadorProductos = document.querySelector(".total-productos");

  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      const categoriaSeleccionada = boton.dataset.filtro;

      // Actualizar el botón seleccionado
      botonesFiltro.forEach((item) => {
        item.classList.remove("activo");
        item.setAttribute("aria-pressed", "false");
      });

      boton.classList.add("activo");
      boton.setAttribute("aria-pressed", "true");

      // Mostrar los productos correspondientes
      let cantidadVisibles = 0;

      tarjetasProducto.forEach((tarjeta) => {
        const categoriaProducto = tarjeta.dataset.categoria;

        const mostrar =
          categoriaSeleccionada === "todos" ||
          categoriaSeleccionada === categoriaProducto;

        tarjeta.hidden = !mostrar;

        if (mostrar) {
          cantidadVisibles++;
        }
      });

      // Actualizar contador
      if (contadorProductos) {
        contadorProductos.textContent = `${cantidadVisibles} ${
          cantidadVisibles === 1 ? "producto" : "productos"
        }`;
      }
    });
  });

  /* ==========================================
       2. INFORMACIÓN DE LOS PRODUCTOS
    ========================================== */

  const productos = {
    audifonos: {
      nombre: "Audífonos inalámbricos",
      categoria: "Audio",
      precio: "$85.000",
      imagen: "../assets/img/audifonos.jpg",
      descripcion:
        "Audífonos inalámbricos de diseño moderno, ideales para escuchar música, estudiar y disfrutar de contenido multimedia con comodidad.",

      especificaciones: {
        Conectividad: "Bluetooth",
        Tipo: "Audífonos de diadema",
        Color: "Negro",
        "Uso recomendado": "Música, estudio y entretenimiento",
      },
    },

    teclado: {
      nombre: "Teclado mecánico RGB",
      categoria: "Periféricos",
      precio: "$150.000",
      imagen: "../assets/img/teclado.jpg",
      descripcion:
        "Teclado mecánico con iluminación RGB, diseñado para brindar una experiencia de escritura cómoda y una apariencia moderna.",

      especificaciones: {
        Tipo: "Mecánico",
        Conectividad: "USB",
        Iluminación: "RGB",
        "Uso recomendado": "Estudio, trabajo y videojuegos",
      },
    },

    mouse: {
      nombre: "Mouse inalámbrico",
      categoria: "Periféricos",
      precio: "$65.000",
      imagen: "../assets/img/mouse.png",
      descripcion:
        "Mouse inalámbrico de diseño compacto y ergonómico, ideal para trabajar, estudiar y navegar de manera cómoda.",

      especificaciones: {
        Conectividad: "Inalámbrica",
        Color: "Negro",
        Diseño: "Ergonómico",
        "Uso recomendado": "Oficina y estudio",
      },
    },

    parlante: {
      nombre: "Parlante Bluetooth",
      categoria: "Audio",
      precio: "$120.000",
      imagen: "../assets/img/parlante.png",
      descripcion:
        "Parlante portátil con conectividad Bluetooth, pensado para disfrutar de música y contenido multimedia en diferentes espacios.",

      especificaciones: {
        Conectividad: "Bluetooth",
        Tipo: "Portátil",
        Color: "Negro",
        "Uso recomendado": "Música y entretenimiento",
      },
    },

    cargador: {
      nombre: "Cargador USB-C",
      categoria: "Cargadores",
      precio: "$45.000",
      imagen: "../assets/img/cargador.png",
      descripcion:
        "Adaptador de corriente compacto con conexión USB-C, práctico para cargar dispositivos electrónicos compatibles.",

      especificaciones: {
        Tipo: "Adaptador de corriente",
        Conexión: "USB-C",
        Color: "Negro",
        Compatibilidad: "Dispositivos compatibles con USB-C",
      },
    },

    "memoria-usb": {
      nombre: "Memoria USB 64 GB",
      categoria: "Almacenamiento",
      precio: "$38.000",
      imagen: "../assets/img/usb.png",
      descripcion:
        "Memoria USB compacta con capacidad de 64 GB, ideal para guardar y transportar documentos, fotografías y otros archivos.",

      especificaciones: {
        Capacidad: "64 GB",
        Tipo: "Memoria USB",
        Diseño: "Compacto y portátil",
        "Uso recomendado": "Almacenamiento de archivos",
      },
    },

    smartwatch: {
      nombre: "Smartwatch",
      categoria: "Móviles",
      precio: "$180.000",
      imagen: "../assets/img/reloj.png",
      descripcion:
        "Reloj inteligente de diseño moderno, pensado para consultar información y complementar las actividades cotidianas.",

      especificaciones: {
        Tipo: "Reloj inteligente",
        Pantalla: "Digital",
        Color: "Negro",
        "Uso recomendado": "Actividades diarias",
      },
    },

    "soporte-portatil": {
      nombre: "Soporte para portátil",
      categoria: "Accesorios",
      precio: "$72.000",
      imagen: "../assets/img/soporte.png",
      descripcion:
        "Soporte ajustable para elevar el computador portátil y mejorar la organización del espacio de estudio o trabajo.",

      especificaciones: {
        Tipo: "Soporte ajustable",
        Material: "Metal",
        Diseño: "Plegable",
        "Uso recomendado": "Computadores portátiles",
      },
    },

    "ssd-externo": {
      nombre: "SSD externo 500 GB",
      categoria: "Almacenamiento",
      precio: "$210.000",
      imagen: "../assets/img/ssd.png",
      descripcion:
        "Unidad SSD externa de 500 GB, práctica para almacenar, transportar archivos y realizar copias de seguridad.",

      especificaciones: {
        Capacidad: "500 GB",
        Tecnología: "SSD",
        Tipo: "Unidad externa",
        "Uso recomendado": "Archivos y copias de seguridad",
      },
    },
  };

  /* ==========================================
       3. SELECCIONAR ELEMENTOS DEL MODAL
    ========================================== */

  const modal = document.querySelector("#modal-producto");

  const modalImagen = document.querySelector("#modal-imagen");
  const modalCategoria = document.querySelector("#modal-categoria");
  const modalNombre = document.querySelector("#modal-nombre");
  const modalPrecio = document.querySelector("#modal-precio");
  const modalDescripcion = document.querySelector("#modal-descripcion");
  const modalTabla = document.querySelector("#modal-tabla");

  const botonesDetalles = document.querySelectorAll(".btn-detalles");
  const botonCerrar = document.querySelector(".cerrar-modal");

  /* ==========================================
       4. ABRIR MODAL CON DATOS DEL PRODUCTO
    ========================================== */

  if (modal) {
    botonesDetalles.forEach((boton) => {
      boton.addEventListener("click", () => {
        // Identificar el producto seleccionado
        const idProducto = boton.dataset.producto;

        // Buscar su información
        const producto = productos[idProducto];

        if (!producto) {
          console.error("No se encontró el producto:", idProducto);
          return;
        }

        // Actualizar imagen
        modalImagen.src = producto.imagen;
        modalImagen.alt = producto.nombre;

        // Actualizar información
        modalCategoria.textContent = producto.categoria;
        modalNombre.textContent = producto.nombre;
        modalPrecio.textContent = producto.precio;
        modalDescripcion.textContent = producto.descripcion;

        // Limpiar la tabla anterior
        modalTabla.replaceChildren();

        // Crear especificaciones del producto
        Object.entries(producto.especificaciones).forEach(
          ([caracteristica, valor]) => {
            const fila = document.createElement("tr");

            const encabezado = document.createElement("th");
            encabezado.scope = "row";
            encabezado.textContent = caracteristica;

            const celda = document.createElement("td");
            celda.textContent = valor;

            fila.append(encabezado, celda);

            modalTabla.appendChild(fila);
          },
        );

        // Abrir el modal
        modal.showModal();
      });
    });

    /* ==========================================
           5. CERRAR MODAL
        ========================================== */

    // Cerrar con el botón X
    if (botonCerrar) {
      botonCerrar.addEventListener("click", () => {
        modal.close();
      });
    }

    // Cerrar haciendo clic fuera de la ventana
    modal.addEventListener("click", (evento) => {
      const rect = modal.getBoundingClientRect();

      const clicFuera =
        evento.clientX < rect.left ||
        evento.clientX > rect.right ||
        evento.clientY < rect.top ||
        evento.clientY > rect.bottom;

      if (clicFuera) {
        modal.close();
      }
    });

    // Escape funciona de manera nativa con dialog
  }
});

/*******************   FORMULARIO     ***************************/

/* =====================================
   VALIDACIÓN DEL MENSAJE
===================================== */

const mensaje = document.querySelector("#mensaje");
const errorMensaje = document.querySelector("#error-mensaje");
const contadorMensaje = document.querySelector("#contador-mensaje");

function validarMensaje() {
  const texto = mensaje.value.trim();
  const longitud = texto.length;

  // Limpiar siempre el error anterior
  mensaje.setCustomValidity("");

  if (longitud < 15) {
    mensaje.setCustomValidity("El mensaje debe tener al menos 15 caracteres.");
  }

  const esValido = mensaje.validity.valid;

  mensaje.classList.toggle("invalido", !esValido);

  if (errorMensaje) {
    errorMensaje.textContent = esValido
      ? ""
      : "Escribe al menos 15 caracteres en tu mensaje.";
  }

  return esValido;
}

// Actualizar mientras el usuario escribe
mensaje.addEventListener("input", () => {
  if (contadorMensaje) {
    contadorMensaje.textContent = `${mensaje.value.length} / 500 caracteres`;
  }

  validarMensaje();
});

// Validar al salir del campo
mensaje.addEventListener("blur", validarMensaje);

/* =====================================
   VALIDACIÓN DEL NOMBRE
===================================== */

const nombre = document.querySelector("#nombre");
const errorNombre = document.querySelector("#error-nombre");

// Letras, espacios, tildes, guiones y apóstrofes
const caracteresPermitidos = /^[\p{L}\p{M}\s'-]+$/u;

function validarNombre() {
  const valor = nombre.value.trim();

  // Limpiar errores anteriores
  nombre.setCustomValidity("");

  let error = "";

  if (valor.length === 0) {
    error = "Ingresa tu nombre completo.";
  } else if (!caracteresPermitidos.test(valor)) {
    error = "El nombre solo puede contener letras, no números.";
  } else if (valor.length < 3) {
    error = "El nombre debe tener al menos 3 caracteres.";
  }

  if (error) {
    nombre.setCustomValidity(error);
  }

  nombre.classList.toggle("invalido", Boolean(error));

  if (errorNombre) {
    errorNombre.textContent = error;
  }

  return !error;
}

// Validar mientras se escribe
nombre.addEventListener("input", validarNombre);

// Validar al salir del campo
nombre.addEventListener("blur", validarNombre);

/* =====================================
   ENVÍO SIMULADO DEL FORMULARIO
===================================== */

const formulario = document.querySelector("#formulario-contacto");

const modalConfirmacion = document.querySelector("#modal-confirmacion");
const cerrarConfirmacion = document.querySelector("#cerrar-confirmacion");

formulario.addEventListener("submit", (evento) => {
  // Evitar recarga y navegación
  evento.preventDefault();

  // Ejecutar nuestras validaciones
  const nombreValido = validarNombre();
  const mensajeValido = validarMensaje();

  // Verificar también correo y asunto
  const formularioValido = formulario.checkValidity();

  if (!nombreValido || !mensajeValido || !formularioValido) {
    formulario.reportValidity();
    return;
  }

  // Simulación: aquí no se envía ningún correo
  modalConfirmacion.showModal();

  // Limpiar el formulario después de validar
  formulario.reset();

  // Limpiar mensajes de error y estilos
  formulario.querySelectorAll(".invalido").forEach((campo) => {
    campo.classList.remove("invalido");
    campo.setCustomValidity("");
  });

  formulario.querySelectorAll(".mensaje-error").forEach((error) => {
    error.textContent = "";
  });

  // Reiniciar contador
  const contador = document.querySelector("#contador-mensaje");

  if (contador) {
    contador.textContent = "0 / 500 caracteres";
  }
});

// Cerrar modal
cerrarConfirmacion.addEventListener("click", () => {
  modalConfirmacion.close();
});
