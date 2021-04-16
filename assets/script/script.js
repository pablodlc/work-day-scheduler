var now = moment().format('[Today is] dddd, MMMM D, YYYY, h:mm A');
var nowEl = document.querySelector("#currentDay");
nowEl.textContent = now;

$(".description").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();

    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
});