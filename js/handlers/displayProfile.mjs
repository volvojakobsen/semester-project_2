import * as profileMethod from "../profile/profile.mjs";
import * as storage from "./storage/index.mjs";

const usernameHolder = document.querySelector(".usernameHolder");
const emailHolder = document.querySelector(".emailHolder");
const creditsHolder = document.querySelector(".creditsHolder");
const listingsContainer = document.querySelector(".listings");

export async function displayProfileListener() {
    let profile = await profileMethod.getProfile();
    console.log(profile);
    usernameHolder.innerHTML = profile.name;
    emailHolder.innerHTML = profile.email;
    creditsHolder.innerHTML = profile.credits;
    storage.save("credits", profile.credits);
    for (let i = 0; i < profile.wins.length; i++) {
        listingsContainer.innerHTML += `<a href="singleItem.html?id=${profile.wins[i]}"><button class="btn btn-success">${profile.wins[i]}</button></a>`;
    }


}

