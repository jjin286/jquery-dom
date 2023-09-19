"use strict";

$("form").on("submit", $e => {
    $e.preventDefault();
    const $movieTable = $("table");
    $movieTable
        .on("click", "button", handleRemove)
    const title = $("#title").val();
    const rating = $("#rating").val();

    $("tbody").append(makeMovieRow(title, rating));
});

/**Make a table row given title and rating, return the row */
function makeMovieRow(title, rating){
    const $movieRow = $("<tr>");
    const $titleData = $("<td>",{text : title});
    const $ratingData = $("<td>",{text : rating});
    const $removeButton = $("<button>",{text: "Remove"});

    const $buttonCell = $("<td>").append($removeButton);
    $movieRow
        .append($titleData)
        .append($ratingData)
        .append($buttonCell);

    return $movieRow;
}

/**Removes row containing target button */
function handleRemove(e){
    $(e.target).closest("tr").remove();
}
