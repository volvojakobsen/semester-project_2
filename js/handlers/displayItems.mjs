import * as fetchItems from "../items/index.mjs";
import { load } from "./storage/index.mjs"

let limit = 21;

export async function displayItems() {
  try {
    let items = await fetchItems.getListings();
    const listingsContainer = document.querySelector(".listings");

    for (let i = 0; i < items.length; i++) {
      if (i === limit) {
        break;
      }
      if (items[i].seller.name === load("name")) {
        listingsContainer.innerHTML += `<div class="card m-3" style="width: 30rem;">
            <img class="card-img-top" src="${items[i].media[0]}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${items[i].title}</h5>
              <p class="card-text">${items[i].description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><date>${items[i].endsAt}</date></li>
              <li class="list-group-item">${items[i].tags}</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="updateItem.html?id=${items[i].id}" class="card-link"><button type="button" class="btn btn-outline-success">Update</button></a>
              <a href="removeItem.html?id=${items[i].id}"><button type="button" class="btn btn-outline-danger">Delete</button></a>
            </div>
          </div>`
      }
      else {
        listingsContainer.innerHTML += `<div class="card m-3" style="width: 30rem;">
            <img class="card-img-top" src="${items[i].media[0]}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${items[i].title}</h5>
              <p class="card-text">${items[i].description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><date>${items[i].endsAt}</date></li>
              <li class="list-group-item">${items[i].tags}</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
      }

    }
  }
  catch (error) {
    console.log(error);
  }
}

