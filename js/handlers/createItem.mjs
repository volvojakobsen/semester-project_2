import { createItem } from "../API/items/create.mjs";


export function setCreateItemFormListener() {
    const form = document.querySelector("#createItem");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const title = formData.get('title');
            const description = formData.get('description');
            const media = formData.get('media').split(', ');
            const endsAt = formData.get('endsAt');
            let item = { title, description, media, endsAt }
            if (item.media === "") {
                delete item.media
            }
            createItem(item);
            alert("your item has been listed for auction.");
            location.href = `/semester-project_2/index.html`;
        })
    }


}