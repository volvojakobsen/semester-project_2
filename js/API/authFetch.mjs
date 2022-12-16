import { load } from "../handlers/storage/index.mjs"

export function headers() {
    const token = load("token");

    return {
        "Content-Type": "application/json",
        "Authorization": `bearer ${token}`
    }
}

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
}