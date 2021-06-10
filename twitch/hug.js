ra=[`walks`,`runs`,`teleports`,`rolls`,`slides`,`swiftly runs`,`poofs`,`quickly turns`];

ts=[`Big`,
   `Smol`,
   ` `,` `,` `,` `];

tx=[`Bear`
    ,`Ghost`
    ,`Lightly`,
    `Friend`,`Side`,`Furry`,
    ` `,` `,` `,` `,` `];

tf=[`hugs`,`double hugs`,`tripple hugs`];


function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function hug(user,touser) {
 hug_combine = choose(ts);
 hug_combine += choose(tx);
 hug_combine += choose(tf);
 hug_result = hug_combine.trim(); 

 which_A = "";
 x = hug_result.charAt(0).toUpperCase();
 if (x == 'A' || x ==  'E' || x ==  'I' || x ==  'O' || x ==  'U') {
    which_A = " an ";
  } else {
    which_A = " a ";
  }
    
  str = "/me " + user + " ";
  str += choose(ra);
  str += "to give " + touser;
  str += which_A;
  str += "🤗 ";
  str += hug_result;

  return str;
}
hug(arg);
