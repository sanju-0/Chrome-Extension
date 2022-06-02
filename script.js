const urls = ['https://icanhazdadjoke.com/slack', 
              'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit',
             ];

const choice =  Math.floor(Math.random() * urls.length);

const urlUsed =  urls[choice];

console.log(choice);

if (choice == 0) {
  fetch(urlUsed)
  .then(data => data.json())
  .then(jokeData => {
      const jokeText = jokeData.attachments[0].text;
      const joke = document.getElementById('joke');
  
      joke.innerHTML = jokeText;
  })
} else {
  fetch(urlUsed)
  .then(data => data.json())
  .then(jokeData => {
    if (jokeData.type == 'single') {
      const jokeText = jokeData.joke;
      const joke = document.getElementById('joke');

      joke.innerHTML = jokeText;

    } else {
      const jokeText = jokeData.setup + ' ' + jokeData.delivery;
      const joke = document.getElementById('joke');

      joke.innerHTML= jokeText;
    }
  })
}

