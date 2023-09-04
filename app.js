// get elements by id
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');

// generate a random greeting
const getRandomGreeting = () => {
  const greetings = [
    'Hi',
    'Greetings',
    'Hey there',
    'Nice to see you',
    'Warmest greetings to you',
    'Hey and a good day to you',
  ];

  const randomIndex = Math.floor(Math.random() * greetings.length);

  return greetings[randomIndex];
};

// add listener to button to generate greeting
greetButton.addEventListener('click', () => {
  greeting.textContent = `${getRandomGreeting()} ${nameInput.value}!`;
});
