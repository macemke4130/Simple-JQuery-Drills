$(document).ready(function () {
    $myBtn.prop('disabled', true);
});
let divCount = 1;

let $myBtn = $('#btnSubmit');
let $theInput = $('#myText');

// Classes for each new <div> --
let divClasses = ["shout", "d-flex", "justify-content-center", "mb-3"];

$myBtn.click(function () {
    let x = $theInput.val();
    //alert(x);

    // Appends a new <div> to the <body> --
    let $newDiv = $(document.body).append('<div id="' + divCount + '"></div>');

    // Adds classes from the divClasses array to the new <div>
    divClasses.forEach(e => { $('#' + divCount).addClass(e); });

    // Create new <h2> Commented out --
    //let $newH2 = $('#' + divCount).append('<h2 id="h' + divCount + '">' + x + '</h2>');

    divCount++;
    // Clears the input field for the next submission --
    $theInput.val("");

    let $allh2 = $('h2');
    $allh2.mouseover(function () {
        $(this).parent().css({
            "border-radius": "10px",
            "background-color": "red"
        });
    });

});

$($theInput).keyup(function () {
    if ($theInput.val() != "") {
        $myBtn.prop('disabled', false);
    } else {
        $myBtn.prop('disabled', true);
    }
});