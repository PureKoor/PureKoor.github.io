rock = `👊 ROCK ⛰️`;
paper = `✋ PAPER 📄`;
scissors = `✌ SCISSORS ✂️`;


rps = [{"ATK": rock, "DED": scissors}
       {"ATK": paper, "DED": rock},
       {"ATK": scissors, "DED": paper}];
randos = [`everyone`,`werewolves`,`tycoons`,`raccoons`,`tigers`];

function choose(arr){
  temps = arr[Math.floor(Math.random()*arr.length)];
  if (temps != ``){
   temps += " ";
  }
   return temps;
}

function pickA_An(arr){
 x = arr.charAt(0).toUpperCase();
 temp = "";
 if (x == 'A' || x ==  'E' || x ==  'I' || x ==  'O' || x ==  'U') {
    temp = " an ";
  } else {
    temp = " a ";
  }
   return temp;
}

function pickFighter(){
  var picker = Math.floor((Math.random() * 100) + 1);
  if(picker > 80){
    if(picker % 2 != 0){
        return "Koor ";
    } else {
        return choose(randos);
    }
  } else {
      return "themselves ";
  }
}

function hug(user, touser) {


  if (user == touser){
  hugee = "everyone";
  }
    
  userDraw = rps[Math.random() * rps.length];
  touserDraw = rps[Math.random() * rps.length];
  
  winner = user;
  if (userDraw.ATK != touserDraw.ATK)
  {
    if(userDraw.DED == touserDraw.ATK){
      winner = touser;
    }
  } else {
      winner = "draw";
  }
  
  str = "/me 👊ROCK⛰️/✋PAPER📄/✌SCISSORS✂️!!! ⚔️🟦➜" + user + " vs ⚔️🟠➜" + touser + " !!! ";
  str += "⚔️🟦 plays " + userDraw.ATK;
  str += "⚔️🟠 plays " + touserDraw.ATK;
  str += choose(ra);
  str += "to give " + hugee;
  str += pickA_An(hug_result);
  str += hug_result;
  str += " 🤗";

  return str;
}
hug(arg,arg1);
