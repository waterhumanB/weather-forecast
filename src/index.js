import { navigate } from "../router.js";

// 초기 페이지 렌더링
window.onload = () => {
  navigate(window.location.pathname || "/");
};
