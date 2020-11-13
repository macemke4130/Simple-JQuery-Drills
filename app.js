$(document).ready(function () {
    $myBtn.prop('disabled', true);
});
let divCount = 1;
let liCount = 1;

let $myBtn = $('#btnSubmit');
let $theInput = $('#myText');
$(document.body).append('<div class="row d-flex justify-content-center"><ul id="myList"></ul></div>');

// Classes for each new <div> --
let divClasses = ["shout", "d-flex", "justify-content-center", "mb-3"];

$myBtn.click(function () {
    let typedOut = $theInput.val();

    $('#myList').append('<li id="li' + liCount + '">' + typedOut + '</li>');

    $theInput.val("");

    $('#li' + liCount).click(function (){
        console.log($(this).attr('id'));
    })

    liCount++;



    // Appends a new <div> to the <body> --
//    $(document.body).append('<div id="' + divCount + '"></div>');

    // Adds classes from the divClasses array to the new <div>
//    divClasses.forEach(e => { $('#' + divCount).addClass(e); });

    // Create new <h2> --
//    $('#' + divCount).append('<h2 id="h' + divCount + '">' + typedOut + '</h2>');

//    divCount++;
    // Clears the input field for the next submission --
//    

//    let $allh2 = $('h2');
//    $allh2.mouseover(function () {
//        $(this).parent().css({
//           "border-radius": "10px",
//            "background-color": "red"
//        });
//   });

}); // On Click End Curly --

$($theInput).keyup(function () {
    if ($theInput.val() != "") {
        $myBtn.prop('disabled', false);
    } else {
        $myBtn.prop('disabled', true);
    }
});


// $('li').click(function (){
//     console.log($(this).attr('id'));
// })