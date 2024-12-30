import { Component } from "./component.js";

export class Button extends Component {
  constructor(props = {}) {
    const { id = ``, text = "", onClick = () => {}, children = [] } = props;
    super(props);
    this.id = id;
    this.text = text;
    this.onClick = onClick;
    this.children = children;
  }

  // 템플릿 정의
  template() {
    const childrenHTML = this.children
      .map((child) => child.template())
      .join("");

    return `
      <button id="${this.id}">
        ${this.text}
        ${childrenHTML}
      </button>
    `;
  }

  attachEvents() {
    const button = document.getElementById(this.id);
    if (button && typeof this.onClick === "function") {
      button.addEventListener("click", this.onClick);
    }
  }
}
