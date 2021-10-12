var today = (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
$("#currentDay").text(today);

let tasks = [];

function saveTasks(event){
    console.log(event.target);
    // console.log(this);

    // var textAreaVal = $(this).siblings(".description").find("textarea").val();
    // console.log(textAreaVal);
    // var textAreaId = $(this).siblings(".description").children("textarea");
    // console.log(textAreaId);
    // tasks.push(textAreaVal);
    // localStorage.setItem("tasks", JSON.stringify(tasks))
    
}
$(".saveBtn").on("click", function(){
    console.log(this);

    var textAreaVal = $(this).siblings(".description").find("textarea").val();
    console.log(textAreaVal);
    var textAreaId = $(this).siblings(".description").attr("id");
    console.log(textAreaId);
    tasks.push(textAreaVal);
    localStorage.setItem(textAreaId, textAreaVal);
});

function loadTasks(){
    JSON.parse(localStorage.getItem("tasks"))
    if(!tasks){
        tasks = {};
    };
}
$("#9").val(localStorage.getItem("nine"));
$("#10").val(localStorage.getItem("ten"));
$("#11").val(localStorage.getItem("eleven"));
$("#12").val(localStorage.getItem("twelve"));
$("#13").val(localStorage.getItem("thirteen"));
$("#14").val(localStorage.getItem("fourteen"));
$("#15").val(localStorage.getItem("fifteen"));
$("#16").val(localStorage.getItem("sixteen"));
$("#17").val(localStorage.getItem("seventeen"));

$(".description").on("click", "textareas", function(){
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("textarea")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
}) ;


$(".description").on("blur", "textarea", function() {
    
      var text = $(this)
        .val()
        .trim();
      
  
      
      var taskE = $("<textarea>")
        .addClass("textarea")
        .text(text);
  
      
      $(this).replaceWith(taskE);
    });  



    var currentHour = moment().hour();
    console.log(currentHour);
function changeColor(){
    // var time9 = "09:00";
    
    var time9M = moment(09, "HH");
    // var time10 = "10:00";
    var time10M = moment(10, "HH");
    // var time11 = "11:00";
    var time11M = moment(11, "HH");
    // var time12 = "12:00";
    var time12M = moment(12, "HH");
    // var time13 = "13:00";
    var time13M = moment(13, "HH");
    // var time14 = "14:00";
    var time14M = moment(14, "HH");
    // var time15 = "15:00";
    var time15M = moment(15, "HH");
    // var time16 = "16:00";
    var time16M = moment(16, "HH");
    // var time17 = "17:00";
    var time17M = moment(17, "HH");
    let checkHour= [time9M, time10M, time11M, time12M, time13M, time14M, time15M, time16M, time17M];
    let textAreaId9 = document.getElementById("9");
    let textAreaId10 = document.getElementById("10");
    let textAreaId11 = document.getElementById("11");
    let textAreaId12 = document.getElementById("12");
    let textAreaId13 = document.getElementById("13");
    let textAreaId14 = document.getElementById("14");
    let textAreaId15 = document.getElementById("15");
    let textAreaId16 = document.getElementById("16");
    let textAreaId17 = document.getElementById("17");
    let textAreaIdEl = [textAreaId9, textAreaId10, textAreaId11, textAreaId12, textAreaId13, textAreaId14, textAreaId15, textAreaId16, textAreaId17];

    console.log(checkHour);
    // $(textAreaIdEl[i]).removeClass("future past present");
    for (let i = 0; i < checkHour.length; i++) {
       
        if(moment().isAfter(checkHour[i], 'hour')){
        $(textAreaIdEl[i]).addClass("past");
      
      }
      else if(moment().isSame(checkHour[i], 'hour')){
        $(textAreaIdEl[i]).addClass("present")
      }
      else{
        $(textAreaIdEl[i]).addClass("future")
      };
      console.log(checkHour[i]);
    }

}
console.log(currentHour);
changeColor();
setInterval(changeColor, 1000*60*30);














































































































// let textAreaId9 = document.getElementById("9");
//     let textAreaId10 = document.getElementById("10");
//     let textAreaId11 = document.getElementById("11");
//     let textAreaId12 = document.getElementById("12");
//     let textAreaId13 = document.getElementById("13");
//     let textAreaId14 = document.getElementById("14");
//     let textAreaId15 = document.getElementById("15");
//     let textAreaId16 = document.getElementById("16");
//     let textAreaId17 = document.getElementById("17");
//     let textAreaIdEl = [textAreaId9, textAreaId10, textAreaId11, textAreaId12, textAreaId13, textAreaId14, textAreaId15, textAreaId16, textAreaId17];









// for (let i = 0; i = checkHour.length; i++) {
//     console.log(checkHour[0]);
    // var checkHour = [
    //     {
    //         timeNow: "09:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "10:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "11:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "12:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "13:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "14:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "15:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    //     {
    //         timeNow: "16:00",
    //         timeNowMoment: moment(timeNow),
            
    //     },
    //     {
    //         timeNow: "17:00",
    //         timeNowMoment: moment(timeNow)
    //     },
    // ];