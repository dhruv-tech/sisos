$(document).ready(function() {
    var window_size = $(window).height();
    $("#scriptUI").css("height", window_size);
    $('#username').focus();
    console.log("(C) 2015 Dhruv M. All Rights Reserved. || Frontend Application is Starting Up.)");
    console.log("Verified as Internal Exit Service, with Restricted/Designated Access.");
    console.log("Senario Type B, Serviced Accordingly");
    var data = new Date();
    var today = data.getDay() + 1;
    if (today == "2") {
        $("body").css({
            "background": "url('monday.jpg') no-repeat center center fixed"
        })
    } else if (today == "3") {
        $("body").css({
            "background": "url('tuesday.jpg') no-repeat center center fixed"
        })
    } else if (today == "4") {
        $("body").css({
            "background": "url('wednesday.jpg') no-repeat center center fixed"
        })
    } else if (today == "5") {
        $("body").css({
            "background": "url('thursday.jpg') no-repeat center center fixed"
        })
    } else if (today == "6") {
        $("body").css({
            "background": "url('friday.jpg') no-repeat center center fixed"
        })
    } else if (today == "7" || today == "1") {
        window.location = "index.html"
    }
    $.get("http://ipinfo.io", function(response) {
        if (response.ip == "122.180.116.242") {
            alert("Out-Terminal: Access Granted.");
        } else if (response.ip == "203.122.50.220") {
            alert("Out-Terminal: Access Granted.");
        } else {
            alert('Frontend Security: ACCESS DECLINED...');
            window.location = "outboundNetwork.htm"
        }
    }, "jsonp");
    if (typeof(Storage) !== "undefined") {
        var fullDate = new Date();
        console.log(fullDate);
        var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
        var currentDate = fullDate.getDate() + "" + twoDigitMonth + "" + fullDate.getFullYear();
        if (typeof(Storage) !== "undefined") {
            if (localStorage.tbsNow) {
                if (localStorage.tbsNow != currentDate) {
                    localStorage.tbsNow = currentDate
                } else {
                    if (localStorage.tbsCount == 5) {
                        alert("You have exceeded the maximum number of attempts");
                        window.location = 'http://british-school.org/'
                    } else {}
                }
            } else {
                localStorage.tbsNow = currentDate
            }
        } else {
            alert("Sorry, Your browser is not supported for security reasons. Please use a newer browser for this task; We'd recommend Microsoft Edge for the same.");
            window.location = 'http://british-school.org/'
        }
    }
});
var theForm = document.getElementById('theForm');
var messageEl = theForm.querySelector('.final-message');
new stepsForm(theForm, {
    onSubmit: function(form) {
        classie.addClass(theForm.querySelector('.simform-inner'), 'hide');
        $('input').blur();
        var messageEl = theForm.querySelector('.final-message');
        messageEl.innerHTML = '<img class="rotate" src="loading-icon.png" alt="Loading"/>';
        classie.addClass(messageEl, 'show');
        var userbox = $("#username").val();
        var passbox = $("#password").val();
        var dataString = "userbox=" + userbox + "&passbox=" + passbox + "";
        $.ajax({
            type: "POST",
            url: "/sisos/out",
            data: dataString,
            dataType: "json",
            success: function(data) {
                var $data = data.json_response;
                if ($data['result'] == "true") {
                    localStorage.clear();
                    if ($data['signed'] == "true") {
                        classie.addClass(messageEl, 'hide');
                        $(messageEl).css('color', 'white');
                        $('.container').css('background', 'rgba(45, 203,137,0.7)');
                        messageEl.innerHTML = '<span><big>:) Thank You.</big><br><small>Have a great day ahead.<small><span>';
                        classie.addClass(messageEl, 'show')
                    } else {
                        classie.addClass(messageEl, 'hide');
                        $(messageEl).css('color', 'white');
                        $('.container').css('background', 'rgba(255, 102,0,0.7)');
                        messageEl.innerHTML = '<span><big>:( Not Logged In.</big><br><small>You may proceed for now.<small><span>';
                        classie.addClass(messageEl, 'show');
                        if ($data['admin'] == "true") {
                            integrator()
                        }
                    }
                } else {
                    classie.addClass(messageEl, 'hide');
                    $(messageEl).css('color', 'white');
                    $('.container').css('background', 'rgba(204, 51,0,0.7)');
                    if (localStorage.tbsCount) {
                        localStorage.tbsCount = Number(localStorage.tbsCount) + 1
                    } else {
                        localStorage.tbsCount = 1
                    }
                    messageEl.innerHTML = '<span><big>:( Username or Password incorrect.</big></span><button type="reset" id="jbutton" onclick="window.location.reload();">Retry →</button>';
                    classie.addClass(messageEl, 'show')
                }
            },
            error: function() {
                alert("No Internet Connection");
                $("body").html("<h1>ERROR</h1> <br> <a href='index.html'>Try Again.</a>")
            }
        })
    }
});

function integrator() {
    var send = '<div id="faraway">\
<div class="fixed">\
<nav class="top-bar"data-topbar>\
<ul class="title-area">\
<li class="name">\
<h1><a href="#">Project SISOS</h1>\
</li>\
</ul>\
<section class="top-bar-section">\
<ul class="right">\
<li id="print"><a href="#"><IMG id="prt"src="prtico.png">Print</a></li>\
</ul>\
</section>\
</nav>\
</div>\
<div id="table"class="medium-10 small-12">\
<h3 id="sechead">Students Logged In.</h3>\
<h5 id="EmergencyCount">Marked:<b id="eCounter">0</b>/null</h5>\
<table style="width:100%"id="ajaxTable">\
<tr>\
<th>Name</th>\
<th>Year</th>' + '<th></th>\
</tr>\
</table>\
</div>\
</div>\
<script src="js/vendor/jquery.js"></script>\
<script src="js/foundation.min.js"></script>';
    var headtag = '<meta charset="utf-8">\
<meta http-equiv="X-UA-Compatible"content="IE=edge,chrome=1">\
<meta name="viewport"content="width=device-width">\
<title>SISOS-The British School Society Internal Applications Toolset.</title>\
<meta name="description"content="{NOT ALLOWED}">\
<link rel="stylesheet"href="normalize.css">\
<link rel="stylesheet"href="foundation.css">\
<link rel="stylesheet"href="DhruvStyle.css">\
<script src="js/vendor/modernizr.js"></script>"';
    $("body").css({
        "background": "white"
    });
    $("head").html(headtag);
    $("body").html(send);
    $("title").html("Authorized Access - SISOS - The British School Society (New Delhi).");
    teacher()
}

function teacher() {
    var dataString = "rows=get";
    $.ajax({
        type: "POST",
        url: "/sisos/testDB",
        data: dataString,
        dataType: "json",
        success: function(data) {
            var row_string = data.result;
            var rows = parseInt(row_string);
            $("#EmergencyCount").html('Marked: <b id="eCounter">0</b>/' + row_string);
            var count = 1;
            if (rows == 0) {
                alert("No student(s) have registered their stay back yet.")
            };
            while (count <= rows) {
                var row_num = count.toString();
                var dataString = "receive=" + row_num + "";
                $.ajax({
                    type: "POST",
                    url: "/sisos/sendNameYear",
                    async: false,
                    cache: false,
                    timeout: 30000,
                    data: dataString,
                    dataType: "json",
                    success: function(data) {
                        var $data = data.json_response;
                        var got = '<tr id="rw' + row_num + '">\
<td>' + $data['name'] + '</td>\
<td>' + $data['year'] + '</td>\
<td><input type="checkbox"class="attn"name="' + row_num + '"></td>\
</tr>';
                        $("#ajaxTable").append(got)
                    },
                    error: function() {
                        alert("ERROR: Servlet[GetDetails] Did Not Respond.")
                    },
                    complete: function() {
                        count = count + 1
                    }
                })
            }
        },
        error: function() {
            alert("ERROR: Servlet[RowCheck] Did Not Respond.")
        },
        complete: function() {
            $("body").append("<script src= 'js/Dhruv-EmergencyProcessing.js'></script>")
        }
    })
}
