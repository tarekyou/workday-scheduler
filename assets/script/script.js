var today = (moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
$("#currentDay").text(today);

let tasks = [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
$(".saveBtn").on("click", saveTasks());

function loadTasks(){
    JSON.parse(localStorage.getItem("tasks"))
    if(!tasks){
        tasks = {};
    };
}


$(".description").on("click", "tasksintextarea", function(){
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
    for (let i = 0; i < checkHour.length; i++) {
        if(moment().isAfter(checkHour[i])){
        $("textarea").addClass("past")
      }
      else if(moment().isSame(checkHour[i])){
        $("textarea").addClass("present")
      }
      else{
        $("textarea").addClass("future")
      }
    }

}
changeColor();
setInterval(changeColor, 1000*60*30);
























































































































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