
/// Play 1.1x for the 9 in 10 odds.
/// Will by default profit 0.9x% of bets, 1% loss or so.
/// 
/// On loss, continue with standard bet, no martingale.
/// On X consecutive losses, start the martingale (minimize max loss / buy more turns for set bankroll)
//

let standardBetAmount = 500000;
let currentBetAmount = 500000;
let cashOut = 125;
let martingaleMultiplier = 6;

let lossStreak = 0;
let maxLosses = 1;
let maxBet = 100000000;

engine.on('game_starting', function(info) {
    if(lossStreak > maxLosses) {
        currentBetAmount = currentBetAmount * martingaleMultiplier;
        console.log("Lost " + lossStreak + " in a row. Starting martgingale. Betting " + currentBetAmount);
    }else{
        currentBetAmount = standardBetAmount;
        console.log("Loss streak: " + lossStreak + "; maxLosses: " + maxLosses);
    }

    if(currentBetAmount <= maxBet) {
        engine.placeBet(currentBetAmount, cashOut);
        console.log("Placing bet of " + (currentBetAmount / 100));
    } else {
        console.log("Reached Max Bet. Amount: " + currentBetAmount + ", Max: " + maxBet);
    }
});

engine.on('game_crash', function(data) {
    if(engine.lastGamePlay()=='LOST'){
        console.log("Lost. Old streak: " + lossStreak + ". Adding +1");
        lossStreak++;
    } else {
        console.log("Did not lose, setting loss streak to 0");
        lossStreak = 0;
    }
});


////////

let isPlaying = false;
let isWaiting = false;
let playCount = 0;
let waitCount = 0;
let maxPlays = 5;
let maxWaits = 1;

engine.on('game_starting', function(info) {

    if(isPlaying) {
        engine.placeBet(betAmount, cashOut);
        console.log("Placing bet of " + betAmount + " for bet " + playCount + " of " + maxPlays);
    }
    console.log('Game Starting in ' + info.time_till_start);
});

engine.on('game_crash', function(data) {
    if(isWaiting) {
        if(waitCount >= maxWaits) {
            isWaiting = false;
            waitCount = 0;
            isPlaying = true;
        }else{
            waitCount++;
        }
        console.log('Game crashed at ' + data.game_crash + '. Waiting over, playing round.');
    }else if(isPlaying) {
        if(playCount >= maxPlays) {
            playCount = 0;
            isPlaying = false;
        }else{
            playCount++;
        }
        console.log('Game crashed at ' + data.game_crash + '. Playing game ' + playCount);
    }else if(data.game_crash < cashOut) {
        isWaiting = true;
        console.log('Game crashed at ' + data.game_crash + '. Waiting 1 game then playing.');
    }
});