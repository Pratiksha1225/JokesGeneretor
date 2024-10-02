const jokeBtn = document.getElementById('jokeBtn');
const jokeDiv = document.getElementById('joke');

// Function to fetch a random joke
const fetchJoke = async () => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const jokeData = await response.json();
    jokeDiv.innerHTML = `${jokeData.setup} - ${jokeData.punchline}`;
  } catch (error) {
    jokeDiv.innerHTML = 'Oops! Something went wrong.';
  }
};

// Add event listener to the button
jokeBtn.addEventListener('click', fetchJoke);
