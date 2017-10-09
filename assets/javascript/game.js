// javascript for game

//------------------//
//global variables
//------------------//

var pinkNumber = 0;
var greenNumber = 0;
var redNumber = 0;
var purpleNumber = 0;
var crystalNumber = 0;
var totalNumber = 0;
var winLoseMsg = "";
var beginAgainMsg = "Do you want to play again?";
var isNewGame = true;
var winCntr = 0;
var loseCntr = 0;
var isLosingGame = false;

var playAgainHtml = '<div class="input-group">' +
    '<div id="radioBtn playAgain" class="btn-group">' +
    '<p>Do you want to play again?</p>' +
    '<a class="btn btn-primary btn-sm active" data-toggle="happy" data-title="Y">YES</a>' +
    '<a class="btn btn-primary btn-sm notActive" data-toggle="happy" ' + 'data-title="N">NO</a>' +
    '</div>' +
    '<input type="hidden" name="happy" id="happy">' +
    '</div>';


function getRandomNumber(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}





$(document).ready(function () {
    console.log('isNewGame: ' + isNewGame);

    if (isNewGame) {
        // initialize numbers and remove playAgain message
        pinkNumber = getRandomNumber(1, 12);
        greenNumber = getRandomNumber(1, 12);
        redNumber = getRandomNumber(1, 12);
        purpleNumber = getRandomNumber(1, 12);
        crystalNumber = getRandomNumber(19, 120);
        $('#crystal').text(crystalNumber);
        $("#playAgain").empty();
    }

    $('#pink').click(function () {
        totalNumber = totalNumber + pinkNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        }

    });

    $('#green').click(function () {
        totalNumber = totalNumber + greenNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        }
    });

    $('#red').click(function () {
        totalNumber = totalNumber + redNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        }
    });


    $('#purple').click(function () {
        totalNumber = totalNumber + purpleNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").append(playAgainHtml);
            $("#radioBtn").data("data-title", isNewGame);
        }
    });

});