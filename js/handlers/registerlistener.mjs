import { register } from "../api/auth/register.mjs";

/**
 * listens for submit event on register form. then passes values to register function.
 */
export function setRegisterFormListener() {
    const form = document.querySelector("#register_form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            register(profile);
        })
    }


}