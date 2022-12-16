import { load } from "../handlers/storage/index.mjs";
import { API_AUCTION_URL } from "../API/constants.mjs";
import { authFetch } from "../API/authFetch.mjs";

const form = document.querySelector("#updateProfileForm");
const name = load("name");
const action = "/profiles/" + name + "/media";
const method = "PUT";
const token = load("token");

export function updateAvatarFormListener() {

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const imageArray = Object.fromEntries(formData.entries());
            updateAvater(imageArray);
            alert("your avatar has been updated");
            location.reload();
        })
    }


}


async function updateAvater(imageArray) {
    const createItemURL = API_AUCTION_URL + action;

    const response = await authFetch(createItemURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`
        },
        method,
        body: JSON.stringify(imageArray)
    })


    return await response.json();
}

