// javascript for game


//------------------//
// JSON objects
//------------------//
var crystalObject = {
    "blueNumber": 0,
    "greenNumber": 0,
    "redNumber": 0,
    "purpleNumber": 0,
    "crystalNumber": 0,
    "totalNumber": 0
};

var trackGameObject = {
    "isFirstTimeThrough": true,
    "winCntr": 0,
    "lossCntr": 0,
    "winLoseMsg": ""
};

//------------------//
//global variables 
//------------------//

var lossCount = 0;
var winCount = 0;
var storedWinCntr;
var storedLoseCntr;



//---------------------------//
// functions
//---------------------------//
function getRandomNumber(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}


// initialize json variables and intialize the DOM
function beginGame(theTrackGameObject) {
    theTrackGameObject.winLoseMsg = "";
    theTrackGameObject.isFirstTimeThrough = false;
    $('#winLoseMsg').text(theTrackGameObject.winLoseMsg);
    $("#playAgain").hide();
    return theTrackGameObject;

}

// initialize json crystalaNumber object and display to the DOM
function initializeCrystalObject(theCrystalObject) {
    theCrystalObject.blueNumber = getRandomNumber(1, 12);
    theCrystalObject.greenNumber = getRandomNumber(1, 12);
    theCrystalObject.redNumber = getRandomNumber(1, 12);
    theCrystalObject.purpleNumber = getRandomNumber(1, 12);
    theCrystalObject.crystalNumber = getRandomNumber(19, 120);
    theCrystalObject.totalNumber = 0;
    $('#crystal').text(theCrystalObject.crystalNumber);
    $('#total').text(theCrystalObject.totalNumber);
    return theCrystalObject;

}

// process a loss
function processLoss(theTrackLossObject) {
    theTrackLossObject.winLoseMsg = "You Lose!";
    theTrackLossObject.lossCntr++;
    console.log("theTrackLossObject.lossCntr" + theTrackLossObject.lossCntr);
    theTrackLossObject = processWinOrLoss(theTrackLossObject);
    return theTrackLossObject;
}

// process a win
function processWin(theTrackWinObject) {
    theTrackWinObject.winLoseMsg = "You Win!";
    theTrackWinObject.winCntr++;
    theTrackWinObject = processWinOrLoss(theTrackWinObject);
    return theTrackWinObject;
}

// nested function is called from  processLoss and processWin functions
function processWinOrLoss(theTrackWinOrLossObject) {
    $('#winLoseMsg').html(theTrackWinOrLossObject.winLoseMsg);
    $('#winCntr').html(theTrackWinOrLossObject.winCntr);
    console.log("theTrackWinOrLossObject.lossCntr" + theTrackWinOrLossObject.lossCntr);
    $('#lossCntr').html(theTrackWinOrLossObject.lossCntr);
    $('#blue', '#red', '#green', '#purple').off('click');
    $("#playAgain").show();
    return theTrackWinOrLossObject;

}

// update the total and then update the total in the DOM
function updateTotalCounter(theTotalNumber, theButtonNumber) {
    theTotalNumber = theTotalNumber + theButtonNumber;
    $('#total').html(theTotalNumber);
    return theTotalNumber;
}




//----------------------//
// main processing
//----------------------//
$(document).ready(function () {

    if (trackGameObject.isFirstTimeThrough) {
        // initialize numbers and hide the play Again message
        crystalObject = initializeCrystalObject(crystalObject);
        trackGameObject = beginGame(trackGameObject);
    }


    // clicking yes or no buttons determines if player wants to play again or not
    $("#yes").click(function () {
        // initialize numbers and hides the playAgain message and buttons
        crystalObject = initializeCrystalObject(crystalObject);
        trackGameObject = beginGame(trackGameObject);
    });

    $("#no").click(function () {
        // display the gameOver page
    //    move the win and loss counters to the gameOver page
        localStorage.winCounter  =  trackGameObject.winCntr;
        localStorage.lossCounter = trackGameObject.lossCntr;
        
        $('#lossCntr').text(localStorage.lossCounter);
        $('#winCntr').text(localStorage.winCounter);
        window.location = 'gameOver.html';
    });


    // process a blue button click
    $('#blue').click(function () {
        crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.blueNumber);
        if (parseInt(crystalObject.totalNumber) > parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processLoss(trackGameObject);

        } else if (parseInt(crystalObject.totalNumber) === parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processWin(trackGameObject);
        }
    });

    // process a green button click
    $('#green').click(function () {
        crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.greenNumber);
        if (parseInt(crystalObject.totalNumber) > parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processLoss(trackGameObject);

        } else if (parseInt(crystalObject.totalNumber) === parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processWin(trackGameObject);
        }
    });

    // process a red button click
    $('#red').click(function () {
        crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.redNumber);
        if (parseInt(crystalObject.totalNumber) > parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processLoss(trackGameObject);

        } else if (parseInt(crystalObject.totalNumber) === parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processWin(trackGameObject);
        }
    });

    // process a purple button click
    $('#purple').click(function () {
        crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.purpleNumber);
        if (parseInt(crystalObject.totalNumber) > parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processLoss(trackGameObject);

        } else if (parseInt(crystalObject.totalNumber) === parseInt(crystalObject.crystalNumber)) {
            trackGameObject = processWin(trackGameObject);
        }
    });

});