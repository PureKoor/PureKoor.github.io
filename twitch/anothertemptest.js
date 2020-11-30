//ahhhhhhhhhhhhhhhhhhhhhhh

const ATTRIBUTE = ['power','wisdom','agility','prayer'];

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

function rr(user) {  

    var heroRole = 0;
	  var minLVL = 1;
	  var maxLVL = 99;
    
    var health = charClass[heroRole].s_HP;   
    return "/me still testing " + "heroRole ❤️:" + health + " class " + charClass[0].attributeBuff;  
}
rr(arg);
