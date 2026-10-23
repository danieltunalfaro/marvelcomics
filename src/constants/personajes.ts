import type { Personaje } from '../components/PersonajeCard.vue'

import spiderman from '../assets/spiderman.jpg'
import venom from '../assets/venom.jpg'
import hulk from '../assets/hulk.jpg'
import thor from '../assets/thor.jpg'
import doom from '../assets/doom.jpg'
import thanos from '../assets/thanos.jpg'

export const personajes: Personaje[] = [
  {
    id: 1,
    nombre: 'Spider-Man',
    alterEgo: 'Peter Parker',
    categoria: 'Héroe',
    universo: 'Tierra-616',
    poderes: 'Fuerza, agilidad, sentido arácnido',
    primeraAparicion: 'Amazing Fantasy #15 (1962)',
    afiliacion: 'Avengers',
    debilidad: 'Agotamiento y vulnerabilidad física',
    descripcion: 'Un joven héroe de Nueva York que utiliza sus poderes para proteger a otras personas.',
    imagen: spiderman
  },
  {
    id: 2,
    nombre: 'Venom',
    alterEgo: 'Eddie Brock',
    categoria: 'Villano',
    universo: 'Tierra-616',
    poderes: 'Fuerza, agilidad y telarañas',
    primeraAparicion: 'The Amazing Spider-Man #300 (1988)',
    afiliacion: 'Ninguna',
    debilidad: 'Sonido y fuego',
    descripcion: 'Un simbionte alienígena que se une a Eddie Brock, convirtiéndolo en un formidable enemigo de Spider-Man.',
    imagen: venom
  },
  {
    id: 3,
    nombre: 'Hulk',
    alterEgo: 'Bruce Banner',
    categoria: 'Héroe',
    universo: 'Tierra-616',
    poderes: 'Fuerza, resistencia y regeneración',
    primeraAparicion: 'The Incredible Hulk #1 (1962)',
    afiliacion: 'Avengers',
    debilidad: 'Control emocional',
    descripcion: 'Bruce Banner se transforma en Hulk, una de las entidades físicamente más poderosas de Marvel.',
    imagen: hulk
  },
  {
    id: 4,
    nombre: 'Thor',
    alterEgo: 'Thor Odinson',
    categoria: 'Héroe',
    universo: 'Tierra-616',
    poderes: 'Fuerza, longevidad y control del rayo',
    primeraAparicion: 'Journey into Mystery #83 (1962)',
    afiliacion: 'Avengers',
    debilidad: 'Conflictos emocionales y límites mágicos',
    descripcion: 'Dios asgardiano del trueno y uno de los principales defensores de la Tierra.',
    imagen: thor
  },
  {
    id: 5,
    nombre: 'Dr. Doom',
    alterEgo: 'Victor von Doom',
    categoria: 'Villano',
    universo: 'Tierra-616',
    poderes: 'Inteligencia, tecnología y poderes mágicos',
    primeraAparicion: 'Fantastic Four #53 (1964)',
    afiliacion: 'Ninguna',
    debilidad: 'Arrogancia y dependencia de sus máquinas',
    descripcion: 'Un genio científico y hechicero que gobierna Latveria y es uno de los enemigos más formidables de los héroes de Marvel.',
    imagen: doom
  },
  {
    id: 6,
    nombre: 'Thanos',
    alterEgo: 'Thanos',
    categoria: 'Villano',
    universo: 'Tierra-616',
    poderes: 'Fuerza, resistencia y manipulación de energía',
    primeraAparicion: 'Iron Man Vol. 1 #55',
    afiliacion: 'Ninguna',
    debilidad: 'Obsesión por la muerte y la búsqueda de las Gemas del Infinito',
    descripcion: 'Un titán loco obsesionado con el equilibrio del universo, conocido por su búsqueda de las Gemas del Infinito.',
    imagen: thanos
  }
]
