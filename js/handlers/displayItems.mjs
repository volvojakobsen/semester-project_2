import * as fetchItems from "../items/index.mjs";
import { load } from "./storage/index.mjs"

let limit = 21;

export async function displayItems() {
  try {
    let items = await fetchItems.getListings();
    const listingsContainer = document.querySelector(".listings");
    const searchForm = document.querySelector("#searchForm");
    const searchString = document.getElementById("searchInput").value.toLowerCase();

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      //items.filter(n => n == 0 || n).length)

      const searchResult = items.filter(
        (items) =>
          items.title.toLowerCase().includes(searchString) ||
          //items.description.toLowerCase().includes(searchString) ||
          items.seller.name.toLowerCase().includes(searchString)

      );
      console.log(searchString)
      console.log(searchResult);
      listingsContainer.innerHTML = "";
      for (let i = 0; i < searchResult.length; i++) {
        listingsContainer.innerHTML += `<div class="card m-3 col-3">
        <a href="singleItem.html?id=${items[i].id}">
            <img class="card-img-top" src="${items[i].media[0]}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${items[i].title}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><date>${items[i].endsAt}</date></li>
              <li class="list-group-item">${items[i].tags}</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
            <a href="singleItem.html?id=${items[i].id}"><button type="button"  class="btn btn-primary"">View Item</button></a>
            </div>
            </a>
          </div>`
      }

    }
    )

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
              <a href="singleItem.html?id=${items[i].id}"><button type="button"  class="btn btn-primary"">View Item</button></a>
              <a href="updateItem.html?id=${items[i].id}" class="card-link"><button type="button" class="btn btn-outline-success">Update</button></a>
              <a href="removeItem.html?id=${items[i].id}"><button type="button" class="btn btn-outline-danger">Delete</button></a>
            </div>
            <div><form><input type="number"></input><button type="submit">Bid</button></form></div>
          </div>`
      }
      else {
        listingsContainer.innerHTML += `<div class="card m-3 col-3">
        <a href="singleItem.html?id=${items[i].id}">
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
            <a href="singleItem.html?id=${items[i].id}"><button type="button"  class="btn btn-primary"">View Item</button></a>
            </div>
            </a>
          </div>`
      }

    }
  }
  catch (error) {
    console.log(error);
  }
}

