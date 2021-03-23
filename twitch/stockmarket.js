stocksNames[`MAW`,`PAW`,`BEANS`,`FLUFF`,`FLOOF`,`TAIL`,`HORN`,`YOU`.`Your personal stock`];
wordchanges=[`slightly`,`very`,`kinda`,`somewhat`,`...in a vwey vig way...`,`largely`];
Size=[`Large`,`Greatly, making you big and round`];
whyCapBad[`Without better distribution systems or local food production for the goal of feeding everyone, over producing food on farms can lead to destroying food to keep market prices higher or to avoid high distribution costs. This becomes more apparent during certain times such as the pandemic, where more people were starving https://www.nytimes.com/2020/04/11/business/coronavirus-destroying-food.html`
          `Money is actually just paper we say has value. It's hard to carry around paper though, so one day we'll probably just have points in an account to spend. Like in a videogame!!!`,
          `There are more vaccant homes then there are houseless people. https://www.self.inc/info/empty-homes/ There are many ways to end houseless-ness, the easiest way is to give people a house, such as what Findland did along with other tactics https://www.huffpost.com/entry/homelessness-finland-housing-first_n_5c503844e4b0f43e410ad8b6`
          `Wealth Inequality in the USA between the rich and everyone else is massive. Such hoarding of wealth by the few restricts how much money is useable by everyone https://en.wikipedia.org/wiki/Wealth_inequality_in_the_United_States`,
          `We can transport goods in less than 2 days via mail, shoot robots through space to land on a moving planet in space, and in 2018 around 11.1% of USA households were food insecure! https://en.wikipedia.org/wiki/Hunger_in_the_United_States`,
          `In 2019, a videogame company's CEO made $40 million dollars as some employees couldn't afford food https://www.businessinsider.com/activision-blizzard-salary-disparity-issues-2020-8`,
          `Around the world some people starve... BUT WE CAN PRODUCE GOLDEN DONUTS!!! Worth it? https://spoonuniversity.com/how-to/where-to-get-cheese-in-edinburgh`,
          `Here in the USA there are around 100,000 people who die due to not receiving needed healthcare https://en.wikipedia.org/wiki/Health_insurance_coverage_in_the_United_States`];

options = {
    capbad:8,
    bull:50,
    bear:30,
    stag:12,
};

function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " get rid of maybe ";
}

function findMarket(input) {
    arr = [];
    for(options in input) {
        if ( input.hasOwnProperty(options) ) {
            for( i=0; i<input[options]; i++ ) {
                arr.push(options);
            }
        }
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

function capitalismBad(){
  message = "You're outside the stock market. An anti-capitalist next to you whispers, " ";
  message += choose(whyCapBad);
  message += " "";
          
  return message; 
}

function bullMarket(){
  message = "You're in a bear market! ";
  message += choose(stockNames);
  message += " has gone x ";
  message += choose(wordChanges);
  message += "Your porfolio has x ";
  message += choose(size);
          
          
  return message; 
}

function bearMarket(){
  message = "You're in a bear market! ";
  message += choose(stockNames);
  message += " has gone x ";
  message += choose(wordChanges);
  message += "Your porfolio has x ";
  message += choose(size);
          
  message += "it a bull market (?), x has/have deflated by %/ x is basically y now";
  message += "The market stays steady the same. you are still x."
          
  return message; 
}

function stagMarket(){
  message = "You're in a bear market! ";
  message += choose(stockNames);
  message += " has gone x ";
  message += choose(wordChanges);
  message += "Your porfolio has x ";
  message += choose(size);     
          
  return message; 
}


function stockmarket(user){
  outcome = findMarket(options);        

  if(outcome == "bull"){
         return capitalismBad();
  }    
  if(outcome == "bear"){
         return capitalismBad();
  }    
  if(outcome == "stag"){
         return capitalismBad();
  }    
  if(outcome == "capbad"){
         return capitalismBad();
  }    
}
   
stockmarket(arg);
