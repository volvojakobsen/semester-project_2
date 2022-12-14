import { login } from "../API/auth/login.mjs";


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