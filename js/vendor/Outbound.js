// Dhruv Malik 2015. Last minute...
var theForm = document.getElementById('theForm');
var messageEl = theForm.querySelector('.final-message');
$(document).ready(function () {
    classie.addClass(theForm.querySelector('.simform-inner'), 'hide');
    var messageEl = theForm.querySelector('.final-message');
    messageEl.innerHTML = '<img class="rotate" src="loading-icon.png" alt="Loading"/><span> Verifiying Location </span>';
    classie.addClass(messageEl, 'show');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendPosition);
    } else {
        messageEl.innerHTML = '<p>Location Not Supported by Browser</p>';
    }

});

function sendPosition(position) {
    var lati = position.coords.latitude;
    var long = position.coords.longitude;
    var dataString = "lat=" + lati + "&lon=" + long + "";
    var messageEl = theForm.querySelector('.final-message');
    //making the AJAX request...
    $.ajax({
        type: "POST",
        url: "/latLon",
        data: dataString,
        dataType: "json",

        //If Response Recevied...
        success: function (data) {
            var mydata = data.location;
            alert(mydata);
            if (mydata == true) {
                alert("IN TRUE");
                messageEl.innerHTML = "";


            }
            else {
                messageEl.innerHTML = '<p> You are not in school. <br> <small> If you think you got this in error then connect to school wifi and try again.<small></p>';
            }
        },

        //If there was no resonse from the server
        error: function () {
            alert("No Internet Connection");
            $("body").html("<h1>ERROR</h1> <br> <a href='index.html'>Try Again.</a>");
        },

    });

}