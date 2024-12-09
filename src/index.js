const root = window.document.getElementById("root");

const Home = () => {
  return `
      <h1>홈 페이지</h1>
      <p>home sweet home</p>
  `;
};

const render = async (component) => {
  root.innerHTML = component();
};

// 초기 렌더링
render(Home);

function navigate(state) {
  const h1 = document.querySelector("h1");
  h1.textContent = state.path.toUpperCase();
}

["home", "about", "contact"].forEach((path) => {
  const button = document.querySelector("#" + path);
  button.addEventListener("click", () => {
    const state = { path };
    history.pushState(state, "", path);
    navigate(state);
  });
});

window.addEventListener("popstate", (event) => {
  navigate(event.state);
});
