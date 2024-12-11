export class Component {
  constructor(children = []) {
    this.children = children;
  }

  render() {
    return "";
  }

  attachEvent() {
    this.children.forEach((child) => {
      if (child.attachEvent) {
        child.attachEvent();
      }
    });
  }
}
