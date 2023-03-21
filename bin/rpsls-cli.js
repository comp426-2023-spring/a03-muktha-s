#!/usr/bin/env node

import {rpsls} from "../lib/rpsls.js"
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
   let result = rpsls(args._[0]);
   console.log(JSON.stringify(result))
   process.exit(0)
} 
catch(e) {
   if (e instanceof RangeError) {
      displayHelpMsg()
      displayRuleMsg()
      process.exit(1)
   }
}


function displayHelpMsg() {
   console.log('Usage: node-rpsls [SHOT]')
   console.log()
      
}

function displayRuleMsg() {
   

}

