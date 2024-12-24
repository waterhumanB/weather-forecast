import { Component } from "../common/component.js";

export class Card extends Component {
  constructor(props = {}) {
    super(props);
    this.id = props.id;
    this.text = props.text;
    this.onClick = props.onClick;
  }

  render() {
    const childrenHTML = this.children.map((child) => child.render()).join("");
    return `
      <div id="card">
        <h3>${this.title}</h3>
        <p>${this.date}</p>
        ${childrenHTML}
      </div>
    `;
  }
}
