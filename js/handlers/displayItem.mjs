import * as postMethods from "../items/get.mjs";


const listingContainer = document.querySelector(".listings");
/**
 * Takes an id from the querystring and fetches a single post with the id
 */
export async function displayItemListener() {
    try {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        const items = await postMethods.getlisting(id);
        console.log(items.title)
        listingContainer.innerHTML = `<div class="card m-3" style="width: 30rem;">
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
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><date>${items.endsAt}</date></li>
          <li class="list-group-item">${items.tags}</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div><form id="bidForm"><input name="bid" type="number"></input><input name="id" type="text" readonly placeholder=${items.id}></input><button type="submit">Bid</button></form></div>
        </div>`;


    } catch (error) {
        listingContainer.innerHTML = `<h1 class="text-center">Post not found.</h1><h1 class="text-center">The ID does not exist.</h1>`;

    }

};