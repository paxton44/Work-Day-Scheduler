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

$("#currentTime").text(currentTime);


    // $(".saveBtn").on("click", function () {
    //     // checking if click works first
    //     // alert("I've been clicked!");
    //     console.log("click");
        
    //     // adding the save to local storage using activity 21 and activity 18 as an example. 
    //     //This is how we make the text input able to be saved to local storage.
    //     // this.siblings targets the text area and anything related to it that isn't a parent and allows the on click function to drive everything at once.
    //     const textValue = $(this).siblings('textarea').val();
    //     const timeBlock = $(this).siblings('#9AM').attr('id');
    //     //setting the timeblock and text area to local
    //     localStorage.setItem(timeBlock, textValue);

    //     $('textarea').text(textValue);

    //     console.log(timeBlock, textValue);
    // });

   
  
        // Here we use jQuery to select the header with "click-me" as its ID.
        // Notice I have the #click-me, click, and then the function
        // So $("#id|.class|element").on("action", function(){});
        // And so whenever it is clicked...
        $("#saveButton").on("click", function() {
        //   alert("I've been clicked!");
        console.log("The #saveButton has been clicked.");
        });
  
      
 
    

});