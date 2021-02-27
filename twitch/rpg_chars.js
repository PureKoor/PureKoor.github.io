//Edit this file at https://jsfiddle.net/3ed2buqj/1/

// rpg char maker

/*
Attributes for actions generally:
- Actions that the user is skill at is a buff
- Actions that are neutral have no buff/debuff
- Actions that the user is unskill at are a debuff
Power = Strength based actions
Wisdom = Magic based actions
Agility = Speed based actions
Prayer = Healing based actions
*/
const ATTRIBUTE = ['power','wisdom','agility','prayer'];
const ATTRIBUTE_EMOJI = ["🌋","🌟","👟","✝️"]
//Game Master
const GM = {
		"g_LVL_max": 10,
    "g_LVL_min": 1,
    "g_varience_min": 1,
};

// Make into array like charClass
/*
weaponATK = damage done with physical
weaponMGK = action done with magic
*/
var weapons = [
    {
	"ID": 1,
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


//IRON FAN, FURRY FAN, EDGE FAN, etc
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




function warriorExperience(lvl,hp,mp,str,int,def,spd,luk)
{

}

function mageExperience(hp,mp,etc)
{
 //do experience stat for next level make a random number between the max emxperience and subtract +1 that to find the person amount of exp needed for the next level
}

function thiefExperience(hp,mp,etc)
{

}
//array of classes to make so that they can hold the values for the final function
/*
Warrior = High STR & HP. ++Power --Wisdom
Mage = High MP & INT. ++ Wisdom --Power
Thief = High SPD & LUK. ++Agility --Power
Cleric = HIGH INT & DEF. ++Prayer --Wisdom
*/
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

function sayingthing(){
	/*"x has classed into y. Base: 💼:Warrior 🌱:1 ❤️: 0 🔮: 0 ⚔️: 0 🎓: 0 🛡: 0 💨: 0 ☘️: 0"
	output for save1
	!fight [N:ZaszTheCroc The Magically C:W⚔️11🔮18]
	Check to see if person can use weapon
	"Holding x with damage of x" or "holding x but it cna't be used. Defeat is ineviable"
  
  For the levels ranges they get different emoji, 0-10🌱 11-49 🌸 ?-100 🌲, 100 should be seen as MAX
  */
  
}

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
//emoji
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
// hero class
    var hc = Math.floor(Math.random()*charClass.length);
    var cc = charClass[hc];
// temp stats   
    var h_class = cc.class;
    var lvl = Math.floor((Math.random()*GM.g_LVL_max) + GM.g_LVL_min);
    var hp = levelingUP(lvl,cc.s_HP,cc.v_HP);
    var mp = levelingUP(lvl,cc.s_MP,cc.v_MP);
    var str= levelingUP(lvl,cc.s_STR,cc.v_STR);
    var int= levelingUP(lvl,cc.s_INT,cc.v_INT);
    var def= levelingUP(lvl,cc.s_DEF,cc.v_DEF);
    var spd= levelingUP(lvl,cc.s_SPD,cc.v_SPD);
    var luk= levelingUP(lvl,cc.s_LUK,cc.v_LUK);
//
   var hero_weapon = weapons[Math.floor(Math.random()*weapons.length)]
   	"ID": 1,
        "name": "Axe",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 5,
 
 //COMMENTS CAN NOT BE IN FINAL CODE FOR THE GAME. YOU'll NEED TO HAVE AN EXTRA FILE THAT EXPLAINS ALL OF THE CODE!!!
	// use https://jsfiddle.net/q1Ljg2fp/21/ to check code!
	
        
    //give random level between char base level thru 100
    //If user getts level 100, tell them they maxed out in levels in their stats callback  
    
   //Maybe make rpgCharStatsDecoderFile for future things that can be done with the rpg. Like fighting other monsters
   
   //use  $(query) to see if string is empty for sniff, monsterfight, etc
   //Final Message
   var message = "";
   var newline = " | ";
   
   message += "/me forges " + user + " into " + user + " the X(Great/Holy/Fluff/etc)! [ | ";
   message += "👤" + ":" + h_class + newline;
   if (lvl <= (Math.floor(GM.g_LVL_max / 2))){   
   		message += "🌱";   
      }else{
      message += "🌲";
      }
   message += ":" + lvl + newline;   
   message += "❤️" + ":" + hp + newline;
   message += "⚔️" + ":" + mp + newline;
   message += "🎓" + ":" + int + newline;
   message += "🛡" + ":" + def + newline;
   message += "💨" + ":" + spd + newline;
   message += "☘️" + ":" + luk + newline;
   message += "]";
    
    return message; ; 
}

rr(arg);
