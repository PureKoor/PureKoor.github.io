tx=[`Gooey`,`BIG`,`ˢᵐᵒˡ`,`Cute`,`Rubber`,`Fluffy`,`Buff`,`Chubby`,``,``,``,``];
ra=[`slowly`,`meticulously`,`casually`,`sluggishly`,`rapidly`,`swiftly`];
tf=[`Bear`,`Cat`,`Chicken`,`Cow`,`Crab`,`Croc`,`Deer`,`Dog`,`Dragon`,`Goat`,`Giraffe`,`Horse`,`Ott`,`Owl`,`Raccoon`,`Raven`,`Shark`,`Tiger`,`Tanuki`,`Wolf`,`Ox`,`Tycoon`]; 

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
