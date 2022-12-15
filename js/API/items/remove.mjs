import { API_AUCTION_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "delete";

export async function removeItem(id) {
    if (!id) {
        throw new Error("Delete requires a post id");
    }


    const updateItemURL = `${API_AUCTION_URL}${action}/${id}`;

    const response = await authFetch(updateItemURL, {
        method
    })


    return await response.json();
}