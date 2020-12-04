lurkers = ["https://static.wikia.nocookie.net/jakanddaxter/images/a/ad/Brutter_concept_art.png/","https://static.wikia.nocookie.net/starcraft/images/c/cb/Lurker_SC2_Art1.jpg/"];

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function lurk(user) {

  var picker = Math.floor(Math.random()*2);

  if(picker % 0){
      return "/me sees that " + user + " is currently lurking...";
  }
  else {
    return "/me sees that " + user + " is currently lurking... Have another type of lurker too: " + choose(lurkers);
  }
}
lurk(arg);
