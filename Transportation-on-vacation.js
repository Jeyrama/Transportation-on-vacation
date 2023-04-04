/*
You will need a rental car for your vacation.

Every day you rent the car costs $40. 
If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a function that returns the total amount for different days(d).
*/


 // Solution

function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if (days >= 7) {
    return 50;
  }
  else if (days >= 3) {
    return 20;
  }
  else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

// or

const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// or

function rentalCarCost(d) {
  if(d<3) return d * 40;
  if(7>d && d>=3) return (d*40-20);
  if(d>=7) return (d*40-20);
}

// or 

function rentalCarCost(days) {
  let dayCost = 40;

  let discount = 0;
  if(days >= 3) discount += 20;
  if(days >= 7) discount += 30;

  return dayCost * days - discount;
}