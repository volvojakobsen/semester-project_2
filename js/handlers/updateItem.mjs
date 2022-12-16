import { updateItem } from "../API/items/update.mjs";
import { getlisting } from "../items/get.mjs";


export async function setUpdateItemListener() {
    const form = document.querySelector("#updateItem");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const item = await getlisting(id);

        form.title.value = item.title;
        form.description.value = item.description;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const title = formData.get('title');
            const description = formData.get('description');
            const media = formData.get('media').split(', ');
            const item = { title, description, media }
            if (form.media.value.length === 0) {
                delete item.media;
            }
            item.id = id;
            updateItem(item);
            alert("your post has been updated.");
            if (location.pathname === "/semester-project_2/updateItem.html") {
                location.href = `https://volvojakobsen.github.io/semester-project_2/`;
            }
            if (location.pathname === "/updateItem.html") {
                location.href = `/index.html`;
            }

        })
    }


}