import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

import { load } from "../../handlers/storage/index.mjs";

const action = "/listings";
const method = "post";
const token = load("token");
/**
 * sends the users input to the post API and fetching the result.
 * @param {string} postData from input fields in form.
 * @returns {Array} json response.
 */
export async function createItem(itemData) {
    const createItemURL = API_AUCTION_URL + action;

    const response = await authFetch(createItemURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`
        },
        method,
        body: JSON.stringify(itemData)
    })


    return await response.json();
}