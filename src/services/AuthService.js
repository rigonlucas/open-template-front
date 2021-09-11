/**
 *
 * SERVIÇO QUE SEPARA AS FUNÇÕES DE REQUESTS PARA A API
 *
 */
import api from "./api/apiClient"

/**
 * REGISTRA O USUÁRIO ESPERANDO O TOKEN E O ARRAY DO USER
 * @param userData
 * @returns {Promise<AxiosResponse<any>>}
 */
export function register(userData) {
  return api.post("/register", userData)
}

/**
 * REQUISTA O ACESSO ESPERANDO O TOKEN E O ARRAY DO USER
 * @param email
 * @param password
 * @returns {Promise<AxiosResponse<any>>}
 */
export function login(email, password) {
  return api.post("/login", { email, password })
}

/**
 * SOLICITA A REMOÇÃO DO TOKEN DE LOGIN DO USUÁRIO
 * @returns {Promise<AxiosResponse<any>>}
 */
export function logout() {
  return api.post("/logout")
}