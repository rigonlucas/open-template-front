export function removeIndexArrayObjectById(ob, id) {
    return ob.splice(ob.findIndex(item => item.id === id), 1)
}