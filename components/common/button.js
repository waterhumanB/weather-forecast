import { Component } from "./component.js";

export class Button extends Component {
  constructor(id, text, onClick, children = []) {
    super(children);
    this.id = id;
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    const childrenHTML = this.children.map((child) => child.render()).join("");
    return `
      <button id="${this.id}" onclick="${this.onClick}">
        ${this.text}
        ${childrenHTML}
      </button>
    `;
  }

  attachEvent() {
    const button = document.getElementById(this.id);
    if (button && typeof this.onClick === "function") {
      button.addEventListener("click", this.onClick);
    }
    super.attachEvent();
  }
}
