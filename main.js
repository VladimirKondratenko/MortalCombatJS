const firstPlayer = {
  player: 1,
  name: 'Scorpion',
  hp: 80,
  img: './assets/scorpion.gif',
  weapon: ['sword', 'gun', 'mace', 'knife', 'shotgun'],
  attack: function () {
    console.log(`${firstPlayer.name} + Fight!`);
  }
}

const secondPlayer = {
  player: 2,
  name: 'Liukang',
  hp: 50,
  img: './assets/liukang.gif',
  weapon: ['gloves', 'bow', 'arrows', 'shuriken', 'gun'],
  attack: function () {
    alert(`${secondPlayer.name} + Fight!`);
  }
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

const arena = document.querySelector('.arenas')

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


  // rootRef.appendChild(divPlayer);
  return divPlayer;
};

arena.appendChild(createPlayer(firstPlayer));
arena.appendChild(createPlayer(secondPlayer));
