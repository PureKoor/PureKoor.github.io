ATTRIBUTE = ['power', 'mythic', 'purity'];
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
function stats4Hero(){
temp = "Create stats object instead of having everyting spread out!";
}

function heroCreateStats(_id,_class,_title,_sLVL,_sHP,_sMP,_sSTR,_sINT,_sDEF,_sSPD,_sLUK,_vHP,_vMP,_vSTR,_vINT,_vDEF,_vSPD,_vLUK) {
  this.id = _id,
  this.class = _class,
  this.s_LVL = _sLVL,
  this.s_HP = _sHP,
  this.s_MP = _sMP,
  this.s_STR = _sSTR,
  this.s_INT = _sINT,
  this.s_DEF = _sDEF,
  this.s_SPD = _sSPD,
  this.s_LUK = _sLUK,
  this.v_HP = _vHP,
  this.v_MP = _vMP,
  this.v_STR = _vSTR,
  this.v_INT = _vINT,
  this.v_DEF = _vDEF,
  this.v_SPD = _vSPD,
  this.v_LUK = _vLUK,
  this.attributeBuff = ATTRIBUTE[0],
  this.attriuteDebuff = ATTRIBUTE[1]
  
}

h_error = new heroCreateStats(0,"ERROR","null",-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999)
h_warrior = new heroCreateStats(1,"Warrior","null",2,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
h_mage = new heroCreateStats(2,"Mage","null",2,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
h_error = new heroCreateStats(3,"Thief","null",2,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
h_error = new heroCreateStats(4,"Cleric","null",2,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
h_error = new heroCreateStats(5,"Fighter","null",2,1,1,1,1,1,1,1,1,1,1,1,1,1,1)


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
  hero.title = charNameTitle[Math.floor(Math.random() * charNameTitle.length)];
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
