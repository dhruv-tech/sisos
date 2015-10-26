function submission() {
    //Serializing Data
    dataString = $("#userpass").serialize();

    // ALTERNATE METHOD 
    var userid = $("#userbox").val();
    var passwrd = $("#passbox").val(); 
    dataString = "userbox=" + userid +"&passbox=" + passwrd + "";
    //dataString = "userbox=work&passbox=debug";

    //making the AJAX request...
    $.ajax({
        type: "POST",
        url: "/sisos/authCheckReg",
        data: dataString,
        dataType: "json",

        //If Response Recevied...
        success: function (data) {
            var $data = data.json_response;
            if ($data['result'] == "true") {
                if ($data['signed'] == "true") {
                    $("#ajaxResponse").html("Already Logged In.");
                }
                else {
                $("#kickstart").html('<h1 class="err greenc"><b>:)</b></h1><h5 class="err greenc"><b>You have been signed in.</b></h5>');
                      if ($data['admin'] == "true") {
                       integrator();
                       }
                }
            }
            else {
                $("#ajaxResponse").html("Username or Password is incorrect");
            }
        },

        //If there was no resonse from the server
        error: function () {
            alert("No Internet Connection");
            $("#ajaxResponse").html("ERROR");
        },

        complete: function () {
            //Something...
        }

    });
}
function integrator() {
    var send = '<div id="faraway"> \
    <div class="fixed"> \
        <nav class="top-bar" data-topbar> \
          <ul class="title-area"> \
            <li class="name"> \
              <h1><a href="#">Project SISOS</h1>\
            </li> \
          </ul> \
          <section class="top-bar-section">\
          <ul class="right">\
            <li class=""><a href="#" class="btn-teacherControl">Hide Marked</a></li>\
            <li id="print"><a href="#"><IMG id="prt" src="prtico.png">Print</a></li>\
          </ul>\
          </section>\
        </nav> \
    </div> \
    <div id="table" class="medium-10 small-12"> \
        <h3 id="sechead">Students Logged In.</h3> \
        <h5 id="EmergencyCount" class="yellow">Marked: <b id="eCounter">0</b>/3</h5> \
        <table style="width:100%" id="ajaxTable"> \
          <tr> \
            <th>Name</th>\
            <th>Year</th>' +
            '<th></th>\
          </tr> \
        </table>\
        <a href="#" class="button success small btn-teacherControl show-for-small-only">Hide Marked</a> \
    </div>\
    </div>\
    <script src= "js/vendor/jquery.js"></script>\
    <script src= "js/foundation.min.js"></script>\
    <script src= "js/Dhruv-EmergencyProcessing.js"></script>'
        $("body").css({ "background": "white" });
        $("body").html(send);
        $("title").html("Authorized Access - SISOS - The British School Society (New Delhi).");
        teacher();
    }
function teacher() {
    //Serializing Data
    dataString = $("#userpass").serialize();

    //ALTERNATE METHOD
    dataString = "rows=get";

    //making the AJAX request...
    $.ajax({
        type: "POST",
        url: "/sisos/testDB",
        data: dataString,
        dataType: "json",

        //If Response Recevied...
        success: function (data) {
            row_string = data.result;
            rows = parseInt(row_string);
            count = 1;
            while(count <= rows){
                row_num = count.toString();
                dataString = "receive=" + row_num + "";
                $.ajax({
                    type: "POST",
                    url: "/sisos/sendNameYear",
                    async: false,
                    cache: false,
                    timeout: 30000,
                    data: dataString,
                    dataType: "json",

                    //If Response Recevied...
                    success: function (data) {
                        var $data = data.json_response;
                        got = '<tr id="rw' + row_num + '"> \
                                <td>' + $data['name'] + '</td> \
                                <td>' + $data['year'] + '</td>\
                                <td><input type="checkbox" class="attn" name="' + row_num + '"></td>\
                              </tr>';
                        $("#ajaxTable").append(got);
                    },

                    //If there was no resonse from the server
                    error: function () {
                        alert("ERROR: Servlet[GetDetails] Did Not Respond.");
			count = rows+1;
                   },

                    complete: function () {
                        count = count + 1
                   }
             });
           }

        },

        //If there was no resonse from the server
        error: function () {
            alert("ERROR: Servlet[RowCheck] Did Not Respond.");
        },

        complete: function () {
        }
});
}
function timeElapsed() {
    //Serializing Data
    dataString = $("#userpass").serialize();

    // ALTERNATE METHOD 
    var userid = $("#userbox").val();
    var passwrd = $("#passbox").val(); 
    dataString = "userbox=" + userid +"&passbox=" + passwrd + "";
    //dataString = "userbox=work&passbox=debug";

    //making the AJAX request...
    $.ajax({
        type: "POST",
        url: "/sisos/authCheckRegT",
        data: dataString,
        dataType: "json",

        //If Response Recevied...
        success: function (data) {
            var $data = data.json_response;
            if ($data['result'] == "true") {
                if ($data['signed'] == "true") {
                    $("#ajaxResponse").html("Already Logged In.");
                }
                else {
                $("#kickstart").html('<h1 class="err greenc"><b>:(</b></h1><h5 class="err greenc"><b>Not Allowed.</b></h5>');
                      if ($data['admin'] == "true") {
                       integrator();
                       }
                }
            }
            else {

                       	$("#ajaxResponse").html("Username or Password is incorrect");
                
            }
        },

        //If there was no resonse from the server
        error: function () {
            alert("No Internet Connection");
            $("#ajaxResponse").html("ERROR");
        },

        complete: function () {
            //Something...
        }

    });
}