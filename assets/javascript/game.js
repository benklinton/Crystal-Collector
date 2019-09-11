$(document).ready(function() {
    var randomNumber = Math.floor(Math.random()* 120)
    $("#random-number").text(randomNumber);
    var counter = 0;
    $(".score-display").text(counter);
    var wins = 0;
    var loses = 0
    var crystalData = [];
    var crystalNum = 4;
    for(var i = 0; i < crystalNum; i++) {
        var crystalValue = Math.floor(Math.random(0)* 12)
        crystalData.push(crystalValue);
    }
    console.log(crystalData);
    $(".yellow-gem").on("click", function(){
        counter += crystalData[0];
        $(".score-display").text(counter);
    })
    $(".orange-gem").on("click", function() {
        counter+= crystalData[1];
        $(".score-display").text(counter);
    })
    $(".purple-gem").on("click", function() {
        counter+= crystalData[2];
        $(".score-display").text(counter);
    })
    $(".blue-gem").on("click", function() {
        counter+= crystalData[3];
        $(".score-display").text(counter);
    })

    if ( counter === randomNumber) {
        wins++
        $(".wins").text("" + wins);
        reset();
    }
    else if (counter >= randomNumber) {
        loses++
        $(".loses").text("" + loses);
        reset();
    }
})

var reset = function() {
    var resetRandomNumber = Math.floor(Math.random()* 120);
    $("#random-number").text(resetRandomNumber);
    var resetCounter = 0;
    $(".score-display").text(resetCounter);
    for(var i = 0; i < crystalNum; i++) {
        var crystalValue = Math.floor(Math.random(0)* 12)
        crystalData.push(crystalValue);
    }
}