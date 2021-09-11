/**
 * CONSTANTES QUE REPRESENTA A CHAVE QUE ARMAZENARÁ OS DADOS DO USER E DO TOKEN
 * @type {string}
 */
const USER_OBJECT_KEY = "Auth-user"
const TOKEN_KEY = "Auth-token"

export default store => {
  const userObject = window.localStorage.getItem(USER_OBJECT_KEY)
  const userToken = window.localStorage.getItem(TOKEN_KEY)

  /**
   *
   * GARANTE QUE A SESSÃO VAI SER RECARREGADA CASO UM F5 SEJA CHAMADO
   *
   */
  if (userObject && userToken) {
    store.commit("Auth/SET_USER", JSON.parse(userObject))
    store.commit("Auth/SET_TOKEN", JSON.parse(userToken))
  }

  store.subscribe((mutation) => {
    if (mutation.type === "Auth/SET_USER") {
      window.localStorage.setItem(USER_OBJECT_KEY, JSON.stringify(mutation.payload))
    }

    if (mutation.type === "Auth/SET_TOKEN") {
      window.localStorage.setItem(TOKEN_KEY, JSON.stringify(mutation.payload))
    }
  })
}

/**
 *                                        DEFINIÇÃO DO ACESSO ÀS ACTIONS DO VUE
 *
 *  O caso do "Auth/SET_USER" e "Auth/SET_TOKEN" possuem uma nomenclatura por causa da modularização contida no "store/index"
 *  Neste caso é necessário colocar a propriedade modules (neste caso: Auth) seguido de uma BARRA ( / ) Então chamando a action SET_
 *
 *  Para que o sistema evolua de uma forma sustentável esta modularização é nessesária
 *
 *
 */