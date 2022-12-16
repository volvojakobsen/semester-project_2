import * as postMethods from "../items/get.mjs";
import * as storage from "../handlers/storage/index.mjs";


const listingContainer = document.querySelector(".listings");
const mediaContainer = document.querySelector(".media");
const inputContainer = document.querySelector(".bidInput");
const bidsContainer = document.querySelector(".bidsContainer");

export async function displayItemListener() {
  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const items = await postMethods.getlisting(id);
    console.log(items.title)


    if (items.bids.length === 0) {
      storage.save("lastBid", 0);
      if (items.media.length >= 2) {
        for (let i = 0; i < items.media.length; i++) {
          mediaContainer.innerHTML += `<img class="imageArray m-4 img-fluid" src="${items.media[i]}" alt="Card image cap">`;
        }
      }
      else {
        for (let i = 0; i < items.media.length; i++) {
          mediaContainer.innerHTML += `<img class="imageArray m-4 img-fluid" src="${items.media}" alt="Card image cap">`;
        }
      }
      listingContainer.innerHTML += `<div class="card m-1 primary">
      <div class="card-body text-center">
        <h1 class="card-title m-3">${items.title}</h1>
        <p class="card-text m-3">${items.description}</p>
      </div>
      <div class="text-center">
      <h3>Current bid is:</h3>
       <p>0 credits</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center"><div class="alert alert-danger"><h2>Ends at:</h2><date class="date">${items.endsAt}</date></div></li>
        <li class="list-group-item primary text-center"><h2>last updated:</h2><date>${items.updated}</date></li>
        <li class="list-group-item primary text-center"><h2>Created at:</h2><date>${items.created}</date></li>
        <li class="list-group-item primary text-center"><h3>Tags</h3><p>${items.tags}</p></li>
        <li class="list-group-item primary text-center itemID"><h4>seller</h4><p>${items.seller.name}</p></li>
      </ul>
      </div>
      </div>`;
    }
    else {
      if (items.media.length >= 2) {
        for (let i = 0; i < items.media.length; i++) {
          mediaContainer.innerHTML += `<img class="imageArray m-4 img-fluid" src="${items.media[i]}" alt="Card image cap">`;
        }
      }
      else {
        for (let i = 0; i < items.media.length; i++) {
          mediaContainer.innerHTML += `<img class="imageArray m-4 img-fluid" src="${items.media}" alt="Card image cap">`;
        }
      }

      storage.save("lastBid", items.bids[items.bids.length - 1].amount);

      listingContainer.innerHTML += `<div class="card m-1 primary card-singel">
        <div class="card-body text-center">
          <h1 class="card-title m-3">${items.title}</h1>
          <p class="card-text m-3">${items.description}</p>
        </div>
        <div class="text-center">
        <h3>Current bid is:</h3>
         <p>${items.bids[0].amount} credits</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center"><div class="alert alert-danger"><h2>Ends at:</h2><date class="date">${items.endsAt}</date></div></li>
          <li class="list-group-item primary text-center"><h2>last updated:</h2><date>${items.updated}</date></li>
          <li class="list-group-item primary text-center"><h2>Created at:</h2><date>${items.created}</date></li>
          <li class="list-group-item primary text-center"><h3>Tags</h3><p>${items.tags}</p></li>
          <li class="list-group-item primary text-center itemID"><h4>seller</h4><p>${items.seller.name}</p></li>
        </ul>
        </div>
        </div>`;

      const placeholder = parseInt(items.bids[items.bids.length - 1].amount) + 1;



      for (let i = 0; i < items.bids.length; i++) {
        bidsContainer.innerHTML += `<li><p>${items.bids[i].bidderName}. placed a bid of ${items.bids[i].amount} credits</p></li>`
      }

      inputContainer.innerHTML = placeholder;
    }

    // mediaContainer.innerHTML += `<img class="card-img" src="${items.media}" alt="Card image cap"></img>`;



  } catch (error) {
    listingContainer.innerHTML = `<h1 class="text-center">Post not found.</h1><h1 class="text-center">The ID does not exist.</h1>`;

  }

};