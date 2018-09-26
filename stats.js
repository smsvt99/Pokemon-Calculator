const pokemonStats = {
    bulbasaur: [45, 49, 49, 45, 65, 'grass', 'poison'],
    ivysaur: [60, 62, 63, 60, 80, 'grass', 'poison'],
    venusaur: [80, 82, 83, 80, 100, 'grass', 'poison'],
    charmander: [39, 52, 43, 65, 50, 'fire'],
    charmeleon: [58, 64, 58, 80, 65, 'fire'],
    charizard: [78, 84, 78, 100, 85, 'fire', 'flying'],
    squirtle: [44, 48, 65, 43, 50, 'water'],
    wartortle: [59, 63, 80, 58, 65, 'water'],
    blastoise: [79, 83, 100, 78, 85, 'water'],
    caterpie: [45, 30, 35, 45, 20, 'bug'],
    metapod: [50, 20, 55, 30, 25, 'bug'],
    butterfree: [60, 45, 50, 70, 80, 'bug', 'flying'],
    weedle: [40, 35, 30, 50, 20, 'bug', 'poison'],
    kakuna: [45, 25, 50, 35, 25, 'bug', 'poison'],
    beedrill: [65, 80, 40, 75, 45, 'bug', 'poison'],
    pidgey: [40, 45, 40, 56, 35, 'normal', 'flying'],
    pidgeotto: [63, 60, 55, 71, 50, 'normal', 'flying'],
    pidgeot: [83, 80, 75, 91, 70, 'normal', 'flying'],
    rattata: [30, 56, 35, 72, 25, 'normal'],
    raticate: [55, 81, 60, 97, 50, 'normal'],
    spearow: [40, 60, 30, 70, 31, 'normal', 'flying'],
    fearow: [65, 90, 65, 100, 61, 'normal', 'flying'],
    ekans: [35, 60, 44, 55, 40, 'poison'],
    arbok: [60, 85, 69, 80, 65, 'poison'],
    pikachu: [35, 55, 30, 90, 50, 'electric'],
    raichu: [60, 90, 55, 100, 90, 'electric'],
    sandshrew: [50, 75, 85, 40, 30, 'ground'],
    sandslash: [75, 100, 110, 65, 55, 'ground'],
    "nidoran♀": [55, 47, 52, 41, 40, 'poison'],
    nidorina: [70, 62, 67, 56, 55, 'poison'],
    nidoqueen: [90, 82, 87, 76, 75, 'poison', 'ground'],
    "nidoran♂": [46, 57, 40, 50, 40, 'poison'],
    nidorino: [61, 72, 57, 65, 55, 'poison'],
    nidoking: [81, 92, 77, 85, 75, 'poison', 'ground'],
    clefairy: [70, 45, 48, 35, 60, 'normal'],
    clefable: [95, 70, 73, 60, 85, 'normal'],
    vulpix: [38, 41, 40, 65, 65, 'fire'],
    ninetales: [73, 76, 75, 100, 100, 'fire'],
    jigglypuff: [115, 45, 20, 20, 25, 'normal'],
    wigglytuff: [140, 70, 45, 45, 50, 'normal'],
    zubat: [40, 45, 35, 55, 40, 'poison', 'flying'],
    golbat: [75, 80, 70, 90, 75, 'poison', 'flying'],
    oddish: [45, 50, 55, 30, 75, 'grass', 'poison'],
    gloom: [60, 65, 70, 40, 85, 'grass', 'poison'],
    vileplume: [75, 80, 85, 50, 100, 'grass', 'poison'],
    paras: [35, 70, 55, 25, 55, 'bug', 'grass'],
    parasect: [60, 95, 80, 30, 80, 'bug', 'grass'],
    venonat: [60, 55, 50, 45, 40, 'bug', 'poison'],
    venomoth: [70, 65, 60, 90, 90, 'bug', 'poison'],
    diglett: [10, 55, 25, 95, 45, 'ground'],
    dugtrio: [35, 80, 50, 130, 70, 'ground'],
    meowth: [40, 45, 25, 90, 40, 'normal'],
    persian: [65, 70, 60, 115, 65, 'normal'],
    psyduck: [50, 52, 48, 55, 50, 'water'],
    golduck: [80, 82, 78, 85, 80, 'water'],
    mankey: [40, 80, 35, 70, 35, 'fighting'],
    primeape: [65, 105, 60, 95, 60, 'fighting'],
    growlithe: [55, 70, 45, 60, 50, 'fire'],
    arcanine: [90, 110, 80, 95, 80, 'fire'],
    poliwag: [40, 50, 40, 90, 40, 'water'],
    poliwhirl: [65, 65, 65, 90, 50, 'water'],
    poliwrath: [90, 85, 95, 70, 70, 'water', 'fighting'],
    abra: [25, 20, 15, 90, 105, 'psychic'],
    kadabra: [40, 35, 30, 105, 120, 'psychic'],
    alakazam: [55, 50, 45, 120, 135, 'psychic'],
    machop: [70, 80, 50, 35, 35, 'fighting'],
    machoke: [80, 100, 70, 45, 50, 'fighting'],
    machamp: [90, 130, 80, 55, 65, 'fighting'],
    bellspout: [50, 75, 35, 40, 70, 'grass', 'poison'],
    weepinbell: [65, 90, 50, 55, 85, 'grass', 'poison'],
    victreebell: [80, 105, 65, 70, 100, 'grass', 'poison'],
    tentacool: [40, 40, 35, 70, 100, 'water', 'poison'],
    tentacruel: [80, 70, 65, 100, 120, 'water', 'poison'],
    geodude: [40, 80, 100, 20, 30, 'rock', 'ground'],
    graveler: [55, 95, 115, 35, 45, 'rock', 'ground'],
    golem: [80, 110, 130, 45, 55, 'rock', 'ground'],
    ponyta: [50, 85, 55, 90, 65, 'fire'],
    rapidash: [65, 100, 70, 105, 80, 'fire'],
    slowpoke: [90, 65, 65, 15, 40, 'water', 'psychic'],
    slowbro: [95, 75, 110, 30, 80, 'water', 'psychic'],
    magnemite: [25, 35, 70, 45, 95, 'electric'],
    magneton: [50, 60, 95, 70, 120, 'electric'],
    "farfetch'd": [52, 65, 55, 60, 58, 'normal', 'flying'],
    doduo: [35, 85, 45, 75, 35, 'normal', 'flying'],
    dodrio: [60, 110, 70, 100, 60, 'normal', 'flying'],
    seel: [65, 45, 55, 45, 70, 'water'],
    dewgong: [90, 70, 80, 70, 95, 'water', 'ice'],
    grimer: [80, 80, 50, 25, 40, 'poison'],
    muk: [105, 105, 75, 50, 65, 'poison'],
    shellder: [30, 65, 100, 40, 45, 'water'],
    cloyster: [50, 95, 180, 70, 85, 'water', 'ice'],
    gastly: [30, 35, 30, 80, 100, 'ghost', 'poison'],
    haunter: [45, 50, 45, 95, 115, 'ghost', 'poison'],
    gengar: [60, 65, 60, 110, 130, 'ghost', 'poison'],
    onix: [35, 45, 160, 70, 30, 'ground', 'rock'],
    drowsee: [60, 48, 45, 42, 90, 'psychic'],
    hypno: [85, 73, 70, 67, 115, 'psychic'],
    krabby: [30, 105, 90, 50, 25, 'water'],
    kingler: [55, 130, 115, 75, 50, 'water'],
    voltorb: [40, 30, 50, 100, 55, 'electric'],
    electrode: [60, 50, 70, 140, 80, 'electric'],
    exeggcute: [60, 40, 80, 40, 60, 'grass', 'psychic'],
    exeggutor: [95, 95, 85, 55, 125, 'grass', 'psychic'],
    cubone: [50, 50, 95, 35, 40, 'ground'],
    marowak: [60, 80, 110, 45, 50, 'ground'],
    hitmonlee: [50, 120, 53, 87, 35, 'fighting'],
    hitmonchan: [50, 105, 79, 76, 35, 'fighting'],
    lickitung: [90, 55, 75, 30, 60, 'normal'],
    koffing: [40, 65, 95, 35, 60, 'poison'],
    weezing: [65, 90, 120, 60, 85, 'poison'],
    rhyhorn: [80, 85, 95, 25, 30, 'ground', 'rock'],
    rhydon: [105, 130, 120, 40, 45, 'ground', 'rock'],
    chansey: [250, 5, 5, 50, 105, 'normal'],
    tangela: [65, 55, 115, 60, 100, 'grass'],
    kangaskhan: [105, 95, 80, 90, 40, 'normal'],
    horsea: [30, 40, 70, 60, 70, 'water'],
    seadra: [55, 65, 95, 85, 95, 'water'],
    goldeen: [45, 67, 60, 63, 50, 'water'],
    seaking: [80, 92, 65, 68, 80, 'water'],
    staryu: [30, 45, 55, 85, 70, 'water'],
    starmie: [60, 75, 85, 115, 100, 'water', 'psychic'],
    "mr. mime": [40, 45, 65, 90, 100, 'psychic'],
    scyther: [70, 110, 80, 105, 55, 'bug', 'flying'],
    jynx: [65, 60, 35, 95, 95, 'ice', 'psychic'],
    electabuzz: [65, 83, 57, 105, 85, 'electric'],
    magmar: [65, 95, 57, 93, 85, 'fire'],
    pinsir: [65, 125, 100, 85, 55, 'bug'],
    tauros: [75, 100, 95, 110, 70, 'normal'],
    magikarp: [20, 10, 55, 80, 20, 'water'],
    gyarados: [95, 125, 79, 81, 100, 'water', 'flying'],
    lapras: [130, 85, 80, 60, 95, 'water', 'ice'],
    ditto: [48, 48, 48, 48, 48, 'normal'],
    eevee: [55, 55, 50, 55, 65, 'normal'],
    vaporeon: [130, 65, 60, 65, 110, 'water'],
    jolteon: [65, 65, 60, 130, 110, 'electric'],
    flareon: [65, 130, 60, 65, 110, 'fire'],
    porygon: [65, 60, 70, 40, 75, 'normal'],
    omanyte: [35, 40, 100, 35, 90, 'rock', 'water'],
    omastar: [70, 60, 125, 55, 115, 'rock', 'water'],
    kabuto: [30, 80, 90, 55, 45, 'rock', 'water'],
    kabutops: [60, 115, 105, 80, 70, 'rock', 'water'],
    aerodactyl: [80, 105, 65, 130, 60, 'rock', 'flying'],
    snorlax: [160, 110, 65, 30, 65, 'normal'],
    articuno: [90, 85, 100, 85, 125, 'ice', 'flying'],
    zapdos: [90, 90, 85, 100, 125, 'electric', 'flying'],
    moltres: [90, 100, 90, 90, 125, 'fire', 'flying'],
    dratini: [41, 64, 45, 50, 50, 'dragon'],
    dragonair: [61, 84, 65, 70, 70, 'dragon'],
    dragonite: [91, 134, 95, 80, 100, 'dragon', 'flying'],
    mewtwo: [106, 110, 90, 130, 154, 'psychic'],
    mew: [100, 100, 100, 100, 100, 'psychic']
};