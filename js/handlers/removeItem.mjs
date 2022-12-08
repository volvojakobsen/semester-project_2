import { getlisting } from "../items/get.mjs";
import { removeItem } from "../API/items/remove.mjs";

/**
 * listens for submit on delete post form. then passes values to delete function, and redirects user.
 */
export async function setDeleteItemListener() {
    const form = document.querySelector("#deleteItem");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const item = await getlisting(id);

        let params = (new URL(document.location)).searchParams;
        let name = params.get("id");
        let cleanID = name.replaceAll("'", "");


        form.id.value = cleanID;


        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const item = Object.fromEntries(formData.entries());
            item.id = id;
            removeItem(cleanID);
            alert("the item has been deleted");
            location.href = `/`;
        })
    }


}