import * as postMethods from "../items/get.mjs";
import * as storage from "../handlers/storage/index.mjs";


const listingContainer = document.querySelector(".listings");
const mediaContainer = document.querySelector(".media");
const inputContainer = document.querySelector(".bidInput");
const bidsContainer = document.querySelector(".bidsContainer");
/**
 * Takes an id from the querystring and fetches a single post with the id
 */
export async function displayItemListener() {
    try {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const items = await postMethods.getlisting(id);
        console.log(items.title)
        storage.save("lastBid", items.bids[items.bids.length - 1].amount)
        listingContainer.innerHTML += `<div class="card m-3" style="width: 60rem;">
        <img class="card-img-top" src="${items.media}" alt="Card image cap">
        <div class="card-body">
        <div class="card-body">
          <a href="singleItem.html?id=${items.id}"><button type="button"  class="btn btn-primary"">View Item</button></a>
          <a href="updateItem.html?id=${items.id}" class="card-link"><button type="button" class="btn btn-outline-success">Update</button></a>
          <a href="removeItem.html?id=${items.id}"><button type="button" class="btn btn-outline-danger">Delete</button></a>
        </div>
          <h5 class="card-title">${items.title}</h5>
          <p class="card-text">${items.description}</p>
        </div>
         <h3>Current bid amount is:</h3>
         <p>${items.bids[items.bids.length - 1].amount}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><date>${items.endsAt}</date></li>
          <li class="list-group-item">${items.tags}</li>
          <li class="list-group-item itemID">${items.id}</li>
        </ul>
        </div>`;

        // mediaContainer.innerHTML += `<img class="card-img" src="${items.media}" alt="Card image cap"></img>`;
        const placeholder = parseInt(items.bids[items.bids.length - 1].amount) + 1;
        console.log(placeholder);

        for (let i = 0; i < items.bids.length; i++) {
            bidsContainer.innerHTML += `<li><p>${items.bids[i].bidderName}. placed a bid of ${items.bids[i].amount} credits</p></li>`
        }

        inputContainer.innerHTML = placeholder;



    } catch (error) {
        listingContainer.innerHTML = `<h1 class="text-center">Post not found.</h1><h1 class="text-center">The ID does not exist.</h1>`;

    }

};