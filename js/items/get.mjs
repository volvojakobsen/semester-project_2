const listURL = "https://api.noroff.dev/api/v1/auction/listings"

export async function getListings() {


    const response = await authFetch(listURL)
    await console.log(response);


    return await response.json();
};

getListings();

console.log("bfgdhng");