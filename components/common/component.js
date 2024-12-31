export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = props.initialState || {};
    this.children = props.children || [];
    this.init();
  }

  init() {
    this.render();
    this.renderChildren();
    this.attachEvents();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  update() {
    this.render();
    this.renderChildren();
    this.attachEvents();
  }

  template() {
    return "";
  }

  render() {
    const root = document.getElementById("root");
    root.innerHTML = this.template();
  }

  attachEvents() {
    this.children.forEach((child) => {
      if (child.attachEvents) {
        child.attachEvents();
      }
    });
  }

  renderChildren() {
    this.children.forEach((child) => {
      if (child instanceof Component) {
        child.render();
      }
    });
  }
}
