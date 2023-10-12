// Modules: use to export different sections of code from one file to another
// type in the script must be set to module; defer(load DOM and JavaScript) is implied automatically; automatically enables strict mode in JavaScript


// Importing
import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpicking} from "./guitars.js";
console.log(playGuitar());
console.log(shredding());
console.log(shred());
console.log(plucking());
console.log(fingerpicking());


import * as Guitars from "./guitars.js";
console.log(Guitars.default());
console.log(Guitars.playGuitar());              // If not set as default
console.log(Guitars.shredding());
console.log(Guitars.plucking());

//*****************************************************************************************************************************************************************/

import user from "./user.js";
const me = new user("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());


//imports and exports in modules became availale in JavaScript with ES% in 2015. Refer caniuse.com
// Usually modules are used in a project with a tool called Babble taht can transfer JavaScript, like the newer modern JavaScript code, translate that over a transpile that into older JavaScript syntax that will work in ither browsers(often time used along with a bundler like Wrbpack or parcel) and those things bundle your code and can use babble along the way to make it into older JavaScript that older browsers can read and will bundle it into one file; so they read all your modules and package it all together in a big bundle