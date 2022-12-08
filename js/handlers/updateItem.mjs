import { updateItem } from "../API/items/update.mjs";
import { getlisting, getListings } from "../items/get.mjs";

/**
 * listens for submit event on update post form. then passes input values to update-post function and redirects user.
 */
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
            const item = Object.fromEntries(formData.entries());
            item.id = id;
            updateItem(item);
            alert("your post has been updated.");
            location.href = `/`
        })
    }


}