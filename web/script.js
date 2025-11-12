const facts = [
  'Frank Sinatra won 11 Grammy Awards.',
  'He was the first artist to own his master recordings.',
  "Sinatra was also known as 'The Chairman of the Board.'",
  'He recorded his first song in 1939.',
  'Sinatra was awarded the Presidential Medal of Freedom in 1985.',
];

function showRandomFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('randomFact').innerText = randomFact;
}

document
  .getElementById('voteForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lounge = document.getElementById('lounge').value;
    const message = document.getElementById('message').value;

    alert(
      `Thank you, ${name}! Your vote for ${lounge} has been recorded.\n\nMessage: ${message}`
    );

    document.getElementById('voteForm').reset();
  });
