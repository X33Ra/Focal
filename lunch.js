/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to wait until we're hungry.
 * Otherwise, we want to pick up a snack or grab something we have ready at home
 * we've got less than 20 minutes, or to take a break and cook a tasty meal if
 * we've got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're learning to code and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */


const whatToDoForLunch = (hungry, availableTime) => {
  console.log("I don't know what to do!");

  if (hungry === true && availableTime <= 20)
    console.log('Eat');

  else if ((hungry === false) && availableTime <= 30)
    console.log('You have 30 minutes just do work');

  else if (hungry === true && availableTime === 50)
    console.log('you got 50 minutes work abit then eat later');
};


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);