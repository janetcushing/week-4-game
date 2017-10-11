// javascript for game

//------------------//
//global variables
//------------------//

// var crystalObject = {
//     "blueNumber": 0,
//     "greenNumber": 0,
//     "redNumber": 0,
//     "purpleNumber": 0,
//     "crystalNumber": 0,
//     "totalNumber": 0
// };

var blueNumber = 0;
var greenNumber = 0;
var redNumber = 0;
var purpleNumber = 0;
var crystalNumber = 0;
var totalNumber = 0;
var winLoseMsg = "";
var beginAgainMsg = "Do you want to play again?";
// var playAgain = true;
var winCntr = 0;
var loseCntr = 0;
var isFirstTimeThrough = true;
var storedWinCntr;
var storedLoseCntr;

var playAgainHtml = '<div class="input-group">' +
    '<div id="radioBtn" class="btn-group">' +
    '<p>Do you want to play again?</p>' +
    '<a class="btn btn-primary btn-sm active" id="yes" data-toggle="happy" data-title="Y" value="true">YES</a>' +
    '<a href="gameOver.html" class="btn btn-primary btn-sm notActive" id="no" data-toggle="happy" ' + 'data-title="N" value="false">NO</a>' +
    '</div>' +
    '<input type="hidden" name="happy" id="happy">' +
    '</div>';

//---------------------------//
// functions
//---------------------------//
function getRandomNumber(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}

function beginGame() {

}


//----------------------//
//main processing
//----------------------//
$(document).ready(function () {
    console.log("isFirstTimeThrough" + isFirstTimeThrough);

    if (isFirstTimeThrough) {
        // initialize numbers and remove playAgain message
        console.log("first time through");
        blueNumber = getRandomNumber(1, 12);
        greenNumber = getRandomNumber(1, 12);
        redNumber = getRandomNumber(1, 12);
        purpleNumber = getRandomNumber(1, 12);
        crystalNumber = getRandomNumber(19, 120);
        totalNumber = 0;
        winLoseMsg = "";
        $('#winLoseMsg').text(winLoseMsg);
        $('#crystal').text(crystalNumber);
        $('#total').text(totalNumber);
        $("#playAgain").hide();
        isFirstTimeThrough = false;
    }


    $("#yes").click(function () {
        // initialize numbers and remove playAgain message
        console.log("im in the yes fyunction");
        blueNumber = getRandomNumber(1, 12);
        greenNumber = getRandomNumber(1, 12);
        redNumber = getRandomNumber(1, 12);
        purpleNumber = getRandomNumber(1, 12);
        crystalNumber = getRandomNumber(19, 120);
        totalNumber = 0;
        winLoseMsg = "";
        $('#winLoseMsg').text(winLoseMsg);
        $('#crystal').text(crystalNumber);
        $('#total').text(totalNumber);
        $("#playAgain").hide();

    });

    $("#no").click(function () {
        window.location = 'gameOver.html';
    });

    $('#blue').click(function () {
        totalNumber = totalNumber + blueNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').click(false);
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            // sstoredLossCntr = Number(SessionStorage.lossCntr)
            $("#playAgain").show();
            // $("#radioBtn").data("data-title", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });

        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').click(false);
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").show();
            // $("#radioBtn").data("data-title", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });
        }
        console.log("playAgain" + playAgain);
    });

    $('#green').click(function () {
        totalNumber = totalNumber + greenNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').off('click');
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").show();
            // $("#radioBtn").data("data-title", playAgain);
            $("#radioBtn").click(function () {
                playAgain = $("#radioBtn").value;
            });
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').off('click');
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").show();
            // $("#radioBtn").data("data-title", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });
        }
    });

    $('#red').click(function () {
        totalNumber = totalNumber + redNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').off('click');
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").show();
            // $("#radioBtn").data("data-title", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').off('click');
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").show();
            // $("#radioBtn").data("value", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });
        }
    });


    $('#purple').click(function () {
        totalNumber = totalNumber + purpleNumber;
        $('#total').html(totalNumber);
        if (parseInt(totalNumber) > parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').off('click');
            winLoseMsg = "You Lose!";
            loseCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#lossCntr').html(loseCntr);
            $("#playAgain").show();
            // $("#radioBtn").data("data-title", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });
        } else if (parseInt(totalNumber) === parseInt(crystalNumber)) {
            $('#blue', '#red', '#green', '#purple').off('click');
            winLoseMsg = "You Win!";
            winCntr++;
            $('#winLoseMsg').html(winLoseMsg);
            $('#winCntr').html(winCntr);
            $("#playAgain").show();
            // $("#playAgain").append(playAgainHtml);
            // $("#radioBtn").data("data-title", playAgain);
            // $("#radioBtn").click(function () {
            //     playAgain = $("#radioBtn").value;
            // });
        }
    });


    // $("#playAgain").on("click", <a>, function(){blah})
});