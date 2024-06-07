ATTRIBUTE = ["power", "mythic", "purity"];
GM = {
  g_LVL_max: 10,
  g_LVL_min: 1,
  g_varience_min: 1,
};
charNameTitle = [
  "Fluffy",
  "Furry",
  "Great",
  "Holy",
  "Noble",
  "Popular",
  "Transformative",
  "Vicious",
  "Wary",
];
charClass = [
  {
    id: 0,
    class: "Error",
    title: "null",
    s_LVL: -999,
    s_HP: -999,
    s_MP: -999,
    s_STR: -999,
    s_INT: -999,
    s_DEF: -999,
    s_SPD: -999,
    s_LUK: -999,
    v_HP: 4,
    v_MP: 8,
    v_STR: 2,
    v_INT: 10,
    v_DEF: 5,
    v_SPD: 2,
    v_LUK: 2,
    attributeBuff: ATTRIBUTE[0],
    attributeDebuff: ATTRIBUTE[1],
  },
  {
    id: 1,
    class: "Warrior",
    title: "null",
    s_LVL: 6,
    s_HP: 1,
    s_MP: 0,
    s_STR: 20,
    s_INT: 5,
    s_DEF: 8,
    s_SPD: 3,
    s_LUK: 1,
    v_HP: 4,
    v_MP: 8,
    v_STR: 2,
    v_INT: 10,
    v_DEF: 5,
    v_SPD: 2,
    v_LUK: 2,
    attributeBuff: ATTRIBUTE[0],
    attributeDebuff: ATTRIBUTE[1],
  },
  {
    id: 2,
    class: "Mage",
    title: "null",
    s_LVL: 7,
    s_HP: 2,
    s_MP: 0,
    s_STR: 3,
    s_INT: 15,
    s_DEF: 4,
    s_SPD: 11,
    s_LUK: 1,
    v_HP: 4,
    v_MP: 8,
    v_STR: 2,
    v_INT: 10,
    v_DEF: 5,
    v_SPD: 2,
    v_LUK: 2,
    attributeBuff: ATTRIBUTE[1],
    attributeDebuff: ATTRIBUTE[0],
  },
  {
    id: 3,
    class: "Thief",
    title: "null",
    s_LVL: 6,
    s_HP: 3,
    s_MP: 0,
    s_STR: 20,
    s_INT: 5,
    s_DEF: 8,
    s_SPD: 3,
    s_LUK: 1,
    v_HP: 4,
    v_MP: 8,
    v_STR: 2,
    v_INT: 10,
    v_DEF: 5,
    v_SPD: 2,
    v_LUK: 2,
    attributeBuff: ATTRIBUTE[0],
    attributeDebuff: ATTRIBUTE[0],
  },
  {
    id: 4,
    class: "Cleric",
    title: "null",
    s_LVL: 6,
    s_HP: 4,
    s_MP: 0,
    s_STR: 20,
    s_INT: 5,
    s_DEF: 8,
    s_SPD: 3,
    s_LUK: 1,
    v_HP: 4,
    v_MP: 8,
    v_STR: 2,
    v_INT: 10,
    v_DEF: 5,
    v_SPD: 2,
    v_LUK: 2,
    attributeBuff: ATTRIBUTE[0],
    attributeDebuff: ATTRIBUTE[0],
  },
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
  luk: -999,
};
function setupHero(hero) {
  heroClassRNG = Math.floor(Math.random() * charClass.length + 1);
  hero.class = charClass[heroClassRNG];
  hero.title = charNameTitle[Math.floor(Math.random() * charNameTitle.length)];
}

function setRandomHero(hero) {
  hero.lvl = Math.floor(Math.random() * GM.g_LVL_max + GM.g_LVL_min);
  lvl = hero.lvl;
  hero.hp = levelingUP(lvl, hero.class.s_HP, hero.class.v_HP);
  hero.mp = levelingUP(lvl, hero.class.s_MP, hero.class.v_MP);
  hero.str = levelingUP(lvl, hero.class.s_STR, hero.class.v_STR);
  hero.int = levelingUP(lvl, hero.class.s_INT, hero.class.v_INT);
  hero.def = levelingUP(lvl, hero.class.s_DEF, hero.class.v_DEF);
  hero.spd = levelingUP(lvl, hero.class.s_SPD, hero.class.v_SPD);
  hero.luk = levelingUP(lvl, hero.class.s_LUK, hero.class.v_SPD);
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

function rr(user) {
  hero = heroObj;
  setupHero(hero);
  setRandomHero(hero);

  message = "";
  newline = " | ";

  message +=
    "/me forges " + user + " into " + user + " the " + hero.title + "! [ | ";
  message += "👤" + ":" + hero.class.class + newline;
  if (hero.lvl <= Math.floor(GM.g_LVL_max / 2)) {
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
