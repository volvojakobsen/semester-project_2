import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "put";
/**
 * sends the user-input from update-post form to API as a put request.
 * @param {string} postData from input fields in form.
 * @returns {Array} json response.
 */
export async function updateItem(item) {
    if (!item.id) {
        throw new Error("Update requires a post id");
    }


    const updateItemURL = `${API_AUCTION_URL}${action}/${item.id}`;

    const response = await authFetch(updateItemURL, {
        method,
        body: JSON.stringify(item)
    })


    return await response.json();
};