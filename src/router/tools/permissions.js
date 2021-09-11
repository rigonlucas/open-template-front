
/**
 *
 * FAZ O REDUCE PARAs VERIFICAR SE O ATRIBUTO EXISTE NO ARRAY DAS ROTAS
 *
 * @param {String} attribute
 * @param {Array} routes
 */
export function getInheritanceMetaAttribute(attribute, routes) {
    return routes.reduce((acc, route) => {
        if (attribute in route.meta) {
            return route.meta[attribute]
        }

        return acc
    }, false)
}


/**
 *
 * COMPARA SE O USUARIOS CONTÉM ALGUMA DAS PERMISSÕES
 *
 * @param {String} routePerm [RECEBER ESTE PARÂMETRO UTILIZANDO O REDUCE PARA PEGAR A HERANÇA DE PERMISSÃO DO PAI]
 * @param {Array} userPerm
 */
export function matchUserPermissions(routePerm, userPerm){
    return userPerm.find(value => {
        let compare = value.permission.localeCompare(routePerm)
        if (compare === 0) { // caso a comparação das permissões batam
            return true
        }
    })
    // return routePerm.filter(val => {
    //   userPerm.includes(val)
    // })
}
