import "../assets/menu.scss";

const menuSection = function contactSection(mainElement) {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  
  const menuInfo = document.createElement("div");
  menuInfo.classList.add("menu-info");
  const smallHeading = document.createElement("h2");
  smallHeading.textContent = "Person";
  menuInfo.appendChild(smallHeading);

  const anotherDiv = document.createElement("div");
  const description = document.createElement("p");
  description.textContent = "description";
  const price = document.createElement("p");
  price.textContent = "Price:";
  const image = document.createElement("img");
  image.src = "";
  image.alt= "menu dish";
  anotherDiv.appendChild(description);
  anotherDiv.appendChild(price);
  anotherDiv.appendChild(image);
  menuInfo.appendChild(anotherDiv);

  menu.appendChild(heading);
  menu.appendChild(menuInfo);
  
  
  mainElement.appendChild(menu);
};

export { menuSection };
