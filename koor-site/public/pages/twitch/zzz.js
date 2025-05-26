var r = "koor";
var ATTRIBUTE = ['power', 'mythic', 'purity'];
var GM = {
  "g_LVL_max": 10,
  "g_LVL_min": 1,
  "g_varience_min": 1,
};
var charNameTitle = [
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
 var temp = "Create stats object instead of having everyting spread out!";
}

function h_stats (_hp,_mp,_str,_int,_def,_spd,_luk) {
  this.hp = _hp,
  this.mp = _mp,
  this.str = _str,
  this.int = _int,
  this.def = _def,
  this.spd = _spd,
  this.luk = _luk
}  

function heroCreateStats(_id,_class,_title,_LVL,_sHP,_sMP,_sSTR,_sINT,_sDEF,_sSPD,_sLUK,_vHP,_vMP,_vSTR,_vINT,_vDEF,_vSPD,_vLUK) {
  var static_stats = new h_stats(0,0,0,0,0,0,0);
  var statsChangeRate = new h_stats(0,0,0,0,0,0,0);
  
  this.id = _id,
  this.list = static_stats,
  this.scr = statsChangeRate,
  this.class = _class,
  this.title = _title,
  this.lvl = _LVL,
  static_stats.hp = _sHP,
  static_stats.mp = _sMP,
  static_stats.str = _sSTR,
  static_stats.int = _sINT,
  static_stats.def = _sDEF,
  static_stats.spd = _sSPD,
  static_stats.luk = _sLUK,
  statsChangeRate.hp = _vHP,
  statsChangeRate.mp = _vMP,
  statsChangeRate.str = _vSTR,
  statsChangeRate.int = _vINT,
  statsChangeRate.def = _vDEF,
  statsChangeRate.spd = _vSPD,
  statsChangeRate.luk = _vLUK,
  this.attributeBuff = 0,
  this.attriuteDebuff = 0
  
}

//(_id,_class,_title,_LVL,_sHP,_sMP,_sSTR,_sINT,_sDEF,_sSPD,_sLUK,_vHP,_vMP,_vSTR,_vINT,_vDEF,_vSPD,_vLUK)

var charClass = {
	error: new heroCreateStats(0,"ERROR","null",-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999,-999),
	warrior: new heroCreateStats(1,"Warrior","null",1,1,0,9,2,9,2,3,99,99,99,99,99,99,99),
	mage: new heroCreateStats(2,"Mage","null",1,1,2,3,7,4,6,3,99,99,99,99,99,99,99),
	thief: new heroCreateStats(3,"Thief","null",1,1,1,6,5,5,10,8,99,99,99,99,99,99,99),
	cleric: new heroCreateStats(4,"Cleric","null",1,1,1,4,6,4,5,4,99,99,99,99,99,99,99),
	fighter: new heroCreateStats(5,"Fighter","null",1,1,0,14,3,7,9,2,99,99,99,99,99,99,99),
}

function randomCharClass(){
var temp = [charClass.error, charClass.warrior,charClass.mage,charClass.thief,charClass.cleric,charClass.fighter]

var rngNum = Math.floor((Math.random() * temp.length) + 1);

return temp[rngNum];
}

var battleStats = new h_stats(-999,-999,-999,-999,-999,-999,-999);
var heroObj = {
  stats: charClass.error,
  class: charClass.error.class,
  title: charClass.error.title,
  lvl: -999,
  ht: -999,
  hp: -999,
  mp: -999,
  str: -999,
  int: -999,
  def: -999,
  spd: -999,
  luk: -999,
  battle : battleStats
};

function setupHero(hero) {
  hero.stats = randomCharClass();  
  hero.class = hero.stats.class;
  hero.title = charNameTitle[Math.floor(Math.random() * charNameTitle.length)];
}

function setRandomHero(hero) {
  hero.lvl = Math.floor((Math.random() * GM.g_LVL_max) + GM.g_LVL_min);
  var lvl = hero.lvl;

  hero.hp = levelingUP(lvl, hero.stats.list.hp, hero.stats.scr.hp);
  hero.mp = levelingUP(lvl, hero.stats.list.mp, hero.stats.scr.mp);
  hero.str = levelingUP(lvl, hero.stats.list.str, hero.stats.scr.str);
  hero.int = levelingUP(lvl, hero.stats.list.int, hero.stats.scr.int);
  hero.def = levelingUP(lvl, hero.stats.list.def, hero.stats.scr.def);
  hero.spd = levelingUP(lvl, hero.stats.list.spd, hero.stats.scr.spd);
  hero.luk = levelingUP(lvl, hero.stats.list.luk, hero.stats.scr.luk);
  hero.battle.hp = hero.hp;
  hero.battle.mp = hero.mp;
  hero.battle.str = hero.str;
  hero.battle.int = hero.int;
  hero.battle.def = hero.def;
  hero.battle.spd = hero.spd;
  hero.battle.luk = hero.luk;
}

function levelingUP(lvl, stat, s_varience) {
   var tempStat = stat;
   var min = GM.g_varience_min;
   var max = s_varience;
  for (i = 0; i < lvl; i++) {

    tempStat = tempStat + Math.floor(Math.random() * (max - min) + min);
  }

  return tempStat;
}

function rr(user) {
  var hero = heroObj;
  setupHero(hero);
  setRandomHero(hero);

console.log("hello");

  var message = "";
  var newline = " | ";

  message += "/me forges " + user + " into " + user + " the " + hero.title + "! [ | ";
  message += "👤" + ":" + hero.stats.class + newline;
  if (hero.lvl <= (Math.floor(GM.g_LVL_max / 2))) {
    message += "🌱";
  } else {
    message += "🌲";
  }
  message += ":" + hero.lvl + newline;
  message += "❤️" + ":" + hero.hp + newline;
  message += "🔮" + ":" + hero.mp + newline;
  message += "⚔️" + ":" + hero.str + newline;
  message += "🎓" + ":" + hero.int + newline;
  message += "🛡️" + ":" + hero.def + newline;
  message += "💨" + ":" + hero.spd + newline;
  message += "☘️" + ":" + hero.luk + newline;
  message += "]";

  return message;

}

//rr(arg);
