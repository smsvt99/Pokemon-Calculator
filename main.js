let pokemon = {
    name: '',
    number: '',
    type: [],
    level: '',
    base: {
        HP: '',
        attack: '',
        defence: '',
        speed: '',
        special: '',
    },
    IV: {
        HP: '',
        attack: '',
        defence: '',
        speed: '',
        special: '',
    },
    EV: {
        HP: '',
        attack: '',
        defence: '',
        speed: '',
        special: '',
    },
    stat: {
        HP: '',
        attack: '',
        defence: '',
        speed: '',
        special: '',
    },
    get: {
        IVs: function () {
            pokemon.IV.attack = Math.floor(Math.random() * 16);
            pokemon.IV.defence = Math.floor(Math.random() * 16);
            pokemon.IV.speed = Math.floor(Math.random() * 16);
            pokemon.IV.special = Math.floor(Math.random() * 16);
        },
        HP: function () {
            pokemon.stat.HP = Math.floor((((((pokemon.base.HP + pokemon.IV.HP) * 2) + (Math.sqrt(pokemon.EV.HP) / 4)) * pokemon.level) / 100) + pokemon.level + 10)
        },
        attack: function () {
            pokemon.stat.attack = Math.floor((((((pokemon.base.attack + pokemon.IV.attack) * 2) + (Math.sqrt(pokemon.EV.attack) / 4)) * pokemon.level) / 100) + 5)
        },
        defence: function () {
            pokemon.stat.defence = Math.floor((((((pokemon.base.defence + pokemon.IV.defence) * 2) + (Math.sqrt(pokemon.EV.defence) / 4)) * pokemon.level) / 100) + 5)
        },
        speed: function () {
            pokemon.stat.speed = Math.floor((((((pokemon.base.speed + pokemon.IV.speed) * 2) + (Math.sqrt(pokemon.EV.speed) / 4)) * pokemon.level) / 100) + 5)
        },
        special: function () {
            pokemon.stat.special = Math.floor((((((pokemon.base.special + pokemon.IV.special) * 2) + (Math.sqrt(pokemon.EV.special) / 4)) * pokemon.level) / 100) + 5)
        },
        stats: function() {
            pokemon.get.HP();
            pokemon.get.attack();
            pokemon.get.defence();
            pokemon.get.speed();
            pokemon.get.special();
        },
        EVs: function () {
            pokemon.EV.HP = 0;
            pokemon.EV.attack = 0;
            pokemon.EV.defence = 0;
            pokemon.EV.speed = 0;
            pokemon.EV.special = 0;
        },

    }
}
window.onload = function () {
    fillBaseStats(pokemonStats['bulbasaur']);
};

const pokemonNames = Object.keys(pokemonStats);

pokemonNames.forEach(name => {
    let pokemon = name.charAt(0).toUpperCase() + name.slice(1);
    let option = `<option class="nameOption">${pokemon}</option>`;
    document.getElementById('pokemonSelect').innerHTML += option;
});

document.getElementById('pokemonSelect').addEventListener('change', whichPokemon);
document.getElementById('level').addEventListener('change', generateStats);


function whichPokemon(event) {
    let selectedPokemon = event.target.value.toLowerCase();
    let selectedPokemonStats = pokemonStats[selectedPokemon];
    fillBaseStats(selectedPokemonStats);
}

function fillBaseStats(array) {
    pokemon.name = array
    pokemon.base.HP = array[0]
    pokemon.base.attack = array[1]
    pokemon.base.defence = array[2]
    pokemon.base.speed = array[3]
    pokemon.base.special = array[4]
    pokemon.type.push(array[5])
    pokemon.type.push(array[6])
    pokemon.number = array[7]
    
    positionImage(array[7])

    document.getElementById('attackerHP').value = array[0]
    document.getElementById('attackerAttack').value = array[1]
    document.getElementById('attackerDefence').value = array[2]
    document.getElementById('attackerSpeed').value = array[3]
    document.getElementById('attackerSpecial').value = array[4]
    document.getElementById('attackerType').value = array[5]
    document.getElementById('attackerType2').value = array[6]

    document.getElementById('attackerHP2').textContent = array[0]
    document.getElementById('attackerAttack2').textContent = array[1]
    document.getElementById('attackerDefence2').textContent = array[2]
    document.getElementById('attackerSpeed2').textContent = array[3]
    document.getElementById('attackerSpecial2').textContent = array[4]
}

function positionImage(pokeNum) {
    if (pokeNum <= 28) {
        x = (pokeNum - 1) * -80;
        y = 0;
    } else if (pokeNum <= 56){
        x = (pokeNum - 1) * -80;
        y = -80;
    } else if (pokeNum <= 84){
        x = (pokeNum - 1) * -80;
        y = -160;
    } else if (pokeNum <=112){
        x = (pokeNum - 1) * -80;
        y = -240;
    } else if (pokeNum <= 140){
        x = (pokeNum - 1) * -80;
        y = -320;
    } else {
        x = (pokeNum - 1) * -80;
        y = -400;    
    }
    document.getElementById('pokePic').style.backgroundPosition = `${x}px ${y}px`;
}

function getIVs() {
    // let random1 = Math.floor(Math.random() * 16);
    // let random2 = Math.floor(Math.random() * 16);
    // let random3 = Math.floor(Math.random() * 16);
    // let random4 = Math.floor(Math.random() * 16);
    pokemon.get.IVs()

    document.getElementById('attackerAttackIV').value = pokemon.IV.attack;
    document.getElementById('attackerDefenceIV').value = pokemon.IV.defence;
    document.getElementById('attackerSpeedIV').value = pokemon.IV.speed;
    document.getElementById('attackerSpecialIV').value = pokemon.IV.special;

    document.getElementById('attackerAttackIV2').textContent = pokemon.IV.attack;
    document.getElementById('attackerDefenceIV2').textContent = pokemon.IV.defence;
    document.getElementById('attackerSpeedIV2').textContent = pokemon.IV.speed;
    document.getElementById('attackerSpecialIV2').textContent = pokemon.IV.special;

    document.getElementById('attackerAttackIV3').textContent = pokemon.IV.attack;
    document.getElementById('attackerDefenceIV3').textContent = pokemon.IV.defence;
    document.getElementById('attackerSpeedIV3').textContent = pokemon.IV.speed;
    document.getElementById('attackerSpecialIV3').textContent = pokemon.IV.special;

    document.getElementById('attackerAttackIV2Binary').innerHTML =
        pokemon.IV.attack.toString(2).padStart(4, '0').substring(0, 3) + '<span id="red">' + pokemon.IV.attack.toString(2).padStart(4, '0').substring(3) + '</span>';

    document.getElementById('attackerDefenceIV2Binary').innerHTML =
        pokemon.IV.defence.toString(2).padStart(4, '0').substring(0, 3) + '<span id="blue">' + pokemon.IV.defence.toString(2).padStart(4, '0').substring(3) + '</span>';

    document.getElementById('attackerSpeedIV2Binary').innerHTML =
        pokemon.IV.speed.toString(2).padStart(4, '0').substring(0, 3) + '<span id="green">' + pokemon.IV.speed.toString(2).padStart(4, '0').substring(3) + '</span>';

    document.getElementById('attackerSpecialIV2Binary').innerHTML =
        pokemon.IV.special.toString(2).padStart(4, '0').substring(0, 3) + '<span id="orange">' + pokemon.IV.special.toString(2).padStart(4, '0').substring(3) + '</span>';

}

function getHPIV() {
    theNumber =
        document.getElementById('red').innerText +
        document.getElementById('blue').innerText +
        document.getElementById('green').innerText +
        document.getElementById('orange').innerText

    document.getElementById('binaryResults').innerHTML =
        '<div class="centerMe"><span id="red2">' +
        document.getElementById('red').innerText +
        '</span><span id="blue2">' +
        document.getElementById('blue').innerText +
        '</span><span id="green2">' +
        document.getElementById('green').innerText +
        '</span><span id="orange2">' +
        document.getElementById('orange').innerText +
        '</span>' +
        ' = ' +
        parseInt(theNumber, 2) +
        '</div><br/><p class="info">' +
        "Do you see how the colored bits line up to form a new binary number? Consider the ramifications of this mechanic. From the point of view of the HP IV, we always want odd numbers for the four random IVs, as these end in 1 in binary. 14, 14, 14, 14 would seem to be an impressive roll for a Pokemon's IVs, but it yields a 0 (i.e. 0000) for the HP IV. Similarly, the Attack IV has the most weight in determining the HP IV. An odd Attack IV adds 8 to the HP IV, an odd Defence IV adds 4, an odd Speed IV adds 2, and an odd Special IV adds 1.</p>"

    colorDigits();
    document.getElementById('HPIV').textContent = parseInt(theNumber, 2)
}

function colorDigits() {
    document.getElementById('red').style = 'color: red; font-size: 30px;';
    document.getElementById('blue').style = 'color: blue; font-size: 30px;';
    document.getElementById('green').style = 'color: green; font-size: 30px;';
    document.getElementById('orange').style = 'color: orange; font-size: 30px;';

    document.getElementById('red2').style = 'color: red; font-size: 30px;';
    document.getElementById('blue2').style = 'color: blue; font-size: 30px;';
    document.getElementById('green2').style = 'color: green; font-size: 30px;';
    document.getElementById('orange2').style = 'color: orange; font-size: 30px;';
}

function generateStats() {
    pokemon.level = parseInt(document.getElementById('level').value, 10);
    document.getElementById('level2').textContent = pokemon.level;

    pokemon.get.EVs();
    pokemon.get.stats();

    document.getElementById('HP').textContent = pokemon.stat.HP;
    document.getElementById('attack').textContent = pokemon.stat.attack;
    document.getElementById('defence').textContent = pokemon.stat.defence;
    document.getElementById('speed').textContent = pokemon.stat.speed;
    document.getElementById('special').textContent = pokemon.stat.special;

}
