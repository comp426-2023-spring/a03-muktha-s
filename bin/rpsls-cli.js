#!/usr/bin/env node

import rpsls from "../lib/rpsls.js"
import minimist from "minimist"; 

const args = minimist(process.argv.slice(2)); 

if (args.h || args.help) {
   displayHelpMsg()
   process.exit(0)
}

if (args.r || args.rules) {
   displayRuleMsg()
   process.exit(0)
}

if (args._.length > 1) {
   console.error("Arguments out of range.");
   displayHelpMsg(); 
   displayRuleMsg();
   process.exit(0); 
} else if (args._.length === 0) {
   console.log(JSON.stringify(rpsls.rpslsDef()))
} else {
   let playerMove = args._[0].toLowerCase();
   if (rpsls.rpslsOps.includes(playerMove)) {
      console.log(JSON.stringify(rpsls.rpsls(playerMove)))
   } else {
      console.error(
         `
         Invalid argument.
         Acceptable arguments: rock | paper | scissors | lizard | spock
         `
      );
      displayRuleMsg(); 
   }
}


function displayHelpMsg() {
   console.log('Usage: node-rpsls [SHOT]')
   console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!')
   console.log('')
   console.log('  -h, --help        display this help message and exit')
   console.log('  -r, --rules       display the rules and exit')
   console.log('')
   console.log('Examples:')
   console.log('  node-rpsls        Return JSON with single player RPSLS result.')
   console.log('                    e.g. {"player":"rock"}')
   console.log('')
   console.log('node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.')
   console.log('                    e.g {"player":"rock","opponent":"Spock","result":"lose"}')
}

function displayRuleMsg() {
   console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
  - Rock CRUSHES Scissors`)
}

