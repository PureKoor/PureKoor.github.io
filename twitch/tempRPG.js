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
        "weaponATK" : 5,
    },
    {
        "name": "Blade",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
    {
        "name": "Boomerang",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
		{
        "name": "Broad Sword",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 5,
    }, 
    {
        "name": "Club",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 5,
    },
    {
        "name": "Claw",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
    {
        "name": "Dart",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Dagger",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
    {
        "name": "Fan",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Fist",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
    {
        "name": "Hammer",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 5,
    },
    {
        "name": "Knife",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
    {
        "name": "Knuckles",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    },
    {
        "name": "Lance",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Mace",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Needle",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Sword",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Wand",
        "weaponType": ATTRIBUTE[1],
        "weaponATK" : 5,
    },
    {
        "name": "Staff",
        "weaponType": ATTRIBUTE[1],
        "weaponATK" : 5,
    },
    {
        "name": "Rod",
        "weaponType": ATTRIBUTE[1],
        "weaponATK" : 5,
    },
    {
        "name": "Stick",
        "weaponType": ATTRIBUTE[1],
        "weaponATK" : 5,
    },
    {
        "name": "Scissors",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
    {
        "name": "Whip",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 5,
    },
		{
        "name": "Sai",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 5,
    }
];

var weaponType = [
		{
    		"name": "Iron",
        "bonus": ATTRIBUTE[0],
        "bonus_num": 5,
    },
    {
    
    },
   
    'iron','furry','edge','snoose','holy','dragon','Legendary','Vtuber','Popufur','Digital','Friendship'
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
        //stat varience per stat
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
        //stat varience per stat
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
        //stat varience per stat
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
        //stat varience per stat
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
    console.log("Tis the start: " + tempStat);
    for (i = 0; i < lvl; i++) {
    		    
				tempStat = tempStat +  Math.floor( Math.random()*(max - min)+min);
        console.log(i+"#: "+tempStat);
		} 
    
    return tempStat;
}
var e = {
		"suitcase" : 0x1F4BC,
    "seed" : 0x1F331,
    "tree" : 0x1F332,
    "heart" : 0x2764,
    "crystalBall" : 0x1F52E,
    "swords" : 0x2694,
    "gradCap" : 0x1F393,
    "sheild" : 0x1F6E1,
    "dustCloud" : 0x1F4A8,
    "fourleaf" : 0x2618,    
}

function emojiOut(emojiNum){
    console.log("new emoji activated")
    return String.fromCodePoint(emojiNum);
}

function rr(user) {  
 		var hc = Math.floor(Math.random()*charClass.length);
    console.log("hc equals: "+ hc);
    var cc = charClass[hc];
    console.log("cc is equal to: " + cc.class); 
    var h_class = 	cc.class;
    var lvl =				Math.floor((Math.random()*GM.g_LVL_max) + GM.g_LVL_min);
    console.log("lvl is: " + lvl);
		var hp =		 		levelingUP(lvl,cc.s_HP,cc.v_HP);
    var mp =		 		levelingUP(lvl,cc.s_MP,cc.v_MP);
    var str=				levelingUP(lvl,cc.s_STR,cc.v_STR);
    var int=				levelingUP(lvl,cc.s_INT,cc.v_INT);
    var def=				levelingUP(lvl,cc.s_DEF,cc.v_DEF);
    var spd=				levelingUP(lvl,cc.s_SPD,cc.v_SPD);
    var luk=				levelingUP(lvl,cc.s_LUK,cc.v_LUK);
 
   var message = "";
   var newline = " | ";
   
   message += "/me forges " + user + " into " + user + " the X(Great/Holy/Fluff/etc)! [ | ";
   message += emojiOut(e.suitcase) + ":" + h_class + newline;
   if (lvl >= (Math.floor(GM.g_LVL_max / 2))){   
   		message += emojiOut(e.seed);   
      }else{
      message += emojiOut(e.tree);
      }
   message += ":" + lvl + newline;   
   message += emojiOut(e.heart) + ":" + hp + newline;
   message += emojiOut(e.swords) + ":" + mp + newline;
   message += emojiOut(e.gradCap) + ":" + int + newline;
   message += emojiOut(e.sheild) + ":" + def + newline;
   message += emojiOut(e.dustCloud) + ":" + spd + newline;
   message += emojiOut(e.fourleaf) + ":" + luk + newline;
   message += "]";
    
    return message; 
}

rr(arg);
