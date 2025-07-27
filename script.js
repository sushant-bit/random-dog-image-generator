const url = "https://dog.ceo/api/breeds/image/random";
// const picdog = document.querySelector("#picofdog");
const pic = document.querySelector(".pic");
const btn = document.querySelector(".btn");
const placeholder = document.querySelector("#placeholder");

const getPic = async () => {
  console.log("Fetching book data...");
  placeholder.style.display = "none";
  pic.style.display = "flex";
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  pic.src = data.message;
};

btn.addEventListener("click", getPic);
