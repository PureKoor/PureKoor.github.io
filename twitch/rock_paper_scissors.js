rock = `👊 ROCK ⛰️`;
paper = `✋ PAPER 📄`;
scissors = `✌ SCISSORS ✂️`;
fighter = `error`;

draw = "draw";
rps = [{"ATK": rock, "DED": scissors},
       {"ATK": paper, "DED": rock},
       {"ATK": scissors, "DED": paper}];

randos = [`everyone`,`werewolves`,`tycoons`,`raccoons`,`tigers`,`all Vtubers`,`the Furry Fandom`];

winPhrase = [`comes out victorious!!!`, `r iz winnar`,`has won!`];

function choose(arr){
  temps = arr[Math.floor(Math.random()*arr.length)];
  if (temps != ``){
   temps += " ";
  }
   return temps;
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

function rockPaperScissors(user, touser) {
  if (user == touser){
       fighter = choose(randos);
  } else{
       fighter = touser;
  }
  
  userDraw = Math.random() * rps.length;
  touserDraw = Math.random() * rps.length;
  
  winner = user;
  if (rps[userDraw].ATK != rps[touserDraw].ATK){
    if(rps[userDraw].DED == rps[touserDraw].ATK){
      winner = fighter;
    }
  } else {
      winner = draw;
  }
  
  str = "/me 👊ROCK⛰️/✋PAPER📄/✌SCISSORS✂️!!! ⚔️🟦➜" + user + " vs ⚔️🟠➜" + fighter + " !!! ";
  str += "⚔️🟦 plays " + rps[userDraw].ATK + ". ";
  str += "⚔️🟠 plays " + rps[touserDraw].ATK + ". ";
  str += "THE BATTLE HEATS UP... then... ";
  if(winner == draw){
       str += "a " + draw + "... " ;
       str += "Both live for another battle yet.";
  } else {
       str += winner + " " + choose(winPhrase);
       str += "Congratz on your victory.";
  }
  return str;
}
rockPaperScissors(arg,arg1);
