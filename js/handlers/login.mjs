import { login } from "../api/auth/login.mjs";

/**
 * listens to the login form and passes values on submit to login function.
 */
export function setLoginFormListener() {
    const form = document.querySelector("#login_form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            login(profile);
        })
    }


}