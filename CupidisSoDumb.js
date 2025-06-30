function calculateLove() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const resultElement = document.getElementById('result');
  const button = document.querySelector('.button');

  if (name1 === '' || name2 === '') {
    resultElement.innerText = 'Please enter both names!';
    return;
  }

  const lovePercent = Math.floor(Math.random() * 101);
  let currentPercent = 0;

  // Disable the button during loading
  button.disabled = true;
  resultElement.innerText = 'Calculating love compatibility... 💘';

  const interval = setInterval(() => {
    currentPercent++;
    resultElement.innerText = `Calculating... ${currentPercent}%`;

    if (currentPercent === lovePercent) {
      clearInterval(interval);
      resultElement.innerText = `${name1} ❤️ ${name2}\nCompatibility: ${lovePercent}%`;
      button.disabled = false; // Re-enable the button
    }
  }, 30); // speed of loading (ms per percent)
}
