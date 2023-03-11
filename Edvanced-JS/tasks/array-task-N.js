'use strict'

// You have a small array with revenue data for each outlet.
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];
// Write function that takes this array of data and returns the sum of only the positive values from each object. (number)
const getPositiveIncomeAmount = (data) => {
    const filteredArr = data.filter(item => item.amount > 0);
    const sum = filteredArr.reduce( (accumulator, currentValue) => accumulator + currentValue.amount, 0 );
    return sum;
};
console.log(getPositiveIncomeAmount(funds)); // => 13300

/* Write getTotalIncomeAmount function that also accepts this data array. 
If at least one of the objects contains a negative amount field value, then the function returns the sum of all values. (number) 
If there are no such values, the getPositiveIncomeAmount function is launched with the same data array. */
const getTotalIncomeAmount = (data) => {
    const hasNegativeValues = data.some(item => item.amount < 0);
    if (hasNegativeValues) {
      return data.reduce((sum, item) => sum + item.amount, 0);
    } else {
      return getPositiveIncomeAmount(data);
    }
};
console.log(getTotalIncomeAmount(funds)); // => -500

