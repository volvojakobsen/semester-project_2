import { API_AUCTION_URL } from "../API/constants.mjs";
import { authFetch } from "../API/authFetch.mjs";

const listURL = "https://api.noroff.dev/api/v1/auction/listings?sort=created&sortOrder=desc&_seller=true&_bids=true&_active=true"
const action = "/listings";

export async function getListings() {

    const response = await fetch(listURL)

    return await response.json();
};

export async function getlisting(id) {
    if (!id) {
        throw new Error("get requires a listings id");
    }

    const getItemURL = `${API_AUCTION_URL}${action}/${id}?sort=created&sortOrder=desc&_seller=true&_bids=true`;

    const response = await authFetch(getItemURL)


    return await response.json();
};

