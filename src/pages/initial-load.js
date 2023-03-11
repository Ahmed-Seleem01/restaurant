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
    "Fabulous meals are available around the clock. Enjoy breakfast and lunch at sunlit Solana, and modern Lebanese flavors expertly prepared at OAK Grill for dinner.";
  mainElement.appendChild(para);
};

export { initialPageLoad };
