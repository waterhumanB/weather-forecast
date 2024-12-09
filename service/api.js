import { config } from "dotenv";

config();

const city = "Seoul";
const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WHEATER_API_KEY}&units=metric&lang=kr`;

const api = async () => {
  try {
    const response = await fetch(weatherApi);
    const data = await response.json();
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    console.log(new Date());
    console.log("현재", data.main.temp);
    console.log("최저", data.main.temp_min);
    console.log("최고", data.main.temp_max);
    console.log("공기", data.weather[0].description);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
