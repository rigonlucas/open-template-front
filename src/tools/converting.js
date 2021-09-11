export function convertSecToHour(secs){
    let hours = Math.floor(secs / (60 * 60))

    let divMinutes = secs % (60 * 60)
    let minutes = Math.floor(divMinutes / 60)

    let divisorSeconds = divMinutes % 60
    let seconds = Math.ceil(divisorSeconds)

    if (seconds <= 9)
    {seconds = "0"+seconds}
    if (minutes <= 9)
    {minutes = "0"+minutes}
    if (hours <= 9)
    {hours = "0"+hours}


    let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds,
    }
    let factor = ""
    if (obj.s === 0)
    {factor = "0"}
    return `${obj.h}:${obj.m}:${obj.s}${factor}`
}