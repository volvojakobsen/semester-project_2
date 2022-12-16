import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../handlers/storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_AUCTION_URL + action;

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json();
    storage.save("token", result.accessToken);
    storage.save("name", result.name);
    storage.save("email", result.email);
    storage.save("credits", result.credits);
    storage.save("avatar", result.avatar);
    location.href = `./`;
}