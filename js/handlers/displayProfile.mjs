import * as profileMethod from "../profile/profile.mjs";


const usernameHolder = document.querySelector(".usernameHolder");
const emailHolder = document.querySelector(".emailHolder");
const creditsHolder = document.querySelectorAll(".creditsHolder");
const listingsContainer = document.querySelector(".listings");
const profileHulder = document.querySelector(".profileImage");

export async function displayProfileListener() {
    if (localStorage.getItem("token")) {
        const profile = await profileMethod.getProfile();
        usernameHolder.innerHTML = profile.name;
        profileHulder.src = profile.avatar;
        emailHolder.innerHTML = profile.email;
        creditsHolder.innerHTML = profile.credits;
        for (let i = 0; i < profile.wins.length; i++) {
            if (location.pathname === "/semester-project_2/profile.html") {
                listingsContainer.innerHTML += `<a class="m-4" href="https://volvojakobsen.github.io/semester-project_2/singleItem.html?id=${profile.wins[i]}"><button class="btn btn-success">${profile.wins[i]}</button></a>`;
            }
            else {
                listingsContainer.innerHTML += `<a class="m-4" href="singleItem.html?id=${profile.wins[i]}"><button class="btn btn-success">${profile.wins[i]}</button></a>`;
            }

        }
    }



}

