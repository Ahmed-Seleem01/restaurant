import "../assets/menu.scss";

const menuSection = function contactSection(mainElement) {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  menu.appendChild(heading);
  mainElement.appendChild(menu);
};

export { menuSection };
