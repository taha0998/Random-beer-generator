const beerButton = document.querySelector("button");
const randomBeerTitle = document.querySelector("#beer-title");
const randomBeerDescription = document.querySelector("#beer-description");
const randomBeerImage = document.querySelector("#beer-image");


function getData() {
  fetch("https://punkapi.online/v3/beers/random")
    .then((response) => response.json())
    .then((data) => {
      const image = "https://punkapi.online/v3/images/" + data.image;
      const title = data.name;
      const description = data.description;
      const volumeUnit = data.boil_volume.unit;
      const volumeValue = data.boil_volume.value;

      randomBeerImage.setAttribute("src", image)
      randomBeerTitle.textContent = title + " | " + volumeValue + volumeUnit;
      randomBeerDescription.textContent = description;
    });
}

getData()
beerButton.addEventListener("click", getData);
