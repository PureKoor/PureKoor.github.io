rs = [`slowly`,`meticulously`,`casually`,`sluggishly`,`rapidly`,`swiftly`,`quickly`,`kinda`];
ra = [`walks`,`runs`,`jogs`,`darts`,`scampers`,`saunters`,`staggers`,`struts`,`tiptoes`,`teleports`,`rolls`,`slides`,`spins`,`bounces`,`runs`,`poofs`,`turns`];

ts = [`Big`,`Heavy`,`Light`,`Hyper`,`Sizeable`,`Kind`,`Enthusiastic`,`Lively`,`Amusing`,`Fantastic`,`Quirky`,`Calming`,`Gentle`,
   `Smol`,`ˢᵐᵒˡ`,`Large`,`Substanital`,`Long`,`Defined`,`Undefined`,`Quick`,`Delightful`,`Enchanting`,`Cute`,
   ``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``];

tx = [`Bear`,`Taur`,`Dog`,`Ghost`,`Lite`,`Friend`,`Side`,`Furry`,`Robotic`,`Pure`,`Tycoon`,`Behind`,`Waist`,`Heart to Heart`,
      `VTuber`,`Bathtub Meta`,
    ``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``];

tf = [`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,`Hug`,
      `Double-Hug`,`Tripple-Hug`,`Quad-Hug`,`OMEGA-HUG`,`TF-Hug`,`Taur-Hug`];

everyoneList = [`everyone`,`everyone`,`everyone`,`everyone`,`everyone`,`chat`,`chat`,`chat`,`chat`,`chat`,`chat`,
                `y'all`,`every-fur`,`all you folks`,`the masses`,`us`,`the collective`,`the workers`];

toDoLater = [`User Hugs other user in x animal, such as Hugs in donk as a variant for this hug command`,`aaa`,`aas`];


function choose(arr){
  temps = arr[Math.floor(Math.random()*arr.length)];
  if (temps != ``){
   temps += " ";
  }
   return temps;
}

function pickA_An(arr){
 x = arr.charAt(0).toUpperCase();
 temp = "";
 if (x == 'A' || x ==  'E' || x ==  'I' || x ==  'O' || x ==  'U') {
    temp = " an ";
  } else {
    temp = " a ";
  }
   return temp;
}

function hug(user, touser) {
 hug_combine = choose(ts);
 hug_combine += choose(tx);
 hug_combine += choose(tf);
 hug_result = hug_combine.trim(); 

  hugee = touser;
  if (user == touser){
  hugee = "everyone";
  }
    
  str = "/me ❗️❗️❗️ " + user + " ";
  str += choose(rs);
  str += choose(ra);
  str += "to give " + hugee;
  str += pickA_An(hug_result);
  str += hug_result;
  str += " 🤗";

  return str;
}
hug(arg,arg1);
