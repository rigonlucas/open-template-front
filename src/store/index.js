import Vue from "vue"
import Vuex from "vuex"

import Auth from "@/store/modules/auth" // MUDANÇAS DE ESTADO DO VUE (ciclo reativo do vue)
import persistUserSession from "@/store/plugins/persistUserSession"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
      persistUserSession,
  ],
  modules: {
    Auth,
  },
})
