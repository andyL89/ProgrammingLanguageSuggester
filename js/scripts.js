$(document).ready(function () {
  $("#formOne").submit(function (event) {
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

    $("#confirmation").show();

    event.preventDefault();

    


  });
});

