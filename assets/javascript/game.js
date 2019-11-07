$(document).ready(function () {
    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    var computerChoice = Math.floor(Math.random() * 102) + 19;
    console.log("computerChoice: " + computerChoice);
    $(".randomNumber").html(computerChoice);

    var gemOne = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 1: " + gemOne);
    $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gemOne + ">");

    var gemTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemTwo);
    $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gemTwo + ">");

    var gemThree = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 3: " + gemThree);
    $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gemThree + ">");

    var gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 4: " + gemFour);
    $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gemFour + ">");

})