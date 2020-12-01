const ATTRIBUTE = ['power','wisdom','agility','prayer'];
const GM = {
		"g_LVL_max": 10,
    "g_LVL_min": 1,
    "g_varience_min": 1,
};

var weapons = [
    {
        "name": "Axe",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 5
     }
];

var weaponType = [
		{
    		"name": "Iron",
        "bonus": ATTRIBUTE[0],
        "bonus_num": 5,
    }
];

var charClass = [
    {
        "id": 0,
        "class": "Warrior",
        "s_LVL":6,
				"s_HP": 1,
        "s_MP": 0,
        "s_STR":20,
        "s_INT":5,
        "s_DEF":8,
        "s_SPD":3,
        "s_LUK":1,
				"v_HP": 4,
        "v_MP": 8,
        "v_STR":2,
        "v_INT":10,
        "v_DEF":5,
        "v_SPD":2,
        "v_LUK":2,
        "attributeBuff": ATTRIBUTE[0],
        "attributeDebuff": ATTRIBUTE[1],  
    },
    {
        "id": 1,
        "class": "Mage",
        "s_LVL":7,
        "s_HP": 2,
        "s_MP": 0,
        "s_STR":3,
        "s_INT":15,
        "s_DEF":4,
        "s_SPD":11,
        "s_LUK": 1,
				"v_HP": 4,
        "v_MP": 8,
        "v_STR":2,
        "v_INT":10,
        "v_DEF":5,
        "v_SPD":2,
        "v_LUK":2,
        "attributeBuff": ATTRIBUTE[1],
        "attributeDebuff": ATTRIBUTE[0],  
    },
    {
        "id": 2,
        "class": "Thief",
        "s_LVL":6,
				"s_HP": 3,
        "s_MP": 0,
        "s_STR":20,
        "s_INT":5,
        "s_DEF":8,
        "s_SPD":3,
        "s_LUK":1,
				"v_HP": 4,
        "v_MP": 8,
        "v_STR":2,
        "v_INT":10,
        "v_DEF":5,
        "v_SPD":2,
        "v_LUK":2,
        "attributeBuff": ATTRIBUTE[3],
        "attributeDebuff": ATTRIBUTE[0],  
    },
    {
        "id": 3,
        "class": "Cleric",
        "s_LVL":6,
				"s_HP": 4,
        "s_MP": 0,
        "s_STR":20,
        "s_INT":5,
        "s_DEF":8,
        "s_SPD":3,
        "s_LUK":1,
				"v_HP": 4,
        "v_MP": 8,
        "v_STR":2,
        "v_INT":10,
        "v_DEF":5,
        "v_SPD":2,
        "v_LUK":2,
        "attributeBuff": ATTRIBUTE[3],
        "attributeDebuff": ATTRIBUTE[1],  
    }
];

function levelingUP(lvl,stat,s_varience){
		var tempStat = stat;
    var min = GM.g_varience_min;
    var max = s_varience;
    for (i = 0; i < lvl; i++) {    		    
	tempStat = tempStat +  Math.floor( Math.random()*(max - min)+min);
		} 
    return tempStat;
}

function rr(user) {  
 		var hc = Math.floor(Math.random()*charClass.length);
    var cc = charClass[hc];
    var h_class = cc.class;
    var lvl = Math.floor((Math.random()*GM.g_LVL_max) + GM.g_LVL_min);
		var hp = levelingUP(lvl,cc.s_HP,cc.v_HP);
    var mp = levelingUP(lvl,cc.s_MP,cc.v_MP);
    var str= levelingUP(lvl,cc.s_STR,cc.v_STR);
    var int= levelingUP(lvl,cc.s_INT,cc.v_INT);
    var def= levelingUP(lvl,cc.s_DEF,cc.v_DEF);
    var spd= levelingUP(lvl,cc.s_SPD,cc.v_SPD);
    var luk= levelingUP(lvl,cc.s_LUK,cc.v_LUK);
 
   var message = "";
   var newline = " | ";
   
   message += "/me forges " + user + " into " + user + " the X(Great/Holy/Fluff/etc)! [ | ";
   message += ":" + h_class + newline;
   message += ":" + lvl + newline;   
   message += ":" + hp + newline;
   message += ":" + mp + newline;
   message += ":" + int + newline;
   message += ":" + def + newline;
   message += ":" + spd + newline;
   message += ":" + luk + newline;
   message += "]";
    
    return message; 
}

rr(arg);
