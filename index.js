//1

function addOne(num) {
  return num + 1;
}

console.log(addOne(5));

//2

function hoursSeconds(hours) {
  return hours * 3600 + " Seconds";
}

console.log(hoursSeconds(2));

//3

function yearsDays(years) {
  return years * 365.2425 + " days";
}

console.log(yearsDays(7));

//4

function triangle(base, height) {
  return "Area: " + (base * height) / 2;
}

console.log(triangle(4, 5));

//5

function daysMinutes(days) {
  return days * 1440 + " minutes";
}

console.log(daysMinutes(4));

//6

let arrayNum = [5, 4, 3, 2, 1];

function arrayFnc(array) {
  return array[0];
}

console.log(arrayFnc(arrayNum));

//7

//you can't use numbers in the parameters it seems
function basket(twopoints, threepoints) {
  return "Score: " + (2 * twopoints + 3 * threepoints);
}

console.log(basket(5, 3));

//8

function farmer(chickens, cows, pigs) {
  return "Legs: " + (2 * chickens + 4 * cows + 4 * pigs);
}

console.log(farmer(1, 1, 1));

//9

// % gives you the remainder. Remainder means what is left behind. 4/2 can be divided by 2 twice so nothing is left over. 3 can only be divided by 2 once, meaning it has a remaineder of 1.
function divTwo(num) {
  if (num % 2 == 0) {
    return "true, number is even";
  } else {
    return "flase, number is odd";
  }
}

console.log(divTwo(2));

//10

function onlyNum(num) {
  if (num <= 0) {
    return "true , number is less than or equal to 0";
  } else {
    return "false, number is greater than 0";
  }
}

console.log(onlyNum(0));

//11

function sum(num1, num2) {
  if (num1 + num2 < 100) {
    return "true, number is less than 100";
  } else {
    return "false, number is greater than 100";
  }
}

console.log(sum(30, 20));
