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

  button.disabled = true;
  resultElement.innerText = 'Calculating love compatibility... 💘';

  const interval = setInterval(() => {
    currentPercent++;
    resultElement.innerText = `Calculating... ${currentPercent}%`;
    if (currentPercent === lovePercent) {
      clearInterval(interval);
      if (lovePercent <= 50) {
        resultElement.innerText = `${name1} 💔 ${name2}\nCompatibility: ${lovePercent}%\nAwww... not very strong 😢`;
      } else {
        resultElement.innerText = `${name1} ❤️ ${name2}\nCompatibility: ${lovePercent}%\nYou two are adorable 💖`;
      }
      button.disabled = false;
      makeRainEffect(lovePercent <= 50);
    }
  }, 30);
}

function dropRain(isSad) {
  const drop = document.createElement('div');
  drop.classList.add('heart');

  if (isSad) {
    drop.innerText = '😢';
  } else {
    drop.innerText = '💗'; 
  }

  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = (Math.random() * 2 + 3) + 's';
  drop.style.fontSize = Math.random() * 20 + 20 + 'px';

  document.body.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 5000);
}
function makeRainEffect(isSad) {
  const interval = setInterval(() => dropRain(isSad), 200);
  setTimeout(() => clearInterval(interval), 4000); // stop after 4s
}
