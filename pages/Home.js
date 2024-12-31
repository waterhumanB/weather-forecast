import { Component } from "../components/common/component.js";
import { Button } from "../components/common/button.js";
import { Card } from "../components/weather/card.js";
import { Info } from "../components/weather/info.js";
import { getCurrentWeather } from "../service/api.js";
import { convertUnixToKST } from "../utils/date.js";
import { router } from "../router.js";

export class Home extends Component {
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
      const weatherData = await getCurrentWeather();
      this.setState({ data: weatherData });
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

    this.info = new Info({
      iconUrl: `https://openweathermap.org/img/wn/${this.state.data?.weather[0]?.icon}@2x.png`,
      temp: this.state.data?.main.temp,
      temp_min: this.state.data?.main.temp_min,
      temp_max: this.state.data?.main.temp_max,
      description: this.state.data?.weather[0].description,
      children: [],
    });

    this.card = new Card({
      title: this.state.data?.name,
      date: convertUnixToKST(this.state.data?.dt),
      children: [this.info],
    });

    this.button = new Button({
      id: "Seoul",
      onClick: () => router("/detail"),
      children: [this.card],
    });

    return `
      <h1>홈 페이지</h1>
      ${this.button.template()}
    `;
  }

  attachEvents() {
    if (this.button) {
      this.button.attachEvents();
    }
  }
}
