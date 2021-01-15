$(document).ready(function () {
  $("#formOne").submit(function (event1) {
    const nameInput = $("input#name").val();
    const operatingSystemInput = $("input#operatingSystem").val();
    const whichEndInput = $("input#whichEnd").val();
    const experienceInput = $("input#experience").val();
    const puzzleInput = $("input#puzzle").val();

    $(".name").text(nameInput);
    $(".operatingSystem").text(operatingSystemInput);
    $(".whichEnd").text(whichEndInput);
    $(".experience").text(experienceInput);
    $(".puzzle").text(puzzleInput);

    $(".confirmation").show();

    event1.preventDefault();

  });
  $("#formTwo").submit(function (event2) {
    const color = $("input:radio[name=animal]:checked").val();

    if (animal === Snake) {
      $("#python").show();
    } else {
      $("#ruby").show();
    }

    event2.preventDefault();
  })

});

