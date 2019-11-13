import planMap from '../views/planMap.vue'
import datas from '../components/planMap/datas.vue'
import special from '../components/planMap/special.vue'
export default {
  path: '/planMap',
  name: 'planMap',
  component: planMap,
  children: [
    {
      path: 'datas',
      name: 'datas',
      component: datas
    },
    {
      path: 'special',
      name: 'special',
      component: special
    }
  ]
}