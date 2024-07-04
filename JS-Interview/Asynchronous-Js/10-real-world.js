const url = "https://api.github.com/users/raman7073";

async function fetchUser() {
  try {
    let response = await fetch(url);
    const data = await response.json();
    console.log("Response", data);
  } catch (err) {
    console.log("Error", err);
  }
}
fetchUser();
//fetchUser().catch((err) => console.log("Error", err)); old way to catch error
