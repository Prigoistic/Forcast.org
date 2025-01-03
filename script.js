const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")

const apikey = "f486c36c248827b9d17c606d58fea3d8";

weatherForm.addEventListener("submit",async event =>{
    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error)
            displayError(error)

        }


    }else{
        displayError("Please Enter a valid city")
    }

})


async function getWeatherData(city){

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const response = await fetch(apiURL);
    console.log(response)

    if(!response.ok){
        throw new Error("Couldnt fetch weather")
    }else{
        return await response.json();
    }


}
function displayWeatherInfo(data){
    const {name: city, 
        main: {temp,humidity}, 
        weather: [{description, id}]} = data;

        card.textContent = "";
        card.style.display = "flex"
     


        const cityDisplay = document.createElement("h1")
        const tempDisplay = document.createElement("p")
        const humidityDisplay = document.createElement("p")
        const descDisplay = document.createElement("p")
        const weatherEmoji = document.createElement("p")

        cityDisplay.textContent = city;
        cityDisplay.classList.add("cityDisplay")

        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`
        tempDisplay.classList.add("tempDisplay")

        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        humidityDisplay.classList.add("humidityDisplay")

        descDisplay.textContent = description;
        descDisplay.classList.add("descDisplay")

        weatherEmoji.textContent = getWeatherEmoji(id)
        weatherEmoji.classList.add("weatherEmoji")

        


       

        card.appendChild(cityDisplay)
        card.appendChild(tempDisplay)
        card.appendChild(humidityDisplay)
        card.appendChild(descDisplay)
        card.appendChild(weatherEmoji)
        card.appendChild(errorDisplay)


}
function getWeatherEmoji(weatherid){
    
    switch(true){
        case (weatherid>=200 && weatherid<300):
            return " ⛈️";
        case (weatherid>=300 && weatherid<400):
            return "🌧️" 
        case (weatherid>=500 && weatherid<600):
            return "🌧️"  
        case (weatherid>=600 && weatherid<700):
            return "❄️"   
        case (weatherid>=700 && weatherid<800):
            return "🌫️" 
        case (weatherid===800):
                return "☀️"
        case (weatherid>=801 && weatherid < 810):
            return "☁️"  
        default:
            return "💀"             


    }




}
function displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay")

    
}