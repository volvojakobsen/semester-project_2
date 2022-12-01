import * as storage from "../handlers/storage/index.mjs";

const loginButton = document.querySelector("#nav_login");

export function isUserLoggedIn() {
    if (storage.load("token")) {
        loginButton.innerHTML = "LOGOUT";
    }
}