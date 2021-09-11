import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"
import { getInheritanceMetaAttribute, matchUserPermissions } from "@/router/tools/permissions"

/**
 *
 * IMPORTS DOS MÓDULOS DE ROTAS
 *
 * **/
import Auth from "./modules/auth"
import HomeGeneric from "./modules/home/home"

Vue.use(VueRouter)

/**
 *
 * LISTA DE ROTAS POR MEIO DE MÓDILOS
 *
 * Recebe arrays e faz um spread  na letante routes
 * **/
let routes = [
  ...Auth,
  ...HomeGeneric,
]


/**
 *
 * EXPORT DAS ROTAS DO VUE-ROUTER
 *
 * **/
let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0 })
  },
})


/**
 *
 * ANTES DE ENTRAR NAS ROTAS SERÁ VALIDADO O ACESSO
 *
 * @param {String} routeTo
 * @param {String} routeFrom
 * @param {Vue} next
 */
router.beforeEach((routeTo, routeFrom, next) => {
  let isAuthenticated = store.getters["Auth/isAuthenticated"]
  let permissions = store.getters["Auth/permissions"]
  let isProtectedRoute = getInheritanceMetaAttribute("isProtected", routeTo.matched)
  let isOnlyGuestRoute = getInheritanceMetaAttribute("onlyGuest", routeTo.matched)

  if (isOnlyGuestRoute && isAuthenticated) {
    return next(routeFrom) //volta para a rota anterior
  }

  if (!isProtectedRoute) {
    return next() // permite passar para uma rota caso ela não seja protegida. Ex: Login
  }

  if (isAuthenticated) {
    // validações de permissões do usuário
    if (routeTo.meta.permissions){
      let routePerm = getInheritanceMetaAttribute("permissions", routeTo.matched)
      let matchPerms = matchUserPermissions(routePerm, permissions)
      if (!matchPerms){
        return next(routeFrom) //volta para a rota anterior caso o usuário não tenha permissão
      }
    }

    return next() // permite passar para uma rota caso estiver autenticado
  }

  return next({ name: "login" }) // se nada acima for true, solicita o login
})


export default router
