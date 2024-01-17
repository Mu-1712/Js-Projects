const weatherform = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "3cd83c72db700031c5252b2e7857f01c";

weatherform.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }catch(error){
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("Please a city");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);

    console.log(response);//gives the response from the api

    if(!response.ok){
        throw new Error("Could not fetch data");
    }
    
     return await response.json();
}

function displayWeatherInfo(data){

    console.log('Weather Data:', data);
    //gives the data

    //we define this from the data we got
    //after displaying data from api

    // Destructuring the weather property correctly
    const { name: city, main: { temp, humidity }, weather } = data;

    // Accessing the first element of the weather array
    const { description, id } = weather[0];

    card.textContent = "",
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent =  getWeatherEmoji(id);



    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

 }

function getWeatherEmoji(weatherId){
    
    switch(true){
        case (weatherId >= 200 && weatherId < 300 ):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400 ):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600 ):
            return "🌧️"; 
        case (weatherId >= 600 && weatherId < 700 ):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800 ):
            return "⛄";
        case (weatherId === 800 ):
            return "☀️";  
        case (weatherId >= 801 && weatherId < 810 ):
            return "☁️";  
        default:
            return "❓";  
    }

 }

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    // Clear any existing content in the card
    card.textContent = "";

    // Set the card's display style to "flex"
    card.style.display = "flex";

    // Append the error display element to the card
    card.appendChild(errorDisplay);
}

