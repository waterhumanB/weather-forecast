import { Component } from "../common/component.js";

export class Card extends Component {
  constructor(title, date, children = []) {
    super(children);
    this.title = title;
    this.date = date;
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
