import * as storage from "../handlers/storage/index.mjs";
import { getProfile } from "../profile/profile.mjs";

const loginButton = document.querySelector("#nav_login");
const profileButton = document.querySelector("#nav_profile");
const creditsHolder = document.querySelector(".creditsHolder");

export async function isUserLoggedIn() {
    if (storage.load("token")) {
        const profile = await getProfile();
        storage.save("credits", profile.credits);
        loginButton.innerHTML = "LOGOUT";
        profileButton.innerHTML = storage.load("name");
        creditsHolder.innerHTML = storage.load("credits");
        loginButton.addEventListener("click", (e) => {
            localStorage.clear();
        });
    }
}