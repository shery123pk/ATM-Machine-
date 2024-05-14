#! /usr/bin/env node

import inquirer from "inquirer";

let balance = 25000;

let pinNumber = 2222;

console.log("your current balance is:", +balance);
let userInput = await inquirer.prompt(
    {message:'Enter your Pin Number:',
        type:'number',
        name:'pinNumber'}
    );
if(userInput.pinNumber===2222)
{console.log('you enter correct pin number')}
else {console.log('invalid pin number, please enter correct pincode!')}