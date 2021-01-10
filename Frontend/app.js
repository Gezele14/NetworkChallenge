const randomBtn = document.querySelector("#randomImg");
const searchBtn = document.querySelector("#searchImg");
const image = document.querySelector("#result");

randomBtn.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      image.src = data[0].url;
      image.hidden = false;
    });
});
