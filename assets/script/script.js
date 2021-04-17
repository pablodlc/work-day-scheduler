// Setting empty vars to pass info to later to display current date and time
var datetime = null,
    date = null;

// Grabbing the user input text from `<textarea>` by hour
var inValue9 = $("#text9");
var inValue10 = $("#text10");
var inValue11 = $("#text11");
var inValue12 = $("#text12");
var inValue1 = $("#text1");
var inValue2 = $("#text2");
var inValue3 = $("#text3");
var inValue4 = $("#text4");
var inValue5 = $("#text5");

// Assigning the buttons vars
var btn9 = $("#nine");
var btn10 = $("#ten");
var btn11 = $("#eleven");
var btn12 = $("#twelve");
var btn1 = $("#one");
var btn2 = $("#two");
var btn3 = $("#three");
var btn4 = $("#four");
var btn5 = $("#five");

// Declaring the functions to save user input to local storage, which are on click events for each hour's save button
$(btn9).click(function () {
    if (inValue9.val() !== "") {
        localStorage.setItem("key9", inValue9.val());
    }
});

$(btn10).click(function () {
    if (inValue10.val() !== "") {
        localStorage.setItem("key10", inValue10.val());
    }
});

$(btn11).click(function () {
    if (inValue11.val() !== "") {
        localStorage.setItem("key11", inValue11.val());
    }
});

$(btn12).click(function () {
    if (inValue12.val() !== "") {
        localStorage.setItem("key12", inValue12.val());
    }
});

$(btn1).click(function () {
    if (inValue1.val() !== "") {
        localStorage.setItem("key1", inValue1.val());
    }
});

$(btn2).click(function () {
    if (inValue2.val() !== "") {
        localStorage.setItem("key2", inValue2.val());
    }
});

$(btn3).click(function () {
    if (inValue3.val() !== "") {
        localStorage.setItem("key3", inValue3.val());
    }
});

$(btn4).click(function () {
    if (inValue4.val() !== "") {
        localStorage.setItem("key4", inValue4.val());
    }
});

$(btn5).click(function () {
    if (inValue5.val() !== "") {
        localStorage.setItem("key5", inValue5.val());
    }
});


//Using moment.js to programatically set the date and time in `.jumbotron`
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

// Declaring a function that fires when the document has finished loading
$(document).ready(function () {
    // Putting `#datetime` in a variable, then using `update()` and `setInterval()` to update the displayed time in it every second
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
    // Using `localStorage.getItem` to display the user's input, proof of persistence
    inValue9.val(localStorage.getItem('key9'));
    inValue10.val(localStorage.getItem('key10'));
    inValue11.val(localStorage.getItem('key11'));
    inValue12.val(localStorage.getItem('key12'));
    inValue1.val(localStorage.getItem('key1'));
    inValue2.val(localStorage.getItem('key2'));
    inValue3.val(localStorage.getItem('key3'));
    inValue4.val(localStorage.getItem('key4'));
    inValue5.val(localStorage.getItem('key5'));
});