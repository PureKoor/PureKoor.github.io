vip=["Koor is the Purest Tycoon","Zasz is the Purest Cute Crocco"];
users={"purekoor": vip[0],"pure koor": vip[0],"koor": vip[0], "zasz": vip[1],"zaszthecroc": vip[1]};
anon=[`is amazingly pure`,
      `is as pure as the ocean breeze`,
      `is as pure as a freshly baked donut`,
      `as pure as a chicken pot pie`,
      `is as pure as ketchup!!!`,
      `is very pure!`,`is pure!`,
      `has a good amount of purity`,
      `is somewhat pure?`,
      `could be pure`,
      `could be more pure`,
      `could be impure`,
      `could be less impure`,
      `is ehhh... pure?`,
      `is somewhat impure...`,
      `is impure`,
      `...way too impure`,
      `off the charts impure`,
      `is as impure as a smol kobold`,
      `is as impure as a bawt`];
 
function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

function puritylevel(user) {  
  name = user.toLowerCase();
  
  if (name in users) {
    return users[name];
  } 
 else {
    return "/me thinks "+ user +" "+ choose(anon);
  }
  
}
puritylevel(arg);
