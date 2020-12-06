size = ["micro","macro","general human height","tny","lorgest","bggest","ˢᵐᵒˡ"];
sizeSize =["12ft","11ft","10ft","9ft","8ft","7ft","6ft","5ft","4ft","3ft","2ft","1ft","smol as a rat","ˢᵐᵒˡ as a rat","big as a donut"];
parts = ["general size","paw","maw","tail","height","wallet","food","shirt","pants","shoes","hair","height","computer","phone"];

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function mm(user) {
 
  var numOfOptions = 2;
  
  if (user == "") {
    return "/me changes the size of the world to the " + choose(smell) + " size!!!";  
  }
         
 switch (Math.floor(Math.random()*numOfOptions)) {
  case 1:
    return "/me changes " + user + "'s " + choose(parts) + " to become " + choose(size);
    break;
  case 2:
    return "/me changes " + user + "'s " + choose(parts) + " to become the " + choose(sizeSize) + " size";
    break;
  }
}
mm(arg);
