"use strict";

$("form").on("submit", $e => {
    $e.preventDefault();
    const title = $("#title").val();
    const rating = $("#rating").val();

    const $movieRow = $("<tr>");
    const $titleData = $("<td>",{text : title});
    const $ratingData = $("<td>",{text : rating});
    const $removeButton = $("<button>",{text: "Remove"})
    .addClass("removeButton")
    .on("click", e => {
        $(e.target).parent().parent().remove();
    })

    const $buttonCell = $("<td>").append($removeButton);
    $movieRow.append($titleData)
    .append($ratingData)
    .append($buttonCell);




    $("tbody").append($movieRow);
})