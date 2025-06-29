function calculateLove() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();

  if (name1 === '' || name2 === '') {
    document.getElementById('result').innerText = 'Please enter both names!';
    return;
  }

  const lovePercent = Math.floor(Math.random() * 101);

  document.getElementById('result').innerText =
    `${name1} ❤️ ${name2}\nCompatibility: ${lovePercent}%`;
}
