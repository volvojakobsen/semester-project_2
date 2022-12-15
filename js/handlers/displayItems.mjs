import * as fetchItems from "../items/index.mjs";
import { load } from "./storage/index.mjs"


export async function displayItems() {
  try {
    let items = await fetchItems.getListings();
    const listingsContainer = document.querySelector(".listings");
    const searchForm = document.querySelector("#searchForm");
    const searchString = document.getElementById("searchInput").value.toLowerCase();

    let limit = 21;

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const searchResult = items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchString) ||
          //item.description.toLowerCase().includes(searchString) ||
          item.seller.name.toLowerCase().includes(searchString)

      );

      console.log(searchString);
      listingsContainer.innerHTML = "";
      for (let i = 0; i < searchResult.length; i++) {
        if (items[i].seller.name === load("name")) {
          listingsContainer.innerHTML += `<a class="noLinkDesign" href="singleItem.html?id=${items[i].id}"><div class="card card-multi m-3">
        <img class="card-img-top listings-img img-fluid" src="${items[i].media[0]}" alt="Card image cap">
        <div class="card-body card-top">
          <h2 class="card-title text-center">${items[i].title}</h2>
          <p class="card-text">${items[i].description}</p>
        </div>
        <h3 class="text-center">Ends at:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><date>${items[i].endsAt}</date></li>
          <li class="list-group-item">${items[i].tags}</li>
        </ul>
        <div class="card-body bottom-card d-flex flex-wrap">
        <a href="singleItem.html?id=${items[i].id}"><button type="button" class="btn listings-buttons btn-primary">View Item</button></a>
        <a href="updateItem.html?id=${items[i].id}" class="card-link listings-buttons"><button type="button" class="btn btn-outline-success">Update</button></a>
        <a href="removeItem.html?id=${items[i].id}"><button type="button" class="btn listings-buttons btn-outline-danger">Delete</button></a>
        </div>
      </div></a>`
        }
        else {
          listingsContainer.innerHTML += `<a class="noLinkDesign" href="singleItem.html?id=${items[i].id}"><div class="card card-multi m-3">
        <img class="card-img-top listings-img img-fluid" src="${items[i].media[0]}" alt="Card image cap">
        <div class="card-body card-top">
          <h2 class="card-title text-center">${items[i].title}</h2>
          <p class="card-text">${items[i].description}</p>
        </div>
        <h3 class="text-center">Ends at:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><date>${items[i].endsAt}</date></li>
          <li class="list-group-item">${items[i].tags}</li>
        </ul>
        <div class="card-body bottom-card d-flex flex-wrap">
        <a href="singleItem.html?id=${items[i].id}"><button type="button" class="btn listings-buttons btn-primary">View Item</button></a>
        </div>
      </div></a>`
        }

      }
      console.log(searchResult);

    }
    )

    for (let i = 0; i < items.length; i++) {
      if (i === limit) {
        break;
      }
      if (items[i].seller.name === load("name")) {
        listingsContainer.innerHTML += `<a class="noLinkDesign" href="singleItem.html?id=${items[i].id}"><div class="card card-multi m-3">
        <img class="card-img-top listings-img img-fluid" src="${items[i].media[0]}" alt="Card image cap">
        <div class="card-body card-top">
          <h2 class="card-title text-center">${items[i].title}</h2>
          <p class="card-text">${items[i].description}</p>
        </div>
        <h3 class="text-center">Ends at:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><date>${items[i].endsAt}</date></li>
          <li class="list-group-item">${items[i].tags}</li>
        </ul>
        <div class="card-body bottom-card d-flex flex-wrap">
        <a href="singleItem.html?id=${items[i].id}"><button type="button" class="btn listings-buttons btn-primary">View Item</button></a>
        <a href="updateItem.html?id=${items[i].id}" class="card-link listings-buttons"><button type="button" class="btn btn-outline-success">Update</button></a>
        <a href="removeItem.html?id=${items[i].id}"><button type="button" class="btn listings-buttons btn-outline-danger">Delete</button></a>
        </div>
      </div></a>`
      }
      else {
        listingsContainer.innerHTML += `<a class="noLinkDesign" href="singleItem.html?id=${items[i].id}"><div class="card card-multi m-3 single-card">
        <img class="card-img-top listings-img img-fluid" src="${items[i].media[0]}" alt="Card image cap">
        <div class="card-body card-top">
          <h2 class="card-title text-center">${items[i].title}</h2>
          <p class="card-text">${items[i].description}</p>
        </div>
        <h3 class="text-center">Ends at:</h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><date>${items[i].endsAt}</date></li>
          <li class="list-group-item">${items[i].tags}</li>
        </ul>
        <div class="card-body bottom-card d-flex flex-wrap">
        <a href="singleItem.html?id=${items[i].id}"><button type="button" class="btn listings-buttons btn-primary">View Item</button></a>
        </div>
      </div></a>`
      }

    }

    const loadMore = document.querySelector("#loadMore");

    loadMore.addEventListener("click", (e) => {
      e.preventDefault();

      limit += 20;

      displayItems();
    })
  }
  catch (error) {
    console.log(error);
  }
}

