import { authFetch } from "../API/authFetch.mjs";
import { load } from "../handlers/storage/index.mjs";

const userListings = "?_listings=true";
const name = load("name");
const profileURL = "https://api.noroff.dev/api/v1/auction/profiles/" + name + userListings;




export async function getProfile() {

    const response = await authFetch(profileURL)

    return await response.json();
};
