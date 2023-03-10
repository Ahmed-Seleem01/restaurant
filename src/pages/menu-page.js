import "../assets/menu.scss";

const menuSection = function contactSection(mainElement) {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");
  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const buildMenu = function buildMenu(name, descriptionText, priceValue, ...imageUrl) {
    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");
    const smallHeading = document.createElement("h2");
    smallHeading.textContent = name;
    menuInfo.appendChild(smallHeading);

    const anotherDiv = document.createElement("div");
    const childDiv = document.createElement("div");
    const description = document.createElement("p");
    description.textContent = descriptionText;
    const price = document.createElement("p");
    price.textContent = `Price: ${priceValue}$`;
    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "menu dish";
    childDiv.appendChild(description);
    childDiv.appendChild(price);
    anotherDiv.appendChild(childDiv);
    anotherDiv.appendChild(image);
    menuInfo.appendChild(anotherDiv);

    return menuInfo;
  };

  menu.appendChild(heading);
  menu.appendChild(buildMenu("meat", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus.", "20"));

  menu.appendChild(buildMenu("ABC", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus.", "10"));

  menu.appendChild(buildMenu("Candy", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus.", "5"));

  menu.appendChild(buildMenu("Juice", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus.", "7"));

  mainElement.appendChild(menu);
};

export { menuSection };
