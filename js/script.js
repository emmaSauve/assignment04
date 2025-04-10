// variables to store get elements by their ids in the html
const name = document.getElementById("name");
const origin = document.getElementById("origin");
const description = document.getElementById("description");
const temperament = document.getElementById("temperament");
const wikipediaUrl = document.getElementById("wikipediaUrl");
const catImageContainer = document.getElementById("catImageContainer");
const randomCat = document.getElementById("randomCat");
const studentId = document.getElementById("studentId");

// function to generate a random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to fetch the breed information from the cat api
function fetchTheCats() {
    let baseURL = "https://api.thecatapi.com/v1/breeds"; // base url for the api
    let key = "live_5wPHmG4XYHdghPx4C3qgunquISGq7xtcbqr6hoVGN6Ff3eTNQd1ItjLGDHUDeyYY"; // api key sent by email

    fetch(baseURL, { // adding api key in the header (https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t)
        headers: {
            'x-api-key': key
        }
    })
    .then(response => response.json()) 
    .then(json => {
        let randomIndex = getRandomInt(0, json.length - 1); // selecting a random breed using the getrandomint function
        let randomBreed = json[randomIndex];
      
        displayCats(randomBreed); // use the displaycats function to dusplay the information about the random breed of cat
    });


}

//function to display cat breed information
function displayCats(data) { 

    // grabbing the information from the api and storing it as the text content in the variables
    name.textContent = data.name;
    origin.textContent = data.origin;
    description.textContent = data.description;
    temperament.textContent = data.temperament;
    wikipediaUrl.textContent = data.wikipedia_url;
    wikipediaUrl.href = data.wikipedia_url;

    const existingImage = document.querySelector("#catImageContainer img"); // grab the id from the html and store it inside a variable
    if (existingImage) { // if theres an img inside of the container in the html, then remove it
        existingImage.remove();
    }

    // create a img tag
    const catImage = document.createElement("img");
    // get the api image and the alt text
    catImage.src = data.image.url;  
    catImage.alt = data.name;
    catImageContainer.appendChild(catImage); // add the cat image to the container


    studentId.textContent = "Emma Sauve - 1261276"; // display the student id when function is called


}

randomCat.addEventListener("click", fetchTheCats); // event listner to use the fetchthecat function and display information from the api