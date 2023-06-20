import data from '../json/project-data.json' assert {type: 'json'};

const deck = document.getElementById('load');

data.forEach(item => {
  const card = document.createElement('a');
  card.className = 'flip-card';
  card.href = `${item['link']}`;
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${item['img']}" alt="${item['img']}" class="gold-filter">
      </div>
      <div class="flip-card-back">
        <h2>${item['title']}</h2>
        <br>
        <p>${item['desc']}</p>
      </div>
    </div>
  `;
  deck.appendChild(card);
});
