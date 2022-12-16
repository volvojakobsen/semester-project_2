import { load } from "./storage/index.mjs";
import { API_AUCTION_URL } from "../API/constants.mjs";
import { authFetch } from "../API/authFetch.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");
const date = document.querySelector(".date");
const action = "/listings/" + id + "/bids";
const method = "POST";
const token = load("token");


const form = document.querySelector("#bidForm");

export function bidOnItemFormListener() {

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const amount = parseInt(form.amount.value);
            console.log(id);
            const item = {
                "amount": amount
            }


            if (load("credits") >= amount && amount > load("lastBid")) {
                bid(item);
                alert(`your bid of ${amount} credits was placed.`);
            }
            else {
                alert(`your bid must be higher than the latest bid, you also cannot place a bid that is higher than your credit amount. you must also be sure that the timer has not ended`)
            }
            location.reload();
        })
    }


}

async function bid(item) {
    const createItemURL = API_AUCTION_URL + action;

    const response = await authFetch(createItemURL, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`
        },
        method,
        body: JSON.stringify(item)
    })


    return await response.json();
}

