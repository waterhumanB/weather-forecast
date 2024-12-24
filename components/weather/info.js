export class Info {
  constructor(props = {}) {
    this.iconUrl = props.iconUrl;
    this.temp = props.temp;
    this.temp_min = props.temp_min;
    this.temp_max = props.temp_max;
    this.description = props.description;
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
