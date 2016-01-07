$(function () {
    $.ajax({
        dataType: "jsonp",
        url: 'https://api.bintray.com/packages/cockatrice/Cockatrice/Cockatrice/files',
        crossDomain: true
    }).done(function (data) {
        alert(data);
    });
});