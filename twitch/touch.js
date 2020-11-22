poke=[`gooey`,`fuzzy`,`velvety`,`silky`,`slippery`,`smooth`,`a musky husky`,`cool`,`impure`,`pure`,`icy`,`leathery`,
      `moist`,`mushy`,`squeaky`,`fluffy`,`...uh...`,`wooly`,`sensitive`,`prickly`,`firm`,`boiling`,`soggy`,`dusty`,`wooly`];
amt=[`slightly`,`very`,`kinda`,`somewhat`,`...in a way...`,`largely`,`deeply`,`viscerally`,`firmly`,``,``,``,``];

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function touch(user) {
  return "/me scans " + user + "... feels " + choose(amt) + " " + choose(poke);
}
touch(arg);



