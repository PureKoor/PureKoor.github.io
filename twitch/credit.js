maxCommands = 3;

function createArr(userInput) {
   temp = userInput.toUpperCase().replace(/\s+/g, '');
   i = 0;
   index = 1;
   arr = [];

   
   if(temp.length >= maxCommands){
      i = maxCommands;
   } else {
      i = temp.Length;
   }
   
   while(i != 0){
      arr.push(temp.charAt(index));
      x++;
      i--;
   }
   
   return arr;
}

function addCommands(sortedArr) {
   x = sortedArr;
   text = "";

   switch (x){
      case : "T":
         text = "Transformation";
         break;
      case : "S":
         text = "Size";
         break;
      case : "H":
         text = "Hug";
         break;
   }
}

function credit(user) {
   space = ", "; 
   userInput = user.toUpperCase().replace(/\s+/g, '');
   temp = createArr(user);
   command = addCommands(temp);
   
  str = "The following puiblic commands are by PureKoor: ";
   
   if (command.length == 0){
    str += "No Commands are listed. ";
   }
   
   if (typeof command[0] != 'undefined'){
      str += command[0];
      str += space;
   }
   if (typeof command[1] != 'undefined'){
      str += command[1];
      str += space;
   }
   if (typeof command[2] != 'undefined'){
      str += command[2];
      str += space;
   }
   if (userInput >= (maxCommands +1)){
      str += "and there's more. Need a better way to write this out so I can have an and in the correct place!";

   } else {
      
   }
 
  str += "Check out purekoor.com/twitch/ for more information!";

  return str;
}

credit(arg);
