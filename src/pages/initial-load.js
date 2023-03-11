import MyImage from "../assets/a.jpg";
import "../assets/style.scss";

const initialPageLoad = function initialPageLoad(mainElement) {
  // Create heading
  const heading = document.createElement("h1");
  heading.textContent = "AMAS Restaurant";
  mainElement.appendChild(heading);

  // Create image
  const mainImage = document.createElement("img");
  mainImage.src = MyImage;
  mainElement.appendChild(mainImage);

  // Create paragraph
  const para = document.createElement("p");
  para.textContent =
    "Fabulous meals are available around the clock. Enjoy breakfast and lunch at sunlit Solana, and modern Lebanese flavors expertly prepared at OAK Grill for dinner. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  mainElement.appendChild(para);
};

export { initialPageLoad };
