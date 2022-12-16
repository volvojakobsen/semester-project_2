import { createItem } from "../API/items/create.mjs";


export function setCreateItemFormListener() {
    const form = document.querySelector("#createItem");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const item = Object.fromEntries(formData.entries());
            createItem(item);
            alert("your item has been listed for auction.");
            location.href = `/semester-project_2/index.html`;
        })
    }


}