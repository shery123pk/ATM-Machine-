#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your PIN Code"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("\nyou typed correct pin\n");
    let operation = await inquirer.prompt([
        {
            name: "opr",
            message: "Select option",
            type: "list",
            choices: ["withdraw", "Check Balance"]
        }
    ]);
    if (operation.opr === "withdraw") {
        let withdrawAns = await inquirer.prompt([{
                name: "witfdrawMethod",
                type: "list",
                message: "Select a withdrawal method: ",
                choices: ["Fast Cash", "Enter Amount"]
            }]);
        if (withdrawAns.witfdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([{
                    name: "fastCash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000, 25000]
                }]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw Successfuly`);
                console.log(`your remaining balance is : ${myBalance}`);
            }
        }
        else if (withdrawAns.witfdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaining balance is : ${myBalance}`);
            }
        }
    }
    else if (operation.opr === "Check Balance") {
        console.log(`your Account Balance is : ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, try Again");
}
