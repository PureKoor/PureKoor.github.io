r = "koor";
ATTRIBUTE = ['power', 'mythic', 'purity'];
ATTRIBUTE_EMOJI = ["🌋", "🌟", "✝️"]
GM = {
  "g_LVL_max": 10,
  "g_LVL_min": 1,
  "g_varience_min": 1,
};
charNameTitle = [
  'Fluffy', 'Furry',
  'Great',
  'Holy',
  'Noble',
  'Popular',
  'Transformative',
  'Vicious',
  'Wary'
];
weapons = [{
    "ID": 1,
    "name": "Axe",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Blade",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Boomerang",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Broad Sword",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Club",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Claw",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Dart",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Dagger",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Fan",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Fist",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Hammer",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Knife",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Knuckles",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Lance",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Mace",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Needle",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Sword",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Wand",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Staff",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Rod",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Stick",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Scissors",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Whip",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  },
  {
    "name": "Sai",
    "weaponType": ATTRIBUTE[0],
    "weaponATK": 5,
  }
];
var weaponType = [{
    "name": "Iron",
    "bonus": ATTRIBUTE[0],
    "bonus_num": 5,
  }
];
function warriorExperience(lvl, hp, mp, str, int, def, spd, luk) {
}
function mageExperience(hp, mp, etc) {
}
function thiefExperience(hp, mp, etc) {
}
function clericExperience(hp, mp, etc) {
}
var charClass = [{
    "id": 0,
    "class": "Error",
    "title": "null",
    "s_LVL": -999,
    "s_HP": -999,
    "s_MP": -999,
    "s_STR": -999,
    "s_INT": -999,
    "s_DEF": -999,
    "s_SPD": -999,
    "s_LUK": -999,
    "v_HP": 4,
    "v_MP": 8,
    "v_STR": 2,
    "v_INT": 10,
    "v_DEF": 5,
    "v_SPD": 2,
    "v_LUK": 2,
    "attributeBuff": ATTRIBUTE[0],
    "attributeDebuff": ATTRIBUTE[1],
  },
  {
    "id": 1,
    "class": "Warrior",
    "title": "null",
    "s_LVL": 6,
    "s_HP": 1,
    "s_MP": 0,
    "s_STR": 20,
    "s_INT": 5,
    "s_DEF": 8,
    "s_SPD": 3,
    "s_LUK": 1,
    "v_HP": 4,
    "v_MP": 8,
    "v_STR": 2,
    "v_INT": 10,
    "v_DEF": 5,
    "v_SPD": 2,
    "v_LUK": 2,
    "attributeBuff": ATTRIBUTE[0],
    "attributeDebuff": ATTRIBUTE[1],
  },
  {
    "id": 2,
    "class": "Mage",
    "title": "null",
    "s_LVL": 7,
    "s_HP": 2,
    "s_MP": 0,
    "s_STR": 3,
    "s_INT": 15,
    "s_DEF": 4,
    "s_SPD": 11,
    "s_LUK": 1,
    "v_HP": 4,
    "v_MP": 8,
    "v_STR": 2,
    "v_INT": 10,
    "v_DEF": 5,
    "v_SPD": 2,
    "v_LUK": 2,
    "attributeBuff": ATTRIBUTE[1],
    "attributeDebuff": ATTRIBUTE[0],
  },
  {
    "id": 3,
    "class": "Thief",
    "title": "null",
    "s_LVL": 6,
    "s_HP": 3,
    "s_MP": 0,
    "s_STR": 20,
    "s_INT": 5,
    "s_DEF": 8,
    "s_SPD": 3,
    "s_LUK": 1,
    "v_HP": 4,
    "v_MP": 8,
    "v_STR": 2,
    "v_INT": 10,
    "v_DEF": 5,
    "v_SPD": 2,
    "v_LUK": 2,
    "attributeBuff": ATTRIBUTE[0],
    "attributeDebuff": ATTRIBUTE[0],
  },
  {
    "id": 4,
    "class": "Cleric",
    "title": "null",
    "s_LVL": 6,
    "s_HP": 4,
    "s_MP": 0,
    "s_STR": 20,
    "s_INT": 5,
    "s_DEF": 8,
    "s_SPD": 3,
    "s_LUK": 1,
    "v_HP": 4,
    "v_MP": 8,
    "v_STR": 2,
    "v_INT": 10,
    "v_DEF": 5,
    "v_SPD": 2,
    "v_LUK": 2,
    "attributeBuff": ATTRIBUTE[0],
    "attributeDebuff": ATTRIBUTE[0],
  }
];
heroObj = {
  class: charClass[0],
  title: "null title",
  lvl: -999,
  ht: -999,
  hp: -999,
  mp: -999,
  str: -999,
  int: -999,
  def: -999,
  spd: -999,
  luk: -999
};
function setupHero(hero) {
  heroClassRNG = Math.floor((Math.random() * charClass.length) + 1);
  hero.class = charClass[heroClassRNG];
  hero.title = charNameTitle[Math.floor(Math.random() * charNameTitle.length)]
}

function setRandomHero(hero) {
  hero.lvl = Math.floor((Math.random() * GM.g_LVL_max) + GM.g_LVL_min);
  lvl = hero.lvl;
  hero.hp = levelingUP(lvl, hero.class.s_HP, hero.class.v_HP);
  hero.mp = levelingUP(lvl, hero.class.s_MP, hero.class.v_MP);
  hero.str = levelingUP(lvl, hero.class.s_STR, hero.class.v_STR);
  hero.int = levelingUP(lvl, hero.class.s_INT, hero.class.v_INT);
  hero.def = levelingUP(lvl, hero.class.s_DEF, hero.class.v_DEF);
  hero.spd = levelingUP(lvl, hero.class.s_SPD, hero.class.v_SPD);
  hero.luk = levelingUP(lvl, hero.class.s_LUK, hero.class.v_SPD);
}

function sayingthing() {
  hero ]= "ah";
}

function levelingUP(lvl, stat, s_varience) {
   tempStat = stat;
   min = GM.g_varience_min;
   max = s_varience;
  for (i = 0; i < lvl; i++) {

    tempStat = tempStat + Math.floor(Math.random() * (max - min) + min);
  }

  return tempStat;
}
e = {
  "suitcase": 0x1F4BC,
  "seed": 0x1F331,
  "tree": 0x1F332,
  "heart": 0x2764,
  "crystalBall": 0x1F52E,
  "swords": 0x2694,
  "gradCap": 0x1F393,
  "sheild": 0x1F6E1,
  "dustCloud": 0x1F4A8,
  "fourleaf": 0x2618,
}

function emojiOut(emojiNum) {
  return String.fromCodePoint(emojiNum);
}

function rr(user) {
  var hero_weapon = weapons[Math.floor(Math.random() * weapons.length)]
  var hero = heroObj;
  setupHero(hero);
  setRandomHero(hero);

  var message = "";
  var newline = " | ";

  message += "/me forges " + user + " into " + user + " the " + hero.title + "! [ | ";
  message += "👤" + ":" + hero.class.class + newline;
  if (hero.lvl <= (Math.floor(GM.g_LVL_max / 2))) {
    message += "🌱";
  } else {
    message += "🌲";
  }
  message += ":" + hero.lvl + newline;
  message += "❤️" + ":" + hero.hp + newline;
  message += "⚔️" + ":" + hero.mp + newline;
  message += "🎓" + ":" + hero.int + newline;
  message += "🛡️" + ":" + hero.def + newline;
  message += "💨" + ":" + hero.spd + newline;
  message += "☘️" + ":" + hero.luk + newline;
  message += "]";

  return message;
}

rr(arg);
