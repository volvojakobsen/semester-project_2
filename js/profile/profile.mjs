import { authFetch } from "../API/authFetch.mjs";
import { load } from "../handlers/storage/index.mjs";

const userListings = "?_listings=true";
const name = load("name");
const profileURL = "https://api.noroff.dev/api/v1/auction/profiles/" + name + userListings;




export async function getProfile() {

    const response = await authFetch(profileURL)

    return await response.json();
};
/*
export async function getProfile(id) {
    if (!id) {
        throw new Error("get requires a listings id");
    }

    const getItemURL = `${API_AUCTION_URL}${action}/${id}?sort=created&sortOrder=desc&_seller=true&_bids=true`;

    const response = await authFetch(getItemURL)


    return await response.json();
};

*/

