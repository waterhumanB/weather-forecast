import { Component } from "../components/common/component.js";
import { Button } from "../components/common/button.js";
import { Card } from "../components/weather/card.js";
import { Info } from "../components/weather/info.js";
import { getForecastByCity } from "../service/api.js";
import { router } from "../router.js";

export class Detail extends Component {
  constructor(props = {}) {
    super({
      ...props,
      initialState: { data: null },
    });
    this.info = null;
    this.card = null;
    this.button = null;
    this.loadData();
  }

  async loadData() {
    try {
      const forecastData = await getForecastByCity();
      this.setState({ data: forecastData });
    } catch (error) {
      console.error("Error loading weather data:", error);
      this.setState({ data: null });
    }
  }

  template() {
    console.log(this.state.data);
    if (!this.state.data) {
      return `<p>Loading...</p>`;
    }

    const forestCardList = this.state.data?.list
      .map((item) => {
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

        this.info = new Info({
          iconUrl,
          temp: item.main.temp,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          description: item.weather[0].description,
        });

        this.card = new Card({
          title: this.state.data?.city.name,
          date: item.dt_txt,
          children: [this.info],
        });

        return this.card.template();
      })
      .join("");

    this.button = new Button({
      id: "goHome",
      text: "홈으로",
      onClick: () => router("/weather-forecast"),
    });

    return `
      <h1>${this.state.data.city.name}</h1>
      ${this.button.template()}
      ${forestCardList}
    `;
  }

  attachEvents() {
    if (this.button) {
      this.button.attachEvents();
    }
  }
}
