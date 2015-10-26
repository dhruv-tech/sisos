$(document).ready(function(){
$('td>input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
        var getInfo = $(this).attr('name');
        var rowIndentify = "#rw" + getInfo;
        $(rowIndentify).attr('class', 'green');
        var count = $("#eCounter").html();
        count = parseInt(count);
        count = count + 1;
        count = count.toString();
        $("#eCounter").html(count);


    }
    else {
        var getInfo = $(this).attr('name');
        var rowIndentify = "#rw" + getInfo;
        $(rowIndentify).removeAttr('class');
        var countr = $("#eCounter").html();
        countr = parseInt(countr);
        countr = countr - 1;
        countr = countr.toString();
        $("#eCounter").html(countr);
    }
});
$('#print').click(function () {
    window.print();
});
});