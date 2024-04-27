// Create a function that grabs the p element inside the card body and changes the inner text to "new text"
// Use the querySelector method to select the p element
// Use the innerText property to change the text

const textInjector = (text) => {
  const pElement = document.querySelector(".card-body p");
  pElement.innerText = text;
}

const excuseGenerator = () => {
    const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    const action = ['ate', 'peed', 'crushed', 'broke'];
    const what = ['my homework', 'my phone', 'the car'];
    const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    const excuse = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}`;
    textInjector(excuse);
}

document.querySelector(".btn").addEventListener("click", excuseGenerator);