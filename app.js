const calculator = require('./calculation');

const hoursPerday = 4;
const daysPerWeek = 6;
const ratePerHour = 300;

const tax = 0.1;
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;

// Computations
const grossIncome = calculator.multiply(ratePerHour, calculator.multiply(hoursPerday, daysPerWeek));
const computedTax = calculator.multiply(tax, grossIncome);
const totalDeductions = calculator.add(computedTax, calculator.add(sss, calculator.add(pagIbig, philHealth)));
const netSalary = calculator.subtract(grossIncome, totalDeductions);


// The gross income is 7200.
// Tax: 720
// SSS: 1200
// Pag-Ibig fund: 300
// PhilHealth: 400
// Total deductions: 2620
// The net salary is 4580.

console.log
(`The Gross income is ${grossIncome}.
Tax: ${computedTax}
SSS: ${sss}
Pag-ibig fund: ${pagIbig}
PhilHealth: ${philHealth}
Total Deductions: ${totalDeductions}
The net salary is ${netSalary} 
`);