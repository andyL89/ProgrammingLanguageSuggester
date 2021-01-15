$(document).ready(function() {
  $(".btn1").submit1(function(event) {
    $("#formOne").show();
    event.preventDefault();
  // });
  $("#formTwo").submit2(function(event) {
    const ageInput = parseInt($("input#age").val());
    const nameInput = $("input#name").val();
    const operatingSystemInput = $("input#operatingSystem").val();
    const whichEndInput = $("input#whichEnd").val();
    const experienceInput = $("input#experience").val();
    const troubleShootInput = $("input#troubleShoot").val();

    $(".age").text(ageInput);
    $(".name").text(nameInput);
    $(".operatingSystem").text(operatingSystemInput);
    $(".whichEnd").text(whichEndInput);
    $(".experience").text(experienceInput);
    $(".troubleShoot").text(troubleShootInput);

    $("#confirmation").show();

    event.preventDefault();
  });
  });
});