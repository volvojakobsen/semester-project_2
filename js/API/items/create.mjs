import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

import { load } from "../../handlers/storage/index.mjs";

const action = "/listings";
const method = "POST";
const token = load("token");
export const bid = "/";
/**
 * sends the users input to the post API and fetching the result.
 * @param {string} postData from input fields in form.
 * @returns {Array} json response.
 */
export async function createItem(item) {
    const createItemURL = API_AUCTION_URL + action + bid;

    const response = await authFetch(createItemURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`
        },
        method,
        body: JSON.stringify(item)
    })


    return await response.json();
}