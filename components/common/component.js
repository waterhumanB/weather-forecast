export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = props.initialState || null;
    this.children = props.children || [];
    this.init();
  }

  // 초기화 메서드: 마운트 단계
  init() {
    this.render();
    this.attachEvents();
    this.renderChildren();
  }

  // 상태를 업데이트하고 렌더링을 다시 호출하는 메서드
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  // 상태가 변경되었을 때 호출되는 메서드
  update() {
    this.render();
    this.attachEvents();
    this.renderChildren();
  }

  // 렌더링할 템플릿을 정의하는 메서드 (추상 메서드)
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
    // 각 컴포넌트에서 구현
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
