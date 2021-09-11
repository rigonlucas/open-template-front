import axios from "axios"
import store from "@/store" //NECESSÁRIO PARA CAPTURAR O TOKEN DE AUTENTICAÇÃO

const api = axios.create({
  baseURL: "http://10.103.208.3/api/",
})

/**
 * INTERCEPTOR PARA QUE QUANDO CADA CHAMADA DA API SEJA INCLUÍDO O TOKEN NA REQUEST
 */
api.interceptors.request.use(function (request) {
  request.headers.common["Authorization"] = "Bearer " + store.state.Auth.token

  return request
}, function (error) {
  console.log(error)
  return Promise.reject(error)
})

/**
 *                      UTILIZAÇÃO DO PLUGIN DO VUE
 *
 * Este módulo está contido na main, ou seja, definido como um ITEM GLOBAL
 * Serve para adicionar ao vue a variável $api recebendo a constante (axios criada com a base da URL da requisição)
 *
 * @type {{install: ApiPlugin.install}}
 */
export const ApiPlugin = {
  install: (Vue) => {
    Vue.prototype.$api = api
  },
}

export default api
