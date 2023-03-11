import { initialPageLoad } from "./pages/initial-load";
import { menuSection } from "./pages/menu-page";
import { contactSection } from "./pages/contact-page";

const content = document.querySelector("#content");
initialPageLoad(content);

const showSection = function (e) {
  content.textContent = "";
  const elem = e.target.textContent;
  if (elem === "Home") {
    initialPageLoad(content);
  } else if (elem === "Menu Page") {
    menuSection(content);
  } else if (elem === "Contact") {
    contactSection(content);
  }
};
const sections = document.querySelectorAll(".section");
for (let section of sections) {
  section.addEventListener("click", showSection);
}
