"use strict"

// кол-во сотрудников
let employees = [5, 15, 40, 10];
// сумма
let amount = [10000, 25000, 50000, 100000];
// взымаемый налог
let tax = 0.20;

function array (employees, amount) {
    let sum = 0;
    let sumEmployees = 0;
    let avg = 0;
    let minAmount = amount[0];
    let maxAmount = amount[0];
    let minTaxEmployees = 0;
    let maxTaxEmployees = 0;

    for (let i = 0; i < amount.length; i++) {
        sum += Math.floor(amount[i] * tax * employees[i]);
    }

    for (let i = 0; i < employees.length; i++) {

        sumEmployees += Math.floor(employees[i]);
        avg = Math.floor(sum / sumEmployees);        
    }

    for (let i = 0; i < amount.length; i++) {
        if (minAmount > amount[i]) {
            minAmount = amount[i];
        }
    }

    minTaxEmployees = Math.floor(minAmount * tax);

    for (let i = 0; i < amount.length; i++) {
        if (maxAmount < amount[i]) {
            maxAmount = amount[i];
        }        
    }

    maxTaxEmployees = Math.floor(maxAmount * tax);

    return {
        sum: sum,
        avg: avg,
        minTaxEmployees: {
            minAmount: minAmount,
            minTaxEmployees: minTaxEmployees,
            tax: tax,
        },
        maxTaxEmployees: {
            maxAmount: maxAmount,
            maxTaxEmployees: maxTaxEmployees,
            tax: tax,
        },
    }

}

console.dir(array(employees, amount))