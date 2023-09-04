// get elements by id
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');
const errorText = document.getElementById('errorText');

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
  // remove any old messages
  greeting.textContent = '';
  errorText.textContent = '';

  // if input field is empty, alert user to enter name before getting a greeting
  if (nameInput.value === '') {
    nameInput.style.borderColor = 'red';
    errorText.textContent = "Don't forget to enter a name!";
  } else {
    nameInput.style.borderColor = 'grey';
    greeting.textContent = `${getRandomGreeting()} ${nameInput.value}!`;
  }
});
