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

function whichPokemon(event) {
    let selectedPokemon = event.target.value.toLowerCase();
    let selectedPokemonStats = pokemonStats[selectedPokemon];
    fillBaseStats(selectedPokemonStats);
}

function fillBaseStats(array) {
    document.getElementById('attackerHP').value = array[0]
    document.getElementById('attackerAttack').value = array[1]
    document.getElementById('attackerDefence').value = array[2]
    document.getElementById('attackerSpeed').value = array[3]
    document.getElementById('attackerSpecial').value = array[4]
    document.getElementById('attackerType').value = array[5]
    document.getElementById('attackerType2').value = array[6]
}

function getIVs() {
    let random1 = Math.floor(Math.random() * 16);
    let random2 = Math.floor(Math.random() * 16);
    let random3 = Math.floor(Math.random() * 16);
    let random4 = Math.floor(Math.random() * 16);

    document.getElementById('attackerAttackIV').value = random1;
    document.getElementById('attackerDefenceIV').value = random2;
    document.getElementById('attackerSpeedIV').value = random3;
    document.getElementById('attackerSpecialIV').value = random4;

    document.getElementById('attackerAttackIV2').textContent = random1;
    document.getElementById('attackerDefenceIV2').textContent = random2;
    document.getElementById('attackerSpeedIV2').textContent = random3;
    document.getElementById('attackerSpecialIV2').textContent = random4;

    document.getElementById('attackerAttackIV2Binary').innerHTML =
        random1.toString(2).padStart(4, '0').substring(0, 3) + '<span id="red">' + random1.toString(2).padStart(4, '0').substring(3) + '</span>';

    document.getElementById('attackerDefenceIV2Binary').innerHTML =
        random2.toString(2).padStart(4, '0').substring(0, 3) + '<span id="blue">' + random2.toString(2).padStart(4, '0').substring(3) + '</span>';

    document.getElementById('attackerSpeedIV2Binary').innerHTML =
        random3.toString(2).padStart(4, '0').substring(0, 3) + '<span id="green">' + random3.toString(2).padStart(4, '0').substring(3) + '</span>';

    document.getElementById('attackerSpecialIV2Binary').innerHTML =
        random4.toString(2).padStart(4, '0').substring(0, 3) + '<span id="orange">' + random4.toString(2).padStart(4, '0').substring(3) + '</span>';

}

function getHPIV() {
    theNumber =
        document.getElementById('red').innerText +
        document.getElementById('blue').innerText +
        document.getElementById('green').innerText +
        document.getElementById('orange').innerText

    document.getElementById('binaryResults').innerHTML =
        '<div id="centerMe"><span id="red2">' +
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
