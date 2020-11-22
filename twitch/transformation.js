tx=[`Gooey`,`BIG`,`ˢᵐᵒˡ`,`Cute`,`Rubber`,`Fluffy`,`Buff`,`Chubby`,`Stone`,`Skinny`,`Latex`,`Pool Toy`,`Soft`,``,``,``,``,``];
ra=[`slowly`,`meticulously`,`casually`,`sluggishly`,`rapidly`,`swiftly`];
tf=[`Alligator`,`Alpaca`,
    `Bear`,`Buffalo`,`Badger`,`Bat`,`Bull`
    `Cat`,`Chicken`,`Cow`,`Crab`,`Crocodile`,`Caribou`,`Camel`,`Capybara`,`Chamelon`,`Cheetah`,`Chipmunk`,`Cougar`,`Coyote`,
    `Deer`,`Dog`,`Dragon`,`Donkey`,`Duck`,
    `Egale`,`Echidna`,
    `Fox`,`Falcon`,`Flamingo`,
    `Goat`,`Giraffe`,`Guinea pig`,
    `Horse`,`Hamster`,`Hedgehog`,`Hippopotamus`,`Hyena`,
    `Iguana`,
    `Jaguar`,`Jackal`,
    `Kangaroo`,`Kiwi`,`Koala`,
    `Llama`,`Lion`,`Leopard`,`Lemur`,`Lynx`,`Lizard`,
    `Marten`,`Moose`,`Mouse`,`Mule`
    `Otter`,`Owl`,`Ocelot`,`Ostrich`,`Ox`,
    `Pig`,`Panda`,`Panther`,`Penguin`,`Pigeon`,`Porcupine`,
    `Raccoon`,`Raven`,`Reindeer`,`Rhinoceros`,
    `Synth`,`Salamander`,`Sheep`,`Sloth`,`Stoat`,
    `Tiger`,`Tanuki`,`Turkey`,
    `Wolf`,`Wolverine`,
    `Ox`,
    `Werewolf`,`Basilisk`,`Gryphon`,`Wyvern`,`Kobold`,
    `Ant`,`Bug`,`Butterfly`,`Caterpillar`,`Snail`,`Slug`,`Spider`,
    `Clam`,`Whale`,`Shark`,`Jellyfish`,`Clown Fish`,`Crawdad`,`Dolphin`,`Eel`,`Frog`,`Lobster`,`Manta Ray`,`Octopus`,`Piranha`,`Salmon`,`Stingray`,`Tuna`,
    `Tycoon`];


function choose(arr){
  return arr[Math.floor(Math.random()*arr.length)] + " ";
}

function transformation(user) {
  str = "/me now ";
  str += choose(ra);
  str += "transforms " + user +" into a ";
  str += choose(tx);
  str += choose(tf);
  
  return str;
}
transformation(arg);
