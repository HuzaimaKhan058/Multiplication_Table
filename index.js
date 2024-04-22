#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "tableOf",
        type: "number",
        message: "Print table of:"
    },
    {
        name: "tableFrom",
        type: "number",
        message: "From:"
    },
    {
        name: "tableTo",
        type: "number",
        message: "Print table to"
    }
]);
if (answer.tableFrom <= answer.tableTo) {
    for (let num = answer.tableFrom; num <= answer.tableTo; num++) {
        let table = answer.tableOf;
        console.log(`${table} x ${num} = ${table * num}`);
    }
}
else if (answer.tableFrom >= answer.tableTo) {
    for (let num = answer.tableFrom; num >= answer.tableTo; num--) {
        let table = answer.tableOf;
        console.log(`${table} x ${num} = ${table * num}`);
    }
}
