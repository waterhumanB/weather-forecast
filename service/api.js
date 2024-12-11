const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// 현재 날씨 정보 가져오기
export async function getCurrentWeather(city = "Seoul") {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  try {
    const response = await fetch(weatherApi);

    if (!response.ok) {
      throw new Error("현재 날씨 API 호출 실패");
    }

    const data = await response.json();
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    return {
      ...data,
      iconUrl,
    };
  } catch (error) {
    console.error("현재 날씨 정보를 가져오는 중 오류 발생:", error);
    return null;
  }
}

// 예보 정보 가져오기 (도시 이름 기반)
export async function getForecastByCity(city = "Seoul") {
  const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;

  try {
    const response = await fetch(forecastApi);

    if (!response.ok) {
      throw new Error("예보 API 호출 실패");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("예보 정보를 가져오는 중 오류 발생:", error);
    return null;
  }
}
