"use strict";

function apiPull() {


    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: "get",
        success: function (data, textStatus, jQxhr) {
            buildTable(data);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    })
}

function buildTable(data) {
    let musicArray = "";
    $.each(data, function(index, value){
        let musicRow = 
            "<tr>"+
                "<td>"+value.id+"</td>"+
                "<td>"+value.title+"</td>"+
                "<td>"+value.album+"</td>"+
                "<td>"+value.artist+"</td>"+
                "<td>"+value.genre+"</td>"+
                "<td>"+value.releaseDate+"</td>"+
            "</tr>";
        $("#tabledata").append(
            musicRow
        );
    });
}

apiPull();
