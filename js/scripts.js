$(document).ready(function() {
  $("#formOne").submit(function(event) {
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

    event.preventDefault();
    
  });
  $("#formTwo").submit(function() {
    const color = $("input:radio[name=animal]:checked").val();
    
    if (animal === Snake) {
      alert("SsssssssSSSssssss!");
      $("#python").show();
    } else {
      alert("Shine bright like a diamond!")
      $("#ruby").show();
    }
    
    
  })

});

