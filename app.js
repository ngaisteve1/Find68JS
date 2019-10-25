$(function() {
  //Create an array to store all the '8'
  // const arr = [];
  var element = "8";
  const elementToFind = "6";
  const totalRow = 5;
  const totalCol = 10;

  const playGame = () => {
    // arr.length = 0;
    $("#main").empty();
    const randomRowNo = Math.floor(Math.random() * totalRow);
    const randomColNo = Math.floor(Math.random() * totalCol);

    for (let x = 0; x < totalRow; x++) {
      const nodeRow = document.createElement("div"); // <div></div>

      for (let y = 0; y < totalCol; y++) {
        let textNode;

        const nodeCol = document.createElement("span"); // <span></span>

        if (x == randomRowNo && y == randomColNo) {
          textNode = document.createTextNode(elementToFind);
          // arr.push(elementToFind);
        } else {
          textNode = document.createTextNode(element);
          // arr.push(element);
        }

        nodeCol.appendChild(textNode); // <span>8</span>
        nodeRow.appendChild(nodeCol); // <div><span>8</span></div>
      }

      document.getElementById("main").appendChild(nodeRow);
    }

    //console.log(arr);

    $("span").click(function() {
      if (this.innerText == elementToFind) {
        $("#result").text("You found it.");
        console.log("You found it.");
      } else {
        $("#result").text("Try again.");
        console.log("Try again.");
      }
    });
  };

  $("#btnNewGame").click(function() {
    playGame();
  });
});
