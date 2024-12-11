import { Component } from "../components/common/component.js";
import { Button } from "../components/common/button.js";
import { Card } from "../components/weather/card.js";
import { Info } from "../components/weather/info.js";
import { getCurrentWeather } from "../service/api.js";
import { currentTime } from "../utils/date.js";
import { router } from "../router.js";

export class Home extends Component {
  constructor() {
    super();
    this.data = null;
    this.loadData();
  }

  setState(newState) {
    this.data = newState;
    this.update();
  }

  async loadData() {
    try {
      const weatherData = await getCurrentWeather();
      this.setState(weatherData);
    } catch (error) {
      console.error("Error loading weather data:", error);
    }
  }

  update() {
    const root = document.getElementById("root");
    root.innerHTML = this.render();
    this.attachEvent();
  }

  render() {
    if (!this.data) {
      return `<p>Loading...</p>`;
    }

    const info = new Info(
      this.data.iconUrl,
      this.data.main.temp,
      this.data.main.temp_min,
      this.data.main.temp_max,
      this.data.weather[0].description
    );
    const card = new Card(this.data.name, currentTime, [info]);

    this.button = new Button(this.data.name, "", () => router("/detail"), [
      card,
    ]);

    return `
      <h1>홈 페이지</h1>
      ${this.button.render()}
    `;
  }

  attachEvent() {
    if (this.button) {
      this.button.attachEvent();
    }
  }
}
