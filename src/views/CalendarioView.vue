<script setup lang="ts">
import { ref } from 'vue'

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/vue3/daygrid'
import timeGridPlugin from '@fullcalendar/vue3/timegrid'
import interactionPlugin from '@fullcalendar/vue3/interaction'
import listPlugin from '@fullcalendar/vue3/list'

import themePlugin from '@fullcalendar/vue3/themes/classic'

import '@fullcalendar/vue3/skeleton.css'
import '@fullcalendar/vue3/themes/classic/theme.css'
import '@fullcalendar/vue3/themes/classic/palette.css'

import { estrenos } from '../constants/estrenos'

const eventoSeleccionado = ref<{
  titulo: string
  editorial: string
  autor: string
  fecha: string
  imagen: string
  precio: number
  color: string
} | null>(null)

// Eventos del calendario

const obtenerColor = (editorial: string) => {
    const nombre = editorial.trim().toLowerCase()

    if (nombre.includes('marvel')) {
        return '#e62429'
    }

    if (nombre.includes('dc')) {
        return '#0476f2'
    }

    if (nombre.includes('image')) {
        return '#f59e0b'
    }

    return '#71717a'
}

const eventos = estrenos.map((estreno, index) => {
    const color = obtenerColor(estreno.editorial)

    return {
        id: String(index + 1),
        title: estreno.titulo,
        start: estreno.fechaestreno,

        backgroundColor: color,
        borderColor: color,
        textColor: '#ffffff',

        extendedProps: {
            autor: estreno.autor,
            editorial: estreno.editorial,
            imagen: estreno.imagen,
            precio: estreno.precio,
            color: color
        }
    }
})


function seleccionarEvento(info: any) {
  const evento = info.event
  const datos = evento.extendedProps

  const fecha = new Date(`${evento.startStr}T00:00:00`)

  eventoSeleccionado.value = {
    titulo: evento.title,
    editorial: datos.editorial,
    autor: datos.autor,
    fecha: fecha.toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    imagen: datos.imagen,
    precio: datos.precio,
    color: datos.color
  }
}

const opcionesCalendario = {
  plugins: [
    themePlugin,
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    listPlugin
  ],

  initialView: 'dayGridMonth',
  locale: 'es',
  firstDay: 1,

  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  },

  buttonText: {
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    list: 'Lista'
  },

  events: eventos,

  height: 'auto',
  contentHeight: 650,
  dayMaxEvents: true,
  fixedWeekCount: false,

  eventClick: seleccionarEvento,

    eventDidMount(info) {
    const color = info.event.extendedProps.color

    info.el.style.setProperty('background-color', color, 'important')
    info.el.style.setProperty('border-color', color, 'important')
    info.el.style.setProperty('color', '#ffffff', 'important')

    const contenido = info.el.querySelector('.fc-event-main') as HTMLElement | null

    if (contenido) {
        contenido.style.setProperty('color', '#ffffff', 'important')
        contenido.style.setProperty('background-color', color, 'important')
    }
    }
}
</script>

<template>
  <div class="calendario">

    <!-- Encabezado -->
    <div class="encabezado">
      <div class="etiqueta">
        <span class="punto"></span>
        UNIVERSO DE LOS CÓMICS
      </div>

      <h1>Calendario de <span>lanzamientos</span></h1>

      <p>
        Mantente al día con las próximas publicaciones
        y novedades de tus editoriales favoritas.
      </p>
    </div>

    <!-- Leyenda -->
    <div class="leyenda">

      <div class="leyenda-item">
        <span class="color-editorial marvel"></span>
        Marvel Comics
      </div>

      <div class="leyenda-item">
        <span class="color-editorial dc"></span>
        DC Comics
      </div>

      <div class="leyenda-item">
        <span class="color-editorial image"></span>
        Image Comics
      </div>

    </div>

    <!-- Calendario -->
    <div class="contenedor-calendario">

      <div class="titulo-calendario">
        <div>
          <h2>Próximos eventos</h2>
          <p>Explora las fechas importantes del mundo del cómic.</p>
        </div>

        <span class="icono-calendario">📅</span>
      </div>

      <FullCalendar :options="opcionesCalendario" />

    </div>

    <!-- Modal de información -->
    <div
      v-if="eventoSeleccionado"
      class="fondo-modal"
      @click.self="eventoSeleccionado = null"
    >
      
        <div class="modal">

            <div
                class="barra-modal"
                :style="{ backgroundColor: eventoSeleccionado.color }"
            ></div>

            <button
                class="cerrar-modal"
                @click="eventoSeleccionado = null"
            >
                ✕
            </button>

            <span class="modal-etiqueta">
                {{ eventoSeleccionado.editorial }}
            </span>

            <h2>{{ eventoSeleccionado.titulo }}</h2>

            <div class="portada-estreno" v-if="eventoSeleccionado.imagen">
                <img
                :src="eventoSeleccionado.imagen"
                :alt="eventoSeleccionado.titulo"
                />
            </div>

            <div class="informacion-evento">

                <div class="dato-evento">
                <span>✍️</span>
                <div>
                    <small>Autor</small>
                    <p>{{ eventoSeleccionado.autor }}</p>
                </div>
                </div>

                <div class="dato-evento">
                <span>📅</span>
                <div>
                    <small>Fecha de estreno</small>
                    <p>{{ eventoSeleccionado.fecha }}</p>
                </div>
                </div>

                <div class="dato-evento">
                <span>📚</span>
                <div>
                    <small>Editorial</small>
                    <p>{{ eventoSeleccionado.editorial }}</p>
                </div>
                </div>

                <div class="dato-evento">
                <span>💰</span>
                <div>
                    <small>Precio</small>
                    <p>
                    {{ eventoSeleccionado.precio.toLocaleString('es-MX', {
                        style: 'currency',
                        currency: 'MXN'
                    }) }}
                    </p>
                </div>
            </div>

        </div>

        <button
            class="boton-cerrar"
            @click="eventoSeleccionado = null"
        >
            Entendido
        </button>

        </div>

    </div>

  </div>
</template>

<style scoped>
.calendario {
  min-height: 100vh;
  padding: 55px 6%;
  background: black;
  color: white;
}

/* Encabezado */

.encabezado {
  max-width: 1200px;
  margin: 0 auto 35px;
}

.etiqueta {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #a1a1aa;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.punto {
  width: 8px;
  height: 8px;
  background: #e62429;
  border-radius: 50%;
}

.encabezado h1 {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  margin-bottom: 12px;
}

.encabezado h1 span {
  color: #e62429;
}

.encabezado p {
  color: #a1a1aa;
  font-size: 15px;
  line-height: 1.7;
}

/* Leyenda */

.leyenda {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto 20px;
}

.leyenda-item {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #d4d4d8;
  font-size: 13px;
}

.color-editorial {
  width: 11px;
  height: 11px;
  border-radius: 3px;
}

.marvel {
  background: #e62429;
}

.dc {
  background: #0476f2;
}

.image {
  background: #f59e0b;
}

/* Contenedor */

.contenedor-calendario {
  max-width: 1200px;
  margin: auto;
  padding: 30px;
  background: white;
  color: #27272a;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.titulo-calendario {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.titulo-calendario h2 {
  font-size: 21px;
  font-weight: 800;
  color: #18181b;
  margin-bottom: 5px;
}

.titulo-calendario p {
  color: #71717a;
  font-size: 13px;
}

.icono-calendario {
  font-size: 27px;
}

/* Personalización FullCalendar */

.contenedor-calendario :deep(.fc) {
  font-family: Arial, sans-serif;
}

.contenedor-calendario :deep(.fc-toolbar-title) {
  font-size: 21px;
  font-weight: 800;
  text-transform: capitalize;
}

.contenedor-calendario :deep(.fc-button) {
  border-radius: 7px;
  font-weight: 600;
  text-transform: capitalize;
}

.contenedor-calendario :deep(.fc-button-primary) {
  background: #e62429;
  border-color: #e62429;
}

.contenedor-calendario :deep(.fc-button-primary:hover) {
  background: #bd171c;
  border-color: #bd171c;
}

.contenedor-calendario :deep(.fc-button-primary:disabled) {
  background: #9f2024;
  border-color: #9f2024;
}

.contenedor-calendario :deep(.fc-daygrid-day-number) {
  color: #27272a;
  text-decoration: none;
  padding: 8px;
}

.contenedor-calendario :deep(.fc-col-header-cell-cushion) {
  color: #52525b;
  text-decoration: none;
  font-weight: bold;
}

.contenedor-calendario :deep(.fc-event) {
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;
  font-size: 11px;
}

.contenedor-calendario :deep(.fc-day-today) {
  background: #fff1f2 !important;
}

/* Modal */

.fondo-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);
}

.modal {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 480px;
  padding: 35px;
  background: #18181b;
  border: 1px solid #3f3f46;
  border-radius: 15px;
  color: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.barra-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

.cerrar-modal {
  position: absolute;
  top: 18px;
  right: 18px;
  background: transparent;
  color: #a1a1aa;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-etiqueta {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 15px;
  background: #27272a;
  border-radius: 20px;
  color: #f87171;
  font-size: 12px;
  font-weight: bold;
}

.modal h2 {
  font-size: 24px;
  margin-bottom: 25px;
}

.informacion-evento {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.dato-evento {
  display: flex;
  align-items: center;
  gap: 15px;
}

.dato-evento > span {
  font-size: 22px;
}

.dato-evento small {
  color: #a1a1aa;
}

.dato-evento p {
  margin-top: 4px;
  font-weight: bold;
}

.descripcion-evento {
  margin-top: 25px;
  padding: 18px;
  background: #27272a;
  border-radius: 10px;
}

.descripcion-evento h3 {
  font-size: 14px;
  margin-bottom: 10px;
}

.descripcion-evento p {
  color: #d4d4d8;
  font-size: 13px;
  line-height: 1.6;
}

.boton-cerrar {
  width: 100%;
  padding: 12px;
  margin-top: 25px;
  background: #e62429;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.boton-cerrar:hover {
  background: #bd171c;
}

.portada-estreno {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.portada-estreno img {
  max-width: 190px;
  max-height: 260px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

/* Colores de los eventos según su editorial */

.contenedor-calendario :deep(.fc-event) {
    cursor: pointer;
    padding: 4px;
    border-radius: 5px;
    font-size: 11px;
    color: white !important;
}

.contenedor-calendario :deep(.fc-event-main) {
    color: white !important;
}



/* Responsive */

@media (max-width: 700px) {
  .calendario {
    padding: 35px 4%;
  }

  .contenedor-calendario {
    padding: 15px;
  }

  .leyenda {
    gap: 13px;
  }

  .contenedor-calendario :deep(.fc-toolbar) {
    flex-direction: column;
    gap: 12px;
  }

  .contenedor-calendario :deep(.fc-toolbar-title) {
    font-size: 17px;
  }

  .modal {
    padding: 28px 22px;
  }
}
</style>
