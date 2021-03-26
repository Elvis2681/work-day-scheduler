var currentTime= moment().format('LLLL');
var container= $(".container").children();

var saveBtn = $(".saveBtn");

function liveTimer (){
  $("#currentDay").text(currentTime);  
}

function colorizer(){
for (var i = 9; i <= 17; i++) {
    if (currentTime > [i] ) {
        $("#hour-"+[i]).addClass("past");
    } else if (currentTime == [i] ) {
        $("#hour-"+[i]).addClass("present");
    } else if (currentTime < [i] ) {
        $("#hour-"+[i]).addClass("future");
    }
}
}

saveBtn.on("click",function(event) {
    var words = $(this).siblings(".description").val();
    var identity = $(this).parent().attr("id");
    window.localStorage.setItem(identity,words)
    displayLocalStorage();
    
});

function displayLocalStorage(){
    var hour = 9;
    while(hour <= 17){
        var getLocal = window.localStorage.getItem
        ("hour-" + hour);
        $("#hour-" + hour + " > textarea ").val(getLocal);
        hour++
    };
}

displayLocalStorage();
setInterval(liveTimer,1000)
setInterval(colorizer,1000)




 //create variable that grabs children from current div
 // - get id for divs
 // - check the number is less than or equal or greater than
 //current hour with if statements
 // - updates the current div's bg color according to the if and else statement
 //*less than = gray ; equal = red ; greater than = gray 
 // - select current children which have the text area 
 // and button (correlate save to local storage)
 // - (jquery) add onclick listener to save the current value (with the current button class)
 // - grab value from local storage using the current number
 // div's id
 // - check if the value is not null, then grab text area from the 
 // current div (text area is the second children of the current div)[index at 1]
