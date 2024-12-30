import { Component } from "../common/component.js";

export class Card extends Component {
  constructor(props = {}) {
    const { title = "", date = "", children = [] } = props;
    super(props);
    this.title = title;
    this.date = date;
    this.children = children;
  }

  template() {
    const childrenHTML = this.children
      .map((child) => child.template())
      .join("");

    return `
      <div id="card">
        <h3>${this.title}</h3>
        <p>${this.date}</p>
        ${childrenHTML}
      </div>
    `;
  }
}
