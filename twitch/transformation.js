ra=[`slowly`,`meticulously`,`casually`,`sluggishly`,`rapidly`,`swiftly`,`poof`,`securely`];

tx=[`Airy`,`Awkward`,`Angular`,
    `Bouncy`,`BIG`,`Buff`,`Bulky`,`Bubbly`,
    `Cute`,`Chubby`,`Cozy`,`Clean`,`Clear`,`Cheerful`,`Cold`,`Chunky`,
    `Drowzy`,`Defined`,`Damp`,`Dense`,`Dry`,`Deep`,`Durable`,`Diamond`,
    `Earthy`,`Elastic`,`Enamelled`,`EXTREME`,`Emerald`,
    `Fluffy`,`Firey`,`Firm`,`Flawless`,`Flat`,`Flat Fuck Friday`,`Foamy`,`Furry`,
    `Gooey`,`Glossy`,`Glassy`,`Goopy`,`Gamer`,
    `Hazy`,`Hygienic`,
    `Icy`,`Inflexible`,`Iron`,`Ivory`,
    `Latex`,`Lustrous`,
    `Metallic`,`Matted`,
    `Nibble`,`Non-glossy`,`Neat`,
    `Orderly`,
    `Pointy`,`Polished`,`Puffed Up`,`Perfect`,
    `Rubber`,`Reflective`,`Redstone`,`Rough`,`Rested`,
    `ˢᵐᵒˡ`,`Stone`,`Skinny`,`Soft`,`Scaly`,`Snarling`,`Silky`,`Strong`,`Snarling`,`Saturated`,`Smooth`,
    `THICK`,`Thin`,`Taur`,
    `Undefined`,
    `Pool Toy`,`Pure`,
    `Watery`,`Wholesome`,`Wooden`,
    `Velvety`,
    ` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `,` `];

tf=[`Alligator`,`Alpaca`,`Antelope`,`Ape`,`Armadillo`,
    `Bear`,`Buffalo`,`Badger`,`Bat`,`Bull`,`Beaver`,`Binturong`,`Bison`,`Boar`,
    `Cat`,`Chicken`,`Cow`,`Crab`,`Crocodile`,`Caribou`,`Camel`,`Capybara`,`Chamelon`,`Cheetah`,`Chipmunk`,`Cougar`,`Coyote`,`Chimpanzee`,
    `Deer`,`Dog`,`Donkey`,`Duck`,`Dinosaur`,
    `Egale`,`Echidna`,`Elephant`,`Elk`,`Emu`,
    `Fox`,`Falcon`,`Flamingo`,
    `Goat`,`Giraffe`,`Guinea pig`,`Gorilla`,
    `Horse`,`Hamster`,`Hedgehog`,`Hippopotamus`,`Hyena`,
    `Iguana`,
    `Jaguar`,`Jackal`,
    `Kangaroo`,`Kiwi`,`Koala`,
    `Llama`,`Lion`,`Leopard`,`Lemur`,`Lynx`,`Lizard`,
    `Marten`,`Moose`,`Mouse`,`Mule`,`Meerkat`,`Monkey`,
    `Otter`,`Owl`,`Ocelot`,`Ostrich`,`Ox`,
    `Pig`,`Panda`,`Panther`,`Penguin`,`Pigeon`,`Porcupine`,
    `Raccoon`,`Raven`,`Reindeer`,`Rhinoceros`,`Rat`,
    `Synth`,`Salamander`,`Sheep`,`Sloth`,`Stoat`,
    `Tiger`,`Tanuki`,`Turkey`,
    `Wolf`,`Wolverine`,`Walrus`,`Weasel`,`Wallaby`,
    `Ox`,
    `Zebra`,
    `Werewolf`,`Basilisk`,`Gryphon`,`Wyvern`,`Kobold`,`Unicorn`,`Chimera`,`Kitsune`,`Dragon`,`Naga`,
    `Ant`,`Bug`,`Butterfly`,`Caterpillar`,`Snail`,`Slug`,`Spider`,
    `Clam`,`Whale`,`Shark`,`Jellyfish`,`Clown Fish`,`Crawdad`,`Dolphin`,`Eel`,`Frog`,`Lobster`,`Manta Ray`,`Octopus`,`Piranha`,`Salmon`,`Stingray`,`Tuna`,`Crab`,
    `Eel`,`Tycoon`];


function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function transformation(user) {
 species_combine = choose(tf);
 species_combine += choose(tx)
 species_result = species_combine.trim(); 

 which_A = "";
 if (species_result.charAt(0).toUpperCase() == ('A' || 'E' || 'I' || 'O' || 'U')) {
    which_A = " an ";
  } else {
    which_A = " a ";
  }
    
  str = "/me now ";
  str += choose(ra);
  str += "transforms " + user + " into";
  str += which_A;
  str += species_result;

  
  return str;
}
transformation(arg);
