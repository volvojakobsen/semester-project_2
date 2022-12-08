import { createItem } from "../API/items/create.mjs";

/**
 * passes user input values from post form to a fetch function, and redirects user to posts page.
 */
export function setCreateItemFormListener() {
    const form = document.querySelector("#createItem");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const item = Object.fromEntries(formData.entries());
            console.log(item)
            createItem(item);
            alert("your item has been listed for auction.");
            location.href = `/`;
        })
    }


}