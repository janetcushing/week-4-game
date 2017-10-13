// javascript for week-4-game


//------------------//
// JSON objects
//------------------//
var crystalObject = {
    "blueNumber": 0,
    "greenNumber": 0,
    "redNumber": 0,
    "purpleNumber": 0,
    "crystalNumber": 0,
    "totalNumber": 0,
    "isFirstTimeThrough": true,
    "winCntr": 0,
    "lossCntr": 0,
    "winLoseMsg": ""
};

//------------------//
//global variables 
//------------------//



//---------------------------//
// functions
//---------------------------//

// get a random number
function getRandomNumber(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}


// initialize json crystalaNumber object and intialize the DOM
function initializeCrystalObject(theCrystalObject) {
    theCrystalObject.blueNumber = getRandomNumber(1, 12);
    theCrystalObject.greenNumber = getRandomNumber(1, 12);
    theCrystalObject.redNumber = getRandomNumber(1, 12);
    theCrystalObject.purpleNumber = getRandomNumber(1, 12);
    theCrystalObject.crystalNumber = getRandomNumber(19, 120);
    theCrystalObject.totalNumber = 0;
    theCrystalObject.winLoseMsg = "";
    theCrystalObject.isFirstTimeThrough = false;
    $('#crystal').text(theCrystalObject.crystalNumber);
    $('#total').text(theCrystalObject.totalNumber);
    $('#winLoseMsg').text(theCrystalObject.winLoseMsg);
    $("#playAgain").hide();
    console.log("theCrystalObject: " + theCrystalObject);
    return theCrystalObject;

}

// process the blue button click
function processBlueButtonClick(){
    crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.blueNumber);
    checkForWinOrLoss();
}

// process the green button click
function processGreenButtonClick(){
    crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.greenNumber);
    checkForWinOrLoss();
}

// process the red button click
function processRedButtonClick(){
    crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.redNumber);
    checkForWinOrLoss();
}

// process the purple button click
function processPurpleButtonClick(){
    crystalObject.totalNumber = updateTotalCounter(crystalObject.totalNumber, crystalObject.purpleNumber);
    checkForWinOrLoss();
}

// update the total and then update the total in the DOM
function updateTotalCounter(theTotalNumber, theButtonNumber) {
    theTotalNumber = theTotalNumber + theButtonNumber;
    $('#total').html(theTotalNumber);
    return theTotalNumber;
}

//check for win or loss
function checkForWinOrLoss() {
    if (parseInt(crystalObject.totalNumber) > parseInt(crystalObject.crystalNumber)) {
        crystalObject = processLoss(crystalObject);

    } else if (parseInt(crystalObject.totalNumber) === parseInt(crystalObject.crystalNumber)) {
        crystalObject = processWin(crystalObject);
    }
}

// process a loss
function processLoss(theCrystalLossObject) {
    theCrystalLossObject.winLoseMsg = "You Lose!";
    theCrystalLossObject.lossCntr++;
    theCrystalLossObject = processWinOrLoss(theCrystalLossObject);
    return theCrystalLossObject;
}

// process a win
function processWin(theCrystalWinObject) {
    theCrystalWinObject.winLoseMsg = "You Win!";
    theCrystalWinObject.winCntr++;
    theCrystalWinObject = processWinOrLoss(theCrystalWinObject);
    return theCrystalWinObject;
}

// nested function is called from  processLoss and processWin functions
function processWinOrLoss(theCrystalWinOrLossObject) {
    $('#winLoseMsg').html(theCrystalWinOrLossObject.winLoseMsg);
    $('#winCntr').html(theCrystalWinOrLossObject.winCntr);
    $('#lossCntr').html(theCrystalWinOrLossObject.lossCntr);
    $('#blueButton').off('click', );
    $('#redButton').off('click', );
    $('#greenButton').off('click', );
    $('#purpleButton').off('click', );
    $("#playAgain").show();
    return theCrystalWinOrLossObject;
}






//----------------------//
// main processing
//----------------------//
$(document).ready(function () {


    if (crystalObject.isFirstTimeThrough) {
        // initialize numbers and hide the play Again message
        crystalObject = initializeCrystalObject(crystalObject);
    }


    // clicking yes or no buttons determines if player wants to play again or not
    $("#yes").click(function () {
        //re-enable the colored crystal buttons
        $('#blueButton').on('click', processBlueButtonClick);
        $('#redButton').on('click', processRedButtonClick);
        $('#greenButton').on('click', processGreenButtonClick);
        $('#purpleButton').on('click', processPurpleButtonClick);
        // initialize numbers and hides the playAgain message and buttons
        crystalObject = initializeCrystalObject(crystalObject);
    });

    $("#no").click(function () {
        // display the gameOver page
        window.location = 'gameOver.html';
    });

  
    // process the colored crystal button clicks 
    $("#blueButton").click(processBlueButtonClick);
    $("#greenButton").click(processGreenButtonClick);
    $("#redButton").click(processRedButtonClick);
    $("#purpleButton").click(processPurpleButtonClick);
    

});