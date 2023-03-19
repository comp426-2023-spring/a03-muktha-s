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
