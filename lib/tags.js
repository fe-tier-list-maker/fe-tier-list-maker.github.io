const mainCharacter = "Lord";
const playerCharacter = "Avatar";
const archer = "Archer";
const cav = "Cavalier";
const refresher = "Dancer/Singer";
const dragon = "Dragon";
const fighter = "Fighter";
const healer = "Healer";
const knight = "Knight";
const mage = "Mage";
const merc = "Mercenary";
const myrm = "Myrmidon";
const peg = "Pegasus";
const pirate = "Bandit/Pirate";
const beast = "Beast";
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
const redHair = "Redhead";
const whiteHair = "White Hair";

const bald = "Bald-Is-Awesome!";

const allTags = [mainCharacter, playerCharacter, bald];
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
        29: { name: "Basilio", tags: [fighter, promoted, bald] },
        31: { name: "Lucina", tags: [mainCharacter, blueHair] },
    },
    "bib": {
        0: { name: "Roy", tags: [mainCharacter, redHair] },
        6: { name: "Merlinus", tags: [special, blueHair, bald] },
        44: { name: "Garret", tags: [pirate, promoted, bald] },
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
