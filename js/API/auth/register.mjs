import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../handlers/storage/index.mjs"

const action = "/auth/register";
const method = "post";
/**
 * sends register info to API. then waiting for response.
 * @param {string} profile from input-fields in form.
 * @returns {Array} the jason response as "result"
 */
export async function register(profile) {
    const registerURL = API_AUCTION_URL + action;

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json();
    location.href = `login.html`;
    return result;
}