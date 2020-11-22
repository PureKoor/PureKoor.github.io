tx=[`Gooey`,`BIG`,`ˢᵐᵒˡ`,`Cute`,`Rubber`,`Fluffy`,`Buff`,`Chubby`,``,``,``,``];
ra=[`slowly`,`meticulously`,`casually`,`sluggishly`,`rapidly`,`swiftly`];
tf=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`Bear`,`Cat`,`Chicken`,`Cow`,`Crab`,`Croc`,`Deer`,`Dog`,`Dragon`,`Goat`,`Giraffe`,`Horse`,`Ott`,`Owl`,`Raccoon`,`Raven`,`Shark`,`Tiger`,`Tanuki`,`Wolf`,`Ox`,`Tycoon`]; 

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function transformation(user) {
  str = "/me now ";
  str += choose(ra);
  str += "transforms " + user +" into a ";
  str += choose(tx);
  str += choose(tf);
  
  return str;
}
transformation(arg);
