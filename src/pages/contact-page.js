const contactSection = function contactSection(mainElement) {
  const contact = document.createElement("div");
  contact.innerHTML = "<div>Contact us:</div>";
  mainElement.appendChild(contact);
};

export { contactSection };
