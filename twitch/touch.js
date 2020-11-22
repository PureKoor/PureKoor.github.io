poke=[`gooey`,`fuzzy`,`velvety`,`silky`,`slippery`,`smooth`,`a musky husky`,`cool`,`impure`,`pure`,`icy`,`leathery`,`moist`,`mushy`,`squeaky`,`fluffy`,`...uh...`,`wooly`,`sensitive`,`prickly`,`firm`,``];
amt=[`slightly`,`very`,`kinda`,`somewhat`,`deeply`,`viscerally`,`firmly`,``,``,``];

function test(m) {
  return "/me scans " + m + "... feels " + amt[Math.floor(Math.random()*amt.length)] + " " + poke[Math.floor(Math.random()*poke.length)];
}
test(arg);



