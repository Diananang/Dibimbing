// Complete this function,  so that it returns a formatted currency string. For example, if the input is 1000 and "Rp", it should return "Rp1000". 
// And if the input is 2500 and "$", it should return "$2500".
// If currency type doesnt provided just return the amount as a string. 

function formatCurrency(amount: number, currency?: string): string {
    return currency? `${currency}${amount}` : `${amount}`;
}

console.log (formatCurrency(1000, "Rp"));
console.log (formatCurrency(2000, "$"));
console.log (formatCurrency(1000));



// Same with previous function, but this time the input must be and object that has properties `amount` and `currency`. For example:
// { amount: 1000, currency: "Rp" }
// If the currency type is not provided, just return the amount as a string. 
// Example output: "Rp1000"
// Make sure you make type or interface for the input object.
interface ICurrency {
    amount: number,
    currency?: string
}

function formatCurrencyObject(input: ICurrency): string {

return input.currency? `${input.currency}${input.amount}` : `${input.amount}`
}
console.log (formatCurrencyObject({ amount: 1000, currency: "Rp" }));
console.log (formatCurrencyObject({ amount: 2500, currency: "$" }));
console.log (formatCurrencyObject({ amount: 2500}));