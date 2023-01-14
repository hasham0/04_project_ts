#! /usr/bin/env node
// import liabaries
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("Currency Converter PKR TO Others"));
// main function
async function convertCurr() {
    // taking amount from user
    const userAmount = await inquirer.prompt([
        {
            type: "number",
            name: "pkr",
            message: "Enter the amount in PKR:",
        },
    ]);
    // define exchange options
    const exhCurrency = await inquirer.prompt([
        {
            type: "list",
            name: "exhCur",
            choices: ["USD", "IND", "TAKKA", "YEN"],
            message: "select the currency to exchange your money",
        },
    ]);
    // data about curriences
    const code = ["USD", "YEN", "TAKKA", "IND"];
    const symbols = ["$", "¥", "৳", "₹"];
    const rates = [225.510302, 0.61, 2.19, 2.73];
    // making conditons to match the correct data in the exchange currencies
    if (code.includes(exhCurrency.exhCur)) {
        console.log(chalk.bgGrey("exchange money"));
        //getting index of match value
        const check = code.findIndex((val) => val === exhCurrency.exhCur);
        if (code[check]) {
            const money = (userAmount.pkr / rates[check]).toFixed(3);
            console.log(`currency code is ${code[check]} and the amount is ${money} ${symbols[check]}`);
        }
    }
}
await convertCurr();
