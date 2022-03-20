let favNumber = 5;

let baseURL = "http://numbersapi.com";

async function getNumFacts() {
  console.log("starting!");
  let numFacts = await $.getJSON(
      `${baseURL}/${favNumber}?json`);
  // these lines do NOT run until the promise is resolved!
  console.log("all done!");
  //console.log(numFacts);
  document.getElementById('number_fact').innerText = numFacts.text; 
}

let favNumbers = [7, 11, 22];
async function getNumbersFact(){
  data = await $.getJSON(`${baseURL}/${favNumbers}?json`)
  favNumbers.forEach(number => {
    $("#number_facts").append(`<p>${data[number]}</p>`);
  });
}

async function getFourFacts(){
  facts =  await Promise.all(
          Array.from({ length: 4 }, () => {
            return $.getJSON(`${baseURL}/${favNumber}?json`);
          }))
  console.log(`facts is ${facts}`)
  facts.forEach(data => {
    $("#four_facts").append(`<p>${data.text}</p>`);
  });
            
}

//Question1
getNumFacts();

//Question 2
getNumbersFact();

//Question 2
getFourFacts();

