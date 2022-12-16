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
            let item = { title, description, media, endsAt };
            if (form.media.value.length === 0) {
                delete item.media;
                console.log("deleted");
            }
            console.log(location.pathname);
            createItem(item);
            alert("your item has been listed for auction.");
            if (location.pathname === "/semester-project_2/createItem.html") {
                location.href = `https://volvojakobsen.github.io/semester-project_2/`;
            }
            if (location.pathname === "/createItem.html") {
                location.href = `/index.html`;
            }

        })
    }


}