$(document).ready(function() {
    var randomNumber = Math.floor(Math.random()* 120)
    $("#random-number").text(randomNumber);
    var counter = 0;
    $(".score-display").text(counter);

    var crystalData = [];
    var crystalNum = 4;
    for(var i = 0; i < crystalNum; i++) {
        var crystalValue = Math.floor(Math.random(1) * 12)
        crystalData.push(crystalValue);
    }
    console.log(crystalData);
    $(".yellow-gem").attr()


})
