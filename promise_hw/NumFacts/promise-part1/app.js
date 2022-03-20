let favNumber = 5;

let baseURL = "http://numbersapi.com";


// $.getJSON(`${base_url}/${fav_num}?json`, response => {
  
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
  document.getElementById('number_fact').innerText = data.text; 
});


// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
  favNumbers.forEach(number => {
    $("#number_facts").append(`<p>${data[number]}</p>`);
  });
});


// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("#four_facts").append(`<p>${data.text}</p>`));
});

