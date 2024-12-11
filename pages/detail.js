import { Component } from "../components/common/component.js";
import { Button } from "../components/common/button.js";
import { Card } from "../components/weather/card.js";
import { Info } from "../components/weather/info.js";
import { getForecastByCity } from "../service/api.js";
import { currentTime } from "../utils/date.js";
import { router } from "../router.js";

export class Detail extends Component {
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
      const forecastData = await getForecastByCity();
      this.setState(forecastData);
    } catch (error) {
      console.error("Error loading weather data:", error);
    }
  }

  update() {
    const root = document.getElementById("root");
    root.innerHTML = this.render();

    if (this.button) {
      this.button.attachEvent();
    }
  }

  render() {
    if (!this.data) {
      return `<p>Loading...</p>`;
    }

    const forestCardList = this.data.list
      .map((item) => {
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        const info = new Info(
          iconUrl,
          item.main.temp,
          item.main.temp_min,
          item.main.temp_max,
          item.weather[0].description
        );

        const card = new Card(this.data.city.name, item.dt_txt, [info]);

        return card.render();
      })
      .join("");

    this.button = new Button("goHome", "홈으로", () => router("/"), []);

    return `
      <h1>${this.data.city.name}</h1>
      ${this.button.render()}
      ${forestCardList}
    `;
  }

  attachEvent() {
    if (this.button) {
      this.button.attachEvent();
    }
  }
}
