import Vue from 'vue'
import App from './App.vue'

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Font Awesome Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faTwitter, faFacebook, faCss3Alt, faJsSquare, faHtml5, faReact, faNodeJs, faAngular, faLess, faSass, faWordpress, faGulp, faGrunt, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faTrophy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faLinkedin, faGithub, faTwitter, faFacebook, faCss3Alt, faJsSquare, faHtml5, faReact, faNodeJs, faAngular, faLess, faSass, faWordpress, faGulp, faGrunt, faNpm, faTrophy, faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Axios
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000/db'
})

// Main SCSS File
import '@/assets/scss/resume.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
