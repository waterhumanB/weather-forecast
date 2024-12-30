export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = props.initialState || {};
    this.children = props.children || [];
    this.init();
  }

  // 초기화 메서드: 마운트 단계
  init() {
    this.render();
    this.renderChildren();
    this.attachEvents();
  }

  // 상태를 업데이트하고 렌더링을 다시 호출하는 메서드
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  // 상태가 변경되었을 때 호출되는 메서드
  update() {
    this.render();
    this.renderChildren();
    this.attachEvents();
  }

  // 렌더링할 템플릿을 정의하는 메서드
  template() {
    return "";
  }

  // 실제 렌더링을 수행하는 메서드
  render() {
    const root = document.getElementById("root");
    root.innerHTML = this.template();
  }

  // 이벤트 설정 메서드
  attachEvents() {
    this.children.forEach((child) => {
      if (child.attachEvents) {
        child.attachEvents();
      }
    });
  }

  // 자식 컴포넌트를 렌더링하는 메서드
  renderChildren() {
    this.children.forEach((child) => {
      if (child instanceof Component) {
        child.render();
      }
    });
  }
}
