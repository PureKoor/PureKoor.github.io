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

// Make into array like charClass
/*
weaponATK = damage done with physical
weaponMGK = action done with magic
*/
var weapons = [
    {
        "name": "Axe",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 8,
    },
    {
        "name": "Blade",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 3,
    },
    {
        "name": "Boomerang",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 4,
    },
		{
        "name": "Broad Sword",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 10,
    }, 
    {
        "name": "Club",
        "weaponType": ATTRIBUTE[0],
        "weaponATK" : 7,
    },
    {
        "name": "Claw",
        "weaponType": ATTRIBUTE[2],
        "weaponATK" : 4,
    },
    {
        "name": "Dart",
        "weaponType": ATTRIBUTE[3],
        "weaponATK" : 2,
    },

    ['Dagger',1],
    ['Fan',1],
    ['Fists',1],
    ['Hammer',1],    
    ['Knife', 7],
    ['Knuckles',1],
    ['Lance',1],    
    ['Mace',1],
    ['Needle',1 ],
    ['Sword',1],
    ['Stick', 2],
    ['Scissors',1],    
    ['Whip', 1],
    ['Sai',1]
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




function warriorExperience(hp,mp,etc)
{

}

function mageExperience(hp,mp,etc)
{
 //do experience stat for next level make a random number between the max emxperience and subtract +1 that to find the person amount of exp needed for the next level
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
				"s_HP": 11,
        "s_MP": 0,
        "s_STR":20,
        "s_INT":5,
        "s_DEF":8,
        "s_SPD":3,
        "s_LUK":1,
        "stats_variance": 4,
        "attributeBuff": ATTRIBUTE[0],
        "attributeDebuff": ATTRIBUTE[1],  
    },
    {
        "id": 1,
        "class": "Mage",
        "s_LVL":7,
        "s_HP": 5,
        "s_MP": 0,
        "s_STR":3,
        "s_INT":15,
        "s_DEF":4,
        "s_SPD":11,
        "s_LUK": 1,
        "stats_variance": 4,
        "attributeBuff": ATTRIBUTE[1],
        "attributeDebuff": ATTRIBUTE[0],  
    },
    {
        "id": 2,
        "class": "Thief",
        "s_LVL":6,
				"s_HP": 11,
        "s_MP": 0,
        "s_STR":20,
        "s_INT":5,
        "s_DEF":8,
        "s_SPD":3,
        "s_LUK":1,
        "stats_variance": 4,
        "attributeBuff": ATTRIBUTE[3],
        "attributeDebuff": ATTRIBUTE[0],  
    },
    {
        "id": 3,
        "class": "Cleric",
        "s_LVL":6,
				"s_HP": 11,
        "s_MP": 0,
        "s_STR":20,
        "s_INT":5,
        "s_DEF":8,
        "s_SPD":3,
        "s_LUK":1,
        "stats_variance": 4,
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

function rr(user) {  

  //array selects class which then puts numbers to said variables
    //var heroRole = Math.floor(Math.random()*charClass.length);
    var heroRole = 0;
	  var minLVL = 1;
  // Max level is 100, the minLVL will always add 1
	  var maxLVL = 99;
    
    var health = charClass[heroRole].s_HP;
    //var magicPoints = charClass[heroRole].s_mp ; 
    //charClass[heroRole].s_LVL = Math.floor(Math.random()*maxLVL) + minLVL; 	
    
    
    //give random level between char base level thru 100
    //If user getts level 100, tell them they maxed out in levels in their stats callback  
    
   //Maybe make rpgCharStatsDecoderFile for future things that can be done with the rpg. Like fighting other monsters
   
   //use  $(query) to see if string is empty for sniff, monsterfight, etc
    
    return "/me still testing " + "heroRole ❤️:" + health + " class " + charClass[0].attributeBuff;  
}

rr(arg);
