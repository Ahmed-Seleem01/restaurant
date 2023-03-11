const menuSection = function contactSection(mainElement) {
  const menu = document.createElement("div");
  menu.innerHTML = "<div>Menu:</div>";
  mainElement.appendChild(menu);
};

export { menuSection };
