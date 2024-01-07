const arena = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const firstPlayer = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: './assets/scorpion.gif',
  weapon: ['sword', 'gun', 'mace', 'knife', 'shotgun'],
  attack: function () {
    console.log(`${firstPlayer.name} + Fight!`);
  }
}

const secondPlayer = {
  player: 2,
  name: 'Liukang',
  hp: 100,
  img: './assets/liukang.gif',
  weapon: ['gloves', 'bow', 'arrows', 'shuriken', 'gun'],
  attack: function () {
    alert(`${secondPlayer.name} + Fight!`);
  }
}

const createElement = (tag, className) => {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

const createPlayer = (player) => {
  const divPlayer = createElement('div', 'player' + player.player);
  const divProgressbar = createElement('div', 'progressbar');
  const divcharacter = createElement('div', 'character');
  const divLife = createElement('div', 'life');
  const divName = createElement('div', 'name');
  const imgCharacter = createElement('img');

  divLife.style.width = `${player.hp}%`;
  divName.innerText = `${player.name}`;
  imgCharacter.src = `${player.img}`;

  divPlayer.appendChild(divProgressbar);
  divProgressbar.appendChild(divLife);

  divcharacter.appendChild(imgCharacter);

  divPlayer.appendChild(divcharacter);
  divProgressbar.appendChild(divName);

  return divPlayer;
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const changeHP = (player) => {
  const playerLife = document.querySelector('.player' + player.player + ' .life');

  player.hp -= randomNumber(1, 20);

  if (player.hp <= 0) {
    player.hp = 0;
  }

  playerLife.style.width = player.hp + '%';
};

const getResultText = (name, text) => {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerText = name + text;

  return loseTitle;
};

randomButton.addEventListener('click',
  function () {
    changeHP(firstPlayer);
    changeHP(secondPlayer);
    if (firstPlayer.hp <= 0 && firstPlayer.hp < secondPlayer.hp) {
      arena.appendChild(getResultText(secondPlayer.name, ' WINS'));
      randomButton.disabled = true
    } else if (secondPlayer.hp <= 0 && secondPlayer.hp < firstPlayer.hp) {
      arena.appendChild(getResultText(firstPlayer.name, ' WINS'));
      randomButton.disabled = true
    } else  {
      arena.appendChild(getResultText('', 'DRAW'));
      randomButton.disabled = true;
    }
});

arena.appendChild(createPlayer(firstPlayer));
arena.appendChild(createPlayer(secondPlayer));
