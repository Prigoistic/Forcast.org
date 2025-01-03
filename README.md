# Forcast.org


This is a simple weather application built using HTML, CSS, and JavaScript. It utilizes the OpenWeatherMap API to fetch current weather data for a given location and dynamically updates the page using DOM manipulation.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Usage](#setup-and-usage)
- [API Key](#api-key)
- [Key Concepts](#key-concepts)
    - [Fetch API](#fetch-api)
    - [DOM Manipulation](#dom-manipulation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

This project provides a user-friendly interface to check the current weather conditions. Users can enter a city name, and the app will retrieve and display relevant weather information, including temperature, weather description, humidity, wind speed, and an icon representing the weather condition.

## Features

*   Retrieves current weather data for a specified city.
*   Displays temperature in Celsius/Fahrenheit (toggleable).
*   Shows weather description (e.g., "Clear sky," "Light rain").
*   Displays humidity and wind speed.
*   Provides a weather icon representing the current conditions.
*   Handles errors gracefully (e.g., city not found).
*   Basic styling for a clean and readable interface.

## Technologies Used

*   **HTML:** For structuring the web page.
*   **CSS:** For styling the application.
*   **JavaScript:** For fetching data from the API and manipulating the DOM.
*   [OpenWeatherMap API](https://openweathermap.org/api): For retrieving weather data.

## Setup and Usage

1.  Clone the repository:

    ```bash
    git clone [invalid URL removed]
    ```

2.  Open the `index.html` file in your web browser.

3.  Enter a city name in the input field and press Enter or click the search button.

## API Key

This application requires an API key from OpenWeatherMap.

1.  Create a free account at [OpenWeatherMap](https://openweathermap.org/).
2.  Obtain your API key from your account dashboard (API keys tab).
3.  **Important:** For this project, you'll likely embed the API key directly in your JavaScript file (not recommended for production apps). A better approach for production would be to use a backend server to proxy the API requests. For this simple project, you can add your API key like this inside your JavaScript:

    ```javascript
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    ```

    **Never** commit your API key directly to a public repository in a production application.

## Key Concepts

### Fetch API

The Fetch API is used to make HTTP requests to the OpenWeatherMap API. Here's a basic example of how it's used in this project:

```javascript
const city = "London";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Example URL

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the weather data
    console.log(data);
    // ... update the DOM
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
    // ... display an error message
  });
 
