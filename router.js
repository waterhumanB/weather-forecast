import { Home } from "./pages/Home.js";
import { Detail } from "./pages/detail.js";

const routes = {
  "/": Home,
  "/detail": Detail,
};

export function navigate(path) {
  const root = document.getElementById("root");
  const Page = routes[path] || Home;
  const pageInstance = new Page();
  root.innerHTML = pageInstance.render();
  pageInstance.attachEvent();
}

export function router(path) {
  history.pushState({}, "", path);
  navigate(path);
}

window.addEventListener("popstate", () => {
  navigate(window.location.pathname);
});
