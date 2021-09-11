export function formatNumberLeft(value, pad = -2){
    return ( "0" + value ).substr( pad )
}

export function formatNumberRight(value, pad = -2){
    return ( value + "0" ).substr( pad )
}

export function formatDate(date) {
    if (!date) {return null}

    const [year, month, day] = date.split("-")
    return `${day}/${month}/${year}`
}

export function formatDateTimeToDate(date) {
    if (!date) {return null}

    const [year, month, day] = date.substring(0,10).split("-")
    return `${day}/${month}/${year}`
}

export function parseDate (date) {
    if (!date) {return null}

    const [month, day, year] = date.split("/")
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
}
