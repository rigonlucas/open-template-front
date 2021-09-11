import api from "@/services/api/apiClient"

export function avaliar(payload) {
    return api.post("/candidato/rate", payload)
}

export function checkRateUser() {
    return api.get("/candidato/rate/check")
}