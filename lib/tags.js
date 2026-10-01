const mainCharacter = "Lord";
const playerCharacter = "Avatar";
const archer = "Archer";
const beast = "Beast";
const bowKnight = "Bow Knight";
const brawler = "Brawler";
const cav = "Cavalier";
const refresher = "Dancer/Singer";
const darkMage = "Dark Mage";
const dragon = "Dragon";
const fighter = "Fighter";
const healer = "Healer";
const knight = "Knight";
const mage = "Mage";
const merc = "Mercenary";
const myrm = "Myrmidon";
const peg = "Pegasus";
const pirate = "Brigand/Pirate";
const thief = "Thief";
const villager = "Villager";
const wyvern = "Wyvern";
const special = "Special Class";

const promoted = "Promoted";

const blackHair = "Black Hair";
const blondeHair = "Blonde";
const blueHair = "Blue Hair";
const brownHair = "Brown Hair";
const greenHair = "Green Hair";
const greyHair = "Grey Hair";
const orangeHair = "Orange Hair";
const pinkHair = "Pink Hair";
const purpleHair = "Purple Hair";
const redHair = "Redhead";
const whiteHair = "White Hair";

const bald = "Bald-Is-Awesome!";

const allTags = [mainCharacter, playerCharacter, myrm, peg, blueHair, bald];
const tagTemplate = { name: "", tags: [] };

const imgTags = {
    "awa": {
        0: { name: "Chrom", tags: [mainCharacter, blueHair] },
        1: { name: "Robin", tags: [playerCharacter, whiteHair] },
        2: { name: "Robin", tags: [playerCharacter, whiteHair] },
        3: { name: "Lissa", tags: [healer, blondeHair] },
        4: { name: "Frederick", tags: [cav, promoted, brownHair] },
        5: { name: "Sully", tags: [cav, redHair] },
        6: { name: "Virion", tags: [archer] },
        7: { name: "Stahl", tags: [cav, brownHair] },
        8: { name: "Vaike", tags: [fighter, blondeHair] },
        9: { name: "Miriel", tags: [mage, redHair] },
        10: { name: "Sumia", tags: [peg, brownHair] },
        11: { name: "Kellam", tags: [knight, brownHair] },
        12: { name: "Donnel", tags: [villager, brownHair] },
        13: { name: "Lon'qu", tags: [myrm, brownHair] },
        14: { name: "Ricken", tags: [mage, redHair] },
        15: { name: "Maribelle", tags: [healer, blondeHair] },
        16: { name: "Panne", tags: [beast, brownHair] },
        17: { name: "Gaius", tags: [thief, orangeHair] },
        18: { name: "Cordelia", tags: [peg, redHair] },
        19: { name: "Gregor", tags: [merc, redHair] },
        20: { name: "Nowi", tags: [dragon, greenHair] },
        21: { name: "Libra", tags: [healer, promoted, blondeHair] },
        22: { name: "Tharja", tags: [darkMage, blackHair] },
        23: { name: "Anna", tags: [thief, promoted, redHair] },
        24: { name: "Olivia", tags: [refresher, pinkHair] },
        25: { name: "Cherche", tags: [wyvern, redHair] },
        26: { name: "Henry", tags: [darkMage, whiteHair] },
        27: { name: "Say'ri", tags: [myrm, promoted, blackHair] },
        28: { name: "Tiki", tags: [dragon, greenHair] },
        29: { name: "Basilio", tags: [fighter, promoted, bald] },
        30: { name: "Flavia", tags: [merc, promoted, blondeHair] },
        31: { name: "Lucina", tags: [mainCharacter, blueHair] },
        32: { name: "Owain", tags: [myrm, blondeHair] },
        33: { name: "Inigo", tags: [merc, brownHair] },
        34: { name: "Brady", tags: [healer, blondeHair] },
        35: { name: "Kjelle", tags: [knight, blackHair] },
        36: { name: "Cynthia", tags: [peg, brownHair] },
        37: { name: "Severa", tags: [merc, redHair] },
        38: { name: "Gerome", tags: [wyvern, redHair] },
        39: { name: "Morgan", tags: [mage, blackHair] },
        40: { name: "Morgan", tags: [mage, blackHair] },
        41: { name: "Yarne", tags: [beast, brownHair] },
        42: { name: "Laurent", tags: [mage, redHair] },
        43: { name: "Noire", tags: [archer, blackHair] },
        44: { name: "Nah", tags: [dragon, greenHair] },
    },
    "bib": {
        0: { name: "Roy", tags: [mainCharacter, redHair] },
        1: { name: "Marcus", tags: [cav, promoted, whiteHair] },
        2: { name: "Alen", tags: [cav, redHair] },
        3: { name: "Lance", tags: [cav, greenHair] },
        4: { name: "Wolt", tags: [cav, greenHair] },
        5: { name: "Bors", tags: [knight, greenHair] },
        6: { name: "Merlinus", tags: [special, blueHair, bald] },
        7: { name: "Elen", tags: [healer, brownHair] },
        8: { name: "Dieck", tags: [merc, greenHair] },
        9: { name: "Wade", tags: [fighter, brownHair] },
        10: { name: "Lot", tags: [fighter, orangeHair] },
        11: { name: "Shanna", tags: [peg, blueHair] },
        12: { name: "Chad", tags: [thief, blondeHair] },
        13: { name: "Lugh", tags: [mage, greenHair] },
        14: { name: "Clarine", tags: [healer, blondeHair] },
        15: { name: "Rutger", tags: [myrm, brownHair] },
        16: { name: "Saul", tags: [healer, purpleHair] },
        17: { name: "Dorothy", tags: [archer, orangeHair] },
        18: { name: "Sue", tags: [bowKnight, greenHair] },
        19: { name: "Zelot", tags: [cav, promoted, greyHair] },
        20: { name: "Treck", tags: [cav, brownHair] },
        21: { name: "Noah", tags: [cav, purpleHair] },
        22: { name: "Astolfo", tags: [thief, purpleHair] },
        23: { name: "Lilina", tags: [mage, blueHair] },
        24: { name: "Gwendolyn", tags: [knight, pinkHair] },
        25: { name: "Barthe", tags: [knight, brownHair] },
        26: { name: "Ogier", tags: [merc, blueHair] },
        27: { name: "Fir", tags: [myrm, purpleHair] },
        28: { name: "Shin", tags: [bowKnight, greenHair] },
        29: { name: "Gonzalez", tags: [pirate, brownHair] },
        30: { name: "Geese", tags: [pirate, purpleHair] },
        31: { name: "Klein", tags: [archer, promoted, blondeHair] },
        32: { name: "Thea", tags: [peg, blueHair] },
        33: { name: "Larum", tags: [refresher, orangeHair] },
        34: { name: "Echidna", tags: [merc, promoted, blueHair] },
        35: { name: "Elffin", tags: [refresher, blondeHair] },
        36: { name: "Bartre", tags: [fighter, promoted, brownHair] },
        37: { name: "Raigh", tags: [darkMage, greenHair] },
        38: { name: "Cath", tags: [thief, orangeHair] },
        39: { name: "Miledy", tags: [wyvern, redHair] },
        40: { name: "Perceval", tags: [cav, promoted, blondeHair] },
        41: { name: "Cecilia", tags: [mage, promoted, greenHair] },
        42: { name: "Sophia", tags: [darkMage, pinkHair] },
        43: { name: "Igrene", tags: [archer, promoted, blondeHair] },
        44: { name: "Garret", tags: [pirate, promoted, bald] },
        45: { name: "Fae", tags: [dragon, pinkHair] },
        46: { name: "Hugh", tags: [mage, purpleHair] },
        47: { name: "Zeiss", tags: [wyvern, redHair] },
        48: { name: "Douglas", tags: [knight, promoted, brownHair] },
        49: { name: "Niime", tags: [darkMage, promoted, whiteHair] },
        50: { name: "Dayan", tags: [bowKnight, promoted, greenHair] },
        51: { name: "Juno", tags: [peg, promoted, purpleHair] },
        52: { name: "Yodel", tags: [healer, promoted, whiteHair] },
        53: { name: "Karel", tags: [myrm, promoted, brownHair] },
    },
    "bla": {
        0: { name: "Lyn", tags: [mainCharacter, greenHair] },
        12: { name: "Wallace", tags: [knight, promoted, bald] },
        13: { name: "Eliwood", tags: [mainCharacter, redHair] },
        18: { name: "Hector", tags: [mainCharacter, blueHair] },
    },
    "eng": {
        0: { name: "Alear", tags: [mainCharacter, blueHair, redHair, playerCharacter] },
        1: { name: "Alear", tags: [mainCharacter, blueHair, redHair, playerCharacter] },
    },
    "fe1": {
        0: { name: "Marth", tags: [mainCharacter, blueHair] },
        1: { name: "Caeda", tags: [peg, blueHair] },
        2: { name: "Jagen", tags: [cav, promoted, whiteHair] },
        3: { name: "Cain", tags: [cav, redHair] },
        4: { name: "Abel", tags: [cav, greenHair] },
        5: { name: "Draug", tags: [knight, greenHair] },
        6: { name: "Gordin", tags: [archer, greenHair] },
        7: { name: "Wrys", tags: [healer, bald] },
        8: { name: "Ogma", tags: [merc, blondeHair] },
        9: { name: "Barst", tags: [fighter, blueHair] },
        10: { name: "Bord", tags: [fighter, brownHair] },
        11: { name: "Cord", tags: [fighter, brownHair] },
        26: { name: "Bantu", tags: [dragon, bald] },
        36: { name: "Dolph", tags: [knight, bald] },
        37: { name: "Macellan", tags: [knight, bald] },
        52: { name: "Malledus", tags: [bald, whiteHair] },
        58: { name: "Medeus", tags: [dragon, bald, whiteHair] },
    },
    "fe2": {
        0: { name: "Alm", tags: [mainCharacter, blueHair] },
        16: { name: "Celica", tags: [mainCharacter, redHair] },
    },
    "fex": {
        6: { name: "Hans", tags: [fighter, bald] },
    },
    "frev": {
        0: { name: "Corrin", tags: [mainCharacter, playerCharacter, dragon, whiteHair] },
        1: { name: "Corrin", tags: [mainCharacter, playerCharacter, dragon, whiteHair] },
    },
    "ghw1": {
        0: { name: "Sigurd", tags: [mainCharacter, blueHair] },
    },
    "ghw2": {
        0: { name: "Seliph", tags: [mainCharacter, blueHair] },
    },
    "hoc": {
        0: { name: "Alfonse", tags: [mainCharacter, blueHair] },
    },
    "mote1": {
        0: { name: "Marth", tags: [mainCharacter, blueHair] },
        24: { name: "Bantu", tags: [dragon, bald] },
        31: { name: "Dolph", tags: [knight, bald] },
        32: { name: "Macellan", tags: [knight, bald] },
    },
    "mote2": {
        0: { name: "Marth", tags: [mainCharacter, blueHair] },
        27: { name: "Bantu", tags: [dragon, bald] },
        45: { name: "Lang", tags: [bald, whiteHair] },
        47: { name: "Malledus", tags: [bald, whiteHair] },
        53: { name: "Medeus", tags: [dragon, bald, whiteHair] },
    },
    "nm": {
        0: { name: "Marth", tags: [mainCharacter, blueHair] },
        1: { name: "Kris", tags: [playerCharacter, blueHair] },
        2: { name: "Kris", tags: [playerCharacter, blueHair] },
        19: { name: "Wrys", tags: [healer, bald] },
        57: { name: "Dolph", tags: [knight, bald, blondeHair] },
        59: { name: "Macellan", tags: [knight, bald, brownHair] },
        65: { name: "Frost", tags: [mage, bald, whiteHair] },
    },
    "nme": {
        4: { name: "Lang", tags: [bald, whiteHair] },
        6: { name: "Medeus", tags: [dragon, bald, whiteHair] },
    },
    "por": {
        0: { name: "Ike", tags: [mainCharacter, blueHair] },
    },
    "rd": {
        0: { name: "Micaiah", tags: [mainCharacter, whiteHair] },
        20: { name: "Elincia", tags: [mainCharacter, peg, greenHair] },
        23: { name: "Nealuchi", tags: [beast, bald, whiteHair] },
        31: { name: "Geoffrey", tags: [mainCharacter, cav, promoted, blueHair] },
        37: { name: "Ike", tags: [mainCharacter, blueHair] },
        62: { name: "Oliver", tags: [mage, bald, redHair] },
    },
    "sd": {
        0: { name: "Marth", tags: [mainCharacter, blueHair] },
        9: { name: "Wrys", tags: [healer, bald] },
        39: { name: "Dolph", tags: [knight, bald, blondeHair] },
        40: { name: "Macellan", tags: [knight, bald, brownHair] },
    },
    "sde": {
        1: { name: "Malledus", tags: [bald, whiteHair] },
    },
    "sov": {
        0: { name: "Alm", tags: [mainCharacter, greenHair] },
        17: { name: "Celica", tags: [mainCharacter, redHair] },
    },
    "sto": {
        0: { name: "Ephraim", tags: [mainCharacter, blueHair] },
        14: { name: "Eirika", tags: [mainCharacter, blueHair] },
    },
    "th776": {
        0: { name: "Leif", tags: [mainCharacter, brownHair] },
    },
    "thrh": {
        0: { name: "Byleth", tags: [playerCharacter, blueHair] },
        1: { name: "Byleth", tags: [playerCharacter, blueHair] },
        2: { name: "Edelgard", tags: [mainCharacter, whiteHair] },
        3: { name: "Hubert", tags: [mage, blackHair] },
        4: { name: "Dorothea", tags: [mage, brownHair] },
        10: { name: "Dimitri", tags: [mainCharacter, blondeHair] },
        18: { name: "Claude", tags: [mainCharacter, brownHair] },
    },
    "thw": {
        48: { name: "Duke Aegir", tags: [bald, orangeHair] },
    },
    "tlp": {
        0: { name: "Siegfried", tags: [mainCharacter, brownHair] },
        1: { name: "Shon", tags: [mainCharacter, blondeHair] },
        12: { name: "Anakin", tags: [mainCharacter, blondeHair] },
        17: { name: "Kelik", tags: [mainCharacter, blackHair] },
    },
    "tms": {
        0: { name: "Itsuki", tags: [mainCharacter, blackHair] },
        2: { name: "Tsubasa", tags: [mainCharacter, blackHair] },
    },
    "trs": {
        0: { name: "Runan", tags: [mainCharacter, brownHair] },
        32: { name: "Holmes", tags: [mainCharacter, blondeHair] },
    },
}
