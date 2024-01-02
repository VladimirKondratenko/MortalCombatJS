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

  console.log('${player.hp}', player.hp);
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
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const changeHP = (player) => {
  const playerLife = document.querySelector('.player' + player.player + ' .life');

  console.log('randomNumber', randomNumber(1, 20));

  if (player.hp <= 0) {
    player.hp = 0
    playerLife.style.width = player.hp + '%';
    arena.appendChild(playerLose(player.name));
  } else {
    player.hp -= randomNumber(1, 20);
    playerLife.style.width = player.hp + '%';
  }
  console.log('player hp', player.hp)
};

const playerLose = (name) => {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerText = name + 'lose';

  return loseTitle;
};

randomButton.addEventListener('click',
  function () {
    changeHP(firstPlayer);
    changeHP(secondPlayer);
});

arena.appendChild(createPlayer(firstPlayer));
arena.appendChild(createPlayer(secondPlayer));
