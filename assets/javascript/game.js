$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 120)
    $(".random-number").text(randomNumber);
    var wins = 0;
    var loses = 0;
    var counter = 0;
    $(".score-display").text(counter);
    var crystalData = [];
    var crystalNum = 4;
    for (var i = 0; i < crystalNum; i++) {
        var crystalValue = Math.floor(Math.random() * 12)
        crystalData.push(crystalValue);
    }

    console.log(crystalData);
    $(".yellow-gem").on("click", function () {
        counter += crystalData[0];
        $(".score-display").text(counter);
        winlose();
    })
    $(".orange-gem").on("click", function () {
        counter += crystalData[1];
        $(".score-display").text(counter);
        winlose();
    })
    $(".purple-gem").on("click", function () {
        counter += crystalData[2];
        $(".score-display").text(counter);
        winlose();
    })
    $(".blue-gem").on("click", function () {
        counter += crystalData[3];
        $(".score-display").text(counter);
        winlose();
    })
    var winlose = function () {
        if (randomNumber === counter) {
            wins++
            $(".win").text("Wins: " + wins);
            randomNumber = Math.floor(Math.random() * 120)
            $(".random-number").text(randomNumber);
            crystalData = [];
            crystalNum = 4;
            for (var i = 0; i < crystalNum; i++) {
                crystalValue = Math.floor(Math.random() * 12)
                crystalData.push(crystalValue);
            }
        }
        else if (randomNumber <= counter) {
            loses++
            $(".lose").text("Loses: " + loses);
            counter = 0;
            randomNumber = Math.floor(Math.random() * 120)
            $(".random-number").text(randomNumber);
            crystalData = [];
            crystalNum = 4;
            for (var i = 0; i < crystalNum; i++) {
                crystalValue = Math.floor(Math.random() * 12)
                crystalData.push(crystalValue);
            }
        }
    }
})
var reset = function () {
    randomNumber = Math.floor(Math.random() * 120)
    $(".random-number").text(randomNumber);
    crystalData = [];
    crystalNum = 4;
    for (var i = 0; i < crystalNum; i++) {
        crystalValue = Math.floor(Math.random() * 12)
        crystalData.push(crystalValue);
    }

}
