import {getUnixTime} from "date-fns"

export function betweenTime(valueStart, valueEnd, value){
    return value > valueStart && value <= valueEnd
}

export function isBeforeToday(date){
    if (getUnixTime(new Date(date)) > getUnixTime(new Date())){
        return true
    }
    return false
}

export function isAfterToday(date){
    if (getUnixTime(new Date(date)) < getUnixTime(new Date())){
        return true
    }
}