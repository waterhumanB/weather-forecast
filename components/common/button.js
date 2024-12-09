import Component from "./component";

export class Button extends Component {
  constructor(text, onClick, children = []) {
    super(children);
    this.text = text;
    this.onClick = onClick;
  }

  render() {
    const childrenHTML = this.children.map((child) => child.render()).join("");
    return `
      <button onclick="${this.onClick}">
        ${this.text}
        ${childrenHTML}
      </button>
    `;
  }
}
