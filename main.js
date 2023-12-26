const firstPlayer = {
  name: 'firstPlayer',
  hp: 100,
  img: 'path',
  weapon: ['sword', 'gun', 'mace', 'knife', 'shotgun'],
  attack () {
    alert(`${firstPlayer.name} + Fight!`);
  }
}

const secondPlayer = {
  name: 'secondPlayer',
  hp: 100,
  img: 'path',
  weapon: ['gloves', 'bow', 'arrows', 'shuriken', 'gun'],
  attack () {
    alert(`${firstPlayer.name} + Fight!`);
  }
}

const rootRef = document.querySelector('.arenas')

const createPlayer = (name, player) => {
  const divPlayer = document.createElement("div");
  divPlayer.className = `${name}`;

  const divProgressbar = document.createElement("div");
  divProgressbar.className = "progressbar ";

  const divcharacter = document.createElement("div");
  divcharacter.className = "character ";

  const divLife = document.createElement("div");
  divLife.className = "life";
  divLife.style.width = `${player.hp}%"`;

  const divName = document.createElement("div");
  divName.className = "name";
  divName.innerText = `${player.name}`

  const imgCharacter = document.createElement("img");
  imgCharacter.src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"


  divPlayer.appendChild(divProgressbar);
  divProgressbar.appendChild(divLife);
  divProgressbar.appendChild(divName);
  divPlayer.appendChild(divcharacter);
  divcharacter.appendChild(imgCharacter);
  rootRef.appendChild(divPlayer);
};

/*
const rootRef = document.querySelector('.arenas')

const createPlayer = (namePlayer, nameHero, countLife) => {
  const divPlayer = document.createElement("div");
  divPlayer.className = `${namePlayer}`;

  const divProgressbar = document.createElement("div");
  divProgressbar.className = "progressbar ";

  const divcharacter = document.createElement("div");
  divcharacter.className = "character ";

  const divLife = document.createElement("div");
  divLife.className = "life";
  divLife.style.width = `${countLife}%"`;

  const divName = document.createElement("div");
  divName.className = "name";
  divName.innerText = `${nameHero}`

  const imgCharacter = document.createElement("img");
  imgCharacter.src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif"


  divPlayer.appendChild(divProgressbar);
  divProgressbar.appendChild(divLife);
  divProgressbar.appendChild(divName);
  divPlayer.appendChild(divcharacter);
  divcharacter.appendChild(imgCharacter);
  rootRef.appendChild(divPlayer);
};

*/
createPlayer('player1', firstPlayer);
createPlayer('player2', secondPlayer);