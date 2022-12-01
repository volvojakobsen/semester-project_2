const listURL = "https://api.noroff.dev/api/v1/auction/listings"

export async function getListings() {

    const response = await fetch(listURL)

    return await response.json();
};



