const contactSection = function contactSection(mainElement) {
  const contact = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Contact us:";

  const personInfo = document.createElement("div");
  const smallHeading = document.createElement("h2");
  smallHeading.textContent = "Person";
  personInfo.appendChild(smallHeading);


  const anotherDiv = document.createElement("div");
  const position = document.createElement("span");
  position.textContent = "Position: Chef";
  const tele = document.createElement("span");
  tele.textContent = "Telephone Number: 111-111-111-111";
  const email = document.createElement("span");
  email.textContent = "Email: abc@example.com";
  anotherDiv.appendChild(position);
  anotherDiv.appendChild(tele);
  anotherDiv.appendChild(email);
  personInfo.appendChild(anotherDiv);

  contact.appendChild(heading);
  contact.appendChild(personInfo);

  mainElement.appendChild(contact);
};

export { contactSection };
