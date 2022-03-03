const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });
  

  
  function displayProphets(prophet) {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let portrait = document.createElement('img');
     
  
    
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Local of Birth: ${prophet.birthplace}`;

   
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');
  

    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
    
  }


