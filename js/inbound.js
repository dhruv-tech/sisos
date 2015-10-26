// Dhruv M. 2015. Last Minute Coding...
$(document).ready(function () {
    $.get("http://ipinfo.io", function (response) {
            if (response.ip == "122.180.116.242") {}
            else if (response.ip == "203.122.50.220") {}
            else {window.location = "outboundNetwork.htm"}
        }, "jsonp");
        $.post("/sisos/checkDay", { check: 'noUrlmodification' }, function (data) {
            if (data == 8  || data == 7 || data == 1) {
                window.location = "index.html";
            }
        }, "json");
        	
});
