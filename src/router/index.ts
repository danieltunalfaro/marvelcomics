
import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import CatalogoView from '../views/CatalogoView.vue'
import CaracteristicasView from '../views/CaracteristicasView.vue'
import MultimediaView from '../views/MultimediaView.vue'
import InfluencersView from '../views/InfluencersView.vue'
import SoporteView from '../views/SoporteView.vue'

const routes = [
  { path: '/', name: 'inicio', component: InicioView},
  { path: '/catalogo', name: 'catalogo', component: CatalogoView},
  { path: '/caracteristicas', name: 'caracteristicas', component: CaracteristicasView},
  { path: '/multimedia', name: 'multimedia', component: MultimediaView},
  { path: '/influencers', name: 'influencers', component: InfluencersView},
  { path: '/soporte', name: 'soporte', component: SoporteView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
