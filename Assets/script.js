//TO DO
// 1. *****COMPLETE***** Display date on top of daytimer ******COMPLETE*******
// 2. *****COMPLETE***** use jquery or make time blocks for daytimer *****COMPLETE*****
// 3. *****COMPLETE***** make accurate time display in time blocks in daytimer *****COMPLETE*****
// 4. make save button on each time block work in local storage
$(document).ready(function () {
    //Test if JS file is linked to index.html
    console.log("Connected to index.html");

    //Display Accurate Day on Top of Work-Day-Scheduler using Moment.js 
    //Install moment using npm i moment --save
    //We are targeting the currentDay ID that is assigned to a <P> tag in the jumbotron
    //Make the Variable that uses moment to display the currentDay
    const currentDay = moment().format('MMMM Do YYYY');
    console.log(currentDay);

    //Crystal activity #8 shows how to print something to text by id 
    // $("#number-to-guess").text(targetNumber);
    $("#currentDay").text(currentDay);

    //Show current time in the console using moment format LT from docs
    const currentTime = moment().format('LT');
    console.log(currentTime);
    
    //Crystal activity #8 shows how to print something to text by id 
    // $("#number-to-guess").text(targetNumber);
    $("#currentTime").text(currentTime);
    
    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("#id|.class|element").on("action", function(){});
    // And so whenever it is clicked...
    $(".saveButton").on("click", function () {
        //   alert("I've been clicked!");
        console.log("The #saveButton has been clicked.");

        var userInput = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id");
        console.log(userInput);

        localStorage.setItem(time, userInput);


    });





});