$(function() {
  const arr = [];
  const totalRows = 4;
  const totalCols = 15;
  const element = "8";
  const elementToFind = "6";

  $("#btnNewGame").click(function() {
    const randomRow = Math.floor(Math.random() * totalRows);
    const randomCol = Math.floor(Math.random() * totalCols);
    console.log(randomRow);
    console.log(randomCol);

    arr.length = 0;
    $("#main").empty();

    for (let x = 0; x < totalRows; x++) {
      const divRow = document.createElement("div");
      divRow.className = "row";
      debugger;
      for (let y = 0; y < totalCols; y++) {
        const divCol = document.createElement("span");
        if (x == randomRow && y == randomCol) {
          divCol.innerText = elementToFind;
          arr.push(elementToFind);
        } else {
          divCol.innerText = element;
          arr.push(element);
        }

        debugger;
        $(divRow).append(divCol);
      }
      $("#main").append(divRow);
    }

    console.log(arr);
    $("span").click(function() {
      // if you are using element parameter
      // then, element.target.textContent
      console.log($(this).text());
      if ($(this).text() == elementToFind) {
        $("#result").text("Great job! You found it");
        console.log("win");
      } else {
        $("#result").text("try again");
        console.log("try again");
      }
    });
  });
});
