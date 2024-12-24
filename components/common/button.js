import { Component } from "./component.js";

export class Button extends Component {
  constructor(props = {}) {
    super(props);
    this.id = props.id;
    this.text = props.text;
    this.onClick = props.onClick;
  }

  // 템플릿 정의
  template() {
    const childrenHTML = this.children.map((child) => child.render()).join("");
    return `
      <button id="${this.id}">
        ${this.text}
        ${childrenHTML}
      </button>
    `;
  }

  // 이벤트 설정
  attachEvents() {
    const button = document.getElementById(this.id);
    if (button && typeof this.onClick === "function") {
      button.addEventListener("click", this.onClick);
    }
    // 자식 컴포넌트의 이벤트도 설정
    super.attachEvents();
  }
}
