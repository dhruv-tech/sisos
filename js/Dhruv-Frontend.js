$(document).ready(function () {
    $("#CompIMG").fadeIn(1000);
    $("#userbox").focus()
    //ALTERNATE METHOD
    dataString = "check=day";

    //making the AJAX request...
    $.ajax({
        type: "POST",
        url: "/sisos/checkDay",
        data: dataString,
        dataType: "json",

        //If Response Recevied...
        success: function (data) {
            var today = data;
            if (today == "1") {
                $("#day").html("Super Sunday");
                $("#information").html("Have a great day ahead !");
                $("#kickstart").html('<h1 class="err"><b>Sorry :(</b></h1><h5 class="err"><b>The system is currently inaccessible.</b></h5><br><div id="sat" class="err"><h3>Special Instructions for Sunday:</h3><b>If you are visiting school today, please follow the protocols as directed by the school staff on-duty.</b><br><br><h3>Login Schedule:</h3><b>Monday and Wednesday: <br> 3:05pm - 3:30pm <br> Tuesday and Thursday: <br> 2:15pm - 2:40pm <br> Friday: <br> 2:15pm - 3:30pm</b></div>');
                $("body").css({ "background": "url('sunday.jpg') no-repeat center center fixed" });
            }
            else if (today == "2") {
                $("#day").html("Manic Monday");
                $("body").css({ "background": "url('monday.jpg') no-repeat center center fixed" });
            }
            else if (today == "3") {
                $("#day").html("Tremendous Tuesday");
                $("body").css({ "background": "url('tuesday.jpg') no-repeat center center fixed" });
            }
            else if (today == "4") {
                $("#day").html("Wonderful Wednesday");
                $("body").css({ "background": "url('wednesday.jpg') no-repeat center center fixed" });
            }
            else if (today == "5") {
                $("#day").html("Thunder Thursday");
                $("body").css({ "background": "url('thursday.jpg') no-repeat center center fixed" });
            }
            else if (today == "6") {
                $("#day").html("Friendly Friday");
                $("body").css({ "background": "url('friday.jpg') no-repeat center center fixed" });
            }
            else if (today == "7") {
                $("#day").html("Shiny Saturday");
                $("#information").html("Project SISOS - Programmed by <b>Dhruv Malik</b> (frontend) and <b>Arjun Verma</b> (Backend)");
                $("#kickstart").html('<h1 class="err"><b>Sorry :(</b></h1><h5 class="err"><b>The system is currently inaccessible.</b></h5><br><div id="sat" class="err"><h3>Special Instructions for Saturday:</h3><b>If you are visiting school today, please follow the protocols as directed by the school staff on-duty.</b><br><br><h3>Login Schedule:</h3><b>Monday and Wednesday: <br> 3:05pm - 3:30pm <br> Tuesday and Thursday: <br> 2:15pm - 2:40pm <br> Friday: <br> 2:15pm - 3:30pm</b></div>');
                $("#sat").css({ "border-left": "5px Solid rgb(51, 204, 204)" });
                $("body").css({ "background": "url('saturday.jpg') no-repeat center center fixed" });
            }
            else if (today == "8") {
                $("#day").html(":( Not allowed.");
                $("#information").html("<b>The Login Time Has Elapsed.</b>");
                $("#kickstart").html('<h1 class="err"><b>Sorry :(</b></h1><h5 class="err"><b>The system is currently inaccessible.</b></h5><br><div id="sat" class="err"><h3>Login Schedule:</h3><b>Monday and Wednesday: <br> 3:05pm - 3:30pm <br> Tuesday and Thursday: <br> 2:15pm - 2:40pm <br> Friday: <br> 2:15pm - 3:30pm</b><br><a href="#" onclick="timepass()" id="timeUp"class="button expand">Admin Login</a></div>');
                $("#sat").css({ "border-left": "5px Solid rgb(51, 204, 204)" });
                $("body").css({ "background": "url('sunday.jpg') no-repeat center center fixed" });
            }

        },

        //If there was no resonse from the server
        error: function () {
            alert("OPP.");
            $("body").html("<h1>ERROR: The Server Did Not Respond.</h1>");
        },

        complete: function () {
            //Something...
        }

    });
    $("#userbox").focus(function () {
        $("#userme").css({ "background": "white", "border-left": "5px Solid rgb(51, 204, 204)" });
    });
    $("#userbox").focusout(function () {
        $("#userme").css({ "background": "none", "border-left": "5px solid transparent" });
    });
    $("#passbox").focus(function () {
        $("#passittomeman").css({ "background": "white", "border-left": "5px Solid rgb(51, 204, 204)" });
    });
    $("#passbox").focusout(function () {
        $("#passittomeman").css({ "background": "none", "border-left": "5px solid transparent" });
    });
});

function timepass() {

	var htmlSTring = '<form id="userpass" action="javascript:timeElapsed();">\
                        <div class="content-wrapper" id="userme">\
                            <label>\
                              <input type="text" id="userbox" placeholder="Username" required/>\
                            </label>\
                        </div>\
                        <div class="content-wrapper" id="passittomeman">\
                        <label>\
                          <input type="password" id="passbox" placeholder="Password" required/>\
                        </label>\
                        <button type="submit" class="small right success" id="formsend">Proceed</button>\
                        </div>\
			<p id="ajaxResponse"></p>\
                    </form>';
	$("#LOCATE").css({ "display": "none"});
	$("#kickstart").css({ "display": "block"});

	$("#kickstart").html(htmlSTring);
}
$(document).ready(function () {
	document.getElementById("day").style.visibility = "hidden";
	document.getElementById("information").style.visibility = "hidden";

	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendPosition);
    } else { 
        $("#LOCATETXT").html("ERR: GPS Not Supported By Browser.");
	$("#day").html("Location Error");
        $("#information").html("<b>Please contact the front desk.</b>");
    }

});

function sendPosition(position) {
    var lati = position.coords.latitude; 
    var long = position.coords.longitude;
    dataString = "lat=" + lati +"&lon=" + long + "";

    //making the AJAX request...
    $.ajax({
        type: "POST",
        url: "/sisos/latLon",
        data: dataString,
        dataType: "json",

        //If Response Recevied...
        success: function (data) {
	document.getElementById("day").style.visibility = "visible";

	document.getElementById("information").style.visibility = "visible";
            var mydata = data.location;
            if (mydata == true) {
	$("#LOCATE").css({ "display": "none"});
	$("#kickstart").css({ "display": "block"});


            }
            else {
                $("#LOCATETXT").html("Location invalid for student login.");
		$("#day").html("You Are Not In School");
                $("#information").html("<b>Recevied this in error? Connect to school wifi to verify location.</b>");
            }
        },

        //If there was no resonse from the server
        error: function () {
            alert("No Internet Connection");
            $("#LOCATETXT").html("ERROR");
	$("#day").html("Location Error");
        $("#information").html("<b>Please contact the front desk.</b>");
        },

        complete: function () {
            //Something...
        }

    });
	
}

