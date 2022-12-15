import * as storage from "../handlers/storage/index.mjs";

const loginButton = document.querySelector("#nav_login");
const profileButton = document.querySelector("#nav_profile");
const creditsHolder = document.querySelector(".creditsHolder");

export function isUserLoggedIn() {
    if (storage.load("token")) {
        loginButton.innerHTML = "LOGOUT";
        profileButton.innerHTML = storage.load("name");
        creditsHolder.innerHTML = storage.load("credits");
        loginButton.addEventListener("click", (e) => {
            localStorage.clear();
        });
    }
}