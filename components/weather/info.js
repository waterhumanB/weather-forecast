export class Info {
  constructor(iconUrl, temp, temp_min, temp_max, description) {
    this.iconUrl = iconUrl;
    this.temp = temp;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.description = description;
  }

  render() {
    return `
      <div id="info">
          <div>
            <img src=${this.iconUrl} alt="${this.description}"></img>
            <div id="temp">
              <div>
                <p>현재</p>
                <p>${this.temp}</p>
              </div>
              <div>
                <p>최저/최고</p>
                <p>${this.temp_min}°C / ${this.temp_max}°C</p>
              </div>
            </div>
          </div>
          <p>${this.description}</p>
        </div> 
    `;
  }
}
