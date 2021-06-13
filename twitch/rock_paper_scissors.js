rock = `👊 ROCK ⛰️`;
paper = `✋ PAPER 📄`;
scissors = `✌ SCISSORS ✂️`;
fighter = `error`;

draw = "draw";
rps = [{"ATK": rock, "DED": scissors},
       {"ATK": paper, "DED": rock},
       {"ATK": scissors, "DED": paper}];

randos = [`Everyone`,`Chat`,`Y'all`,`Werewolves`,`Tycoons`,`Raccoons`,`Tigers`,`All Vtubers`,`The Furry Fandom`];

winPhrase = [`comes out victorious!!!`, `r iz winnar`,`won!`,`is the winner`,`is standing`];

function choose(arr){
  temps = arr[Math.floor(Math.random()*arr.length)];
  if (temps != ``){
   temps += " ";
  }
   return temps;
}

function pickFighter(){
  picker = Math.floor((Math.random() * 100) + 1);
  if(picker > 60){
    if(picker % 2 != 0){
        return "Koor";
    } else {
        return choose(randos);
    }
  } else {
      return "themselves";
  }
}

function rockPaperScissors(user, touser) {
  userDraw = rps[Math.floor(Math.random() * rps.length)];
  touserDraw = rps[Math.floor(Math.random() * rps.length)];
       
  if (user == touser){
       fighter = pickFighter();
  } else{
       fighter = touser;
  }
  
  winner = user;
  if (userDraw.ATK != touserDraw.ATK){
    if(userDraw.DED == touserDraw.ATK){
      winner = fighter;
    }
  } else {
      winner = draw;
  }
  
  str = "/me ---ROCK-PAPER-SCISSORS--- ⚔️🟦➜" + user + " ❗️VS❗️ ⚔️🟠➜" + fighter + " !!! ";
  str += "⚔️🟦 plays " + userDraw.ATK + ". ";
  str += "⚔️🟠 plays " + touserDraw.ATK + ". ";
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
