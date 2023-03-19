#!/usr/bin/env node
import {rps} from '../lib/rpsls.js'; 
import minimist from "minimist"; 

const args = minimist(process.argv.slice(2)); 

if (args.h || args.help) {
   displayHelpMsg(); 
   process.exit(0); 
} 

if (args.r || args.rules) {
   displayRuleMsg(); 
   process.exit(0); 
}

try {
   let result = rps((argv._)[0])
   if (result != 'error') {
	console.log(JSON.stringify(output)); 
   } else {
	  console.error('${args._[0] is out of range.'); 
	  displayHelpMsg(); 
	  displayRuleMsg(); 
} 
    

function displayHelpMsg() {
   console.log('Usage: node-rps [SHOT]
   Play Rock Paper Scissors (RPS)

     -h, --help      display this help message and exit
     -r, --rules     display the rules and exit

   Examples:
     node-rps        Return JSON with single player RPS result.
                     e.g. {"player":"rock"}
     node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                     e.g {"player":"rock","opponent":"scissors","result":"win"}')
} 

function displayRuleMsg() {
   console.log('Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors')

} 
