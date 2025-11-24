import { verificarRecordatorio, subirFoto } from "../src/Ejemplos base/Services/seguimientoService.js";

// Constantes para evitar "strings mágicos" y errores de tipeo
const STORAGE_KEY_PUBLICACION = 'ultimaPublicacion';

// Exponer función para Cypress si es necesario, pero fuera del flujo principal
if (window.Cypress) {
    window.subirFoto = subirFoto;
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarSeguimiento();
});

function inicializarSeguimiento() {
    // Referencias al DOM
    const els = {
        inputFoto: document.getElementById('input-foto'),
        btnSubir: document.getElementById('btn-subir'),
        contenedor: document.getElementById('contenedor-fotos'),
        inputDescripcion: document.getElementById('input-descripcion'),
        recordatorio: document.getElementById('recordatorio')
    };

    // Verificar recordatorio al cargar
    verificarRecordatorio();

    // Evento Subir
    els.btnSubir.addEventListener('click', async () => {
        await manejarSubidaFoto(els);
    });
}

/**
 * Orquesta la lógica de subir la foto, actualizar UI y guardar datos
 */
async function manejarSubidaFoto(els) {
    const archivo = els.inputFoto.files[0];
    const descripcion = els.inputDescripcion.value.trim();

    // 1. Validación
    if (!archivo || !descripcion) {
        alert('Por favor, añade una foto y una descripción.');
        return;
    }

    // Bloqueamos botón para evitar doble clic
    els.btnSubir.disabled = true;
    els.btnSubir.textContent = 'Subiendo...';

    try {
        // 2. Lógica de servicio (Soporte para Cypress integrado limpiamente)
        // Si window.subirFoto existe (tests), úsalo; si no, usa el import normal.
        const servicioSubir = (window.Cypress && window.subirFoto) ? window.subirFoto : subirFoto;
        
        const imagen = await servicioSubir(archivo);

        // 3. Actualizar UI
        const nuevoItem = crearElementoItem(imagen.url, descripcion);
        els.contenedor.appendChild(nuevoItem);
        
        if (els.recordatorio) {
            els.recordatorio.style.display = 'none';
        }

        // 4. Actualizar Datos Locales
        localStorage.setItem(STORAGE_KEY_PUBLICACION, new Date().toISOString());

        // 5. Limpiar formulario
        els.inputFoto.value = '';
        els.inputDescripcion.value = '';

    } catch (error) {
        console.error(error);
        alert('Hubo un error al subir la foto. Inténtalo de nuevo.');
    } finally {
        // Restauramos el botón pase lo que pase
        els.btnSubir.disabled = false;
        els.btnSubir.textContent = 'Subir Foto';
    }
}

/**
 * Crea el HTML de la tarjeta de seguimiento
 * (Idealmente, mover los estilos inline a un archivo CSS)
 */
function crearElementoItem(urlImagen, textoDescripcion) {
    const itemDiv = document.createElement('div');
    
    // Asignamos una clase CSS en lugar de muchos estilos inline
    itemDiv.className = 'seguimiento-item'; 
    itemDiv.setAttribute('data-cy', 'seguimiento-item');

    // Si no tienes CSS externo aún, mantenemos estos estilos básicos aquí,
    // pero organizados en un objeto para limpieza.
    Object.assign(itemDiv.style, {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '8px', // Un toque estético extra
        backgroundColor: '#f9f9f9'
    });

    itemDiv.innerHTML = `
        <img src="${urlImagen}" alt="Foto subida" style="width: 200px; display: block; margin-bottom: 10px;">
        <p style="margin: 0;">${escaparHtml(textoDescripcion)}</p>
    `;

    return itemDiv;
}

// Función de seguridad para evitar inyección de código en la descripción
function escaparHtml(text) {
    if (!text) return text;
    return text.replace(/[&<>"']/g, m => ({ 
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' 
    }[m]));
}