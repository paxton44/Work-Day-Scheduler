//TO DO
// 1. Display time on top of daytimer
// 2. use jquery or make time blocks for daytimer
// 3. make accurate time display in time blocks in daytimer
// 4. make save button on each time block work in local storage

//Test if JS file is linked to index.html
console.log("Connected to index.html");

//Display Accurate Day on Top of Work-Day-Scheduler using Moment.js 
//Install moment using npm i moment --save
//We are targeting the currentDay ID that is assigned to a <P> tag in the jumbotron
//Make the Variable that uses moment to display the currentDay
var currentDay = moment().format('MMMM Do YYYY');
console.log(currentDay);

//Crystal activity #8 shows how to print something to text by id 
// $("#number-to-guess").text(targetNumber);
$("#currentDay").text(currentDay);
