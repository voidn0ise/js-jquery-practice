var x = 16;
var y = 16;
var $row = $("<div />", {
  class: "row"
});
var $square = $("<div />", {
  class: "square"
});

$(document).ready(function() {

  function buildGrid(rows, columns) {
    var hcss = Math.floor(800 / rows) + "px";
    var wcss = Math.floor(800 / columns) + "px";
    for(var i = 0; i < rows; i++) {
      for(var z = 0; z < columns; z++){
        var sqq = $("<div class='square'></div>");
        sqq.appendTo('#wrapper');
      }
    }
    $(".row").css({"height": hcss, "width": "800px"});
    $(".square").css({"height": hcss, "width": wcss});
  }

  function clearGrid(){
    var q = confirm("Are you sure?");
    if (q == true) {
      $(".row").remove();
      $(".square").remove();
      $(".row").css({"height": '', "width": ''});
      $(".square").css({"height": '', "width": ''});
      buildGrid(x, y);
    }
  }

  function changeGrid(){
    var s = prompt("Enter an integer: ");
    if (Math.floor(s) == s) {
      $(".row").remove();
      $(".square").remove();
      $(".row").css({"height": '', "width": ''});
      $(".square").css({"height": '', "width": ''});
      buildGrid(s, s);
    }
  }

  $("body").on("mousedown", ".square", function() {
    $(".square").hover(function() {
      $(this).css("background", "#000");
    });
  });
  $("body").on("mouseup", ".square", function() {
    $(".square").off();
  });

  $("body").on("click", "#clear", function() {
    clearGrid();
  });

  $("body").on("click", "#size", function() {
    changeGrid();
  });

  buildGrid(x, y);
});
