var abi = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"freezeIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"freezeDuration","type":"uint256"}],"name":"TokensFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":true,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"freezeIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"freezeDuration","type":"uint256"}],"name":"TokensUnfrozen","type":"event"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_freezeIndex","type":"uint256"},{"internalType":"uint256","name":"_timeToAdd","type":"uint256"}],"name":"addFreezeTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposits","outputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"depositTime","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"freezeDuration","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_freezeIndex","type":"uint256"}],"name":"getDepositByID","outputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_depositTime","type":"uint256"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"},{"internalType":"uint256","name":"_freezeDuration","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getDepositCount","outputs":[{"internalType":"uint256","name":"_freezeCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"}],"name":"getTokenCount","outputs":[{"internalType":"uint256","name":"_freezeCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"address","name":"_tokenContract","type":"address"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokensFrozen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_freezeIndex","type":"uint256"}],"name":"unfreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
var erc20abi = JSON.parse('[{"constant":true,"inputs":[],"name":"burnPercent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardEthBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningDifficulty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rewardEra","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningTarget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getChallengeNumber","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxSupplyForEra","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardTo","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"},{"name":"challenge_number","type":"bytes32"},{"name":"testTarget","type":"uint256"}],"name":"checkMintSolution","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epochCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_MAXIMUM_TARGET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"miningTarget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"challengeNumber","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"},{"name":"challenge_number","type":"bytes32"}],"name":"getMintDigest","outputs":[{"name":"digesttest","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_BLOCKS_PER_READJUSTMENT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"latestDifficultyPeriodStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_MINIMUM_TARGET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"reward_amount","type":"uint256"},{"indexed":false,"name":"epochCount","type":"uint256"},{"indexed":false,"name":"newChallengeNumber","type":"bytes32"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]');


var address = '0xe8699d19dd55a5b0d272adf22180220e6b91a16a';
var web3 = new Web3(Web3.givenProvider || "ws://infura.io/ws/v3/244edbea5c684f28abebcff483b9a8b9");
var contract = new web3.eth.Contract(abi, address);

let ethereumEnabled;
ethereumEnabled = false;

let walletAddress;
let depositCount;
let depositArray = [];

$(document).ready(async function() {
    getUserStats();
    $("#tokenAddress").keyup(function() {
        validateTokenAddress();
    });
    $("#myTokenBalance").on('click', async function(e) {
        alert("test");
       // $("#freezeAmount").val("100");
        e.preventDefault();
    });
});


async function validateTokenAddress() {
    
    try {
        var tokenAddress = $("#tokenAddress").val();
        var tokenWeb3 = new Web3(Web3.givenProvider || "ws://infura.io/ws/v3/244edbea5c684f28abebcff483b9a8b9");
        var tokenContract = new tokenWeb3.eth.Contract(erc20abi, tokenAddress);
        var tokenName;
        var tokendecimals;
        var tokenSymbol;
        tokenName = await tokenContract.methods.name().call();
        tokenSymbol = await tokenContract.methods.symbol().call();

        let tokenInfo = "";

        $("#tokenInfoName").html('<a href="https://etherscan.io/token/' + tokenAddress + '" target="_new">' + tokenName + '</a>');
        $("#tokenInfoSymbol").html(tokenSymbol);
        //$("#tokenInfoAddress").html(tokenAddress);

        try {
            tokenDecimals = await tokenContract.methods.decimals().call();
            $("#tokenInfoDecimals").html(tokenDecimals);
        } catch(e) {
            tokenDecimals = 1;
            $("#tokenInfoDecimals").html("1");
        }

        try {
            myTokenBalance = await tokenContract.methods.balanceOf(walletAddress).call();
            myTokenBalance /= Math.pow(10, tokenDecimals);
            $("#tokenInfoBalance").html(myTokenBalance);
        } catch(e) {
            $("#tokenInfoBalance").html("Could not get balance.");

        }

    } catch(e) {
        $("#tokenInfoName").html("N/A");
        $("#tokenInfoSymbol").html("N/A");
        $("#tokenInfoAddress").html("N/A");
        $("#tokenInfoAddress").html("Not a valid ERC20 Token Contract Address");
        $("#tokenInfoBalance").html("N/A");
        $("#tokenInfoDecimals").html("N/A");

        console.log(e);
    }
}


$(".enableEthereum").click(async function(e) {
    ethereum.enable().then ( (x) => {
        ethereumEnabled = true;
        walletAddress = `${x[0]}`;
        console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
        getUserStats(walletAddress);
        $("#freezeButton").html("Freeze");

        $("#freezeAmount").removeAttr("disabled");
        $("#tokenAddress").removeAttr("disabled");
    });
    e.preventDefault();
});


async function getUserStats() {
    if(ethereumEnabled) {
        try {
            depositCount = await contract.methods.getDepositCount(walletAddress).call();
            console.log("depositCount: "+ depositCount);
        } catch(e) {
            depositCount = 0;
            console.log("No depositCount found for address" + walletAddress);
        }

        let statsBox;
        statsBox = "<table class='statsBox'>";
        statsBox = statsBox + "<tr class='statsBox'><th>id</th><th>time</th><th>token</th><th>amount</th><th>unlocked</th></tr>";
        for(i=0; i<depositCount; i++) {
            depositArray[i] = await contract.methods.getDepositByID(walletAddress, i).call();

            //
            // ToDo: Need to cache token address and info after first request. 
            //
            var tokenAddress = depositArray[i][1];
            var tokenWeb3 = new Web3(Web3.givenProvider || "ws://infura.io/ws/v3/244edbea5c684f28abebcff483b9a8b9");
            var tokenContract = new tokenWeb3.eth.Contract(erc20abi, tokenAddress);
            var tokenName;
            var tokendecimals;
            var tokenSymbol;
            var currentTime = new Date();
            var depositTime = new Date(depositArray[i][2] * 1000);
            var unfreezeDate = new Date((depositArray[i][2] * 1000) + (depositArray[i][4] * 1000));;

            console.log("deposit time: ", depositTime)
            console.log("unfreeze time: ", unfreezeDate)


            try {
                tokenName = await tokenContract.methods.name().call();
            } catch(e) {
                tokenName = depositArray[i][1];
            }    

            try {
                tokenSymbol = await tokenContract.methods.symbol().call();
            } catch(e) {
                tokenSymbol = depositArray[i][1];
            }    

            try {
                tokenDecimals = await tokenContract.methods.decimals().call();
            } catch(e) {
                tokenDecimals = 1;
            }    
    
            let theAmount = depositArray[i][3];
            theAmount /= Math.pow(10, tokenDecimals);

            let freezeDisabled = "disabled";

            if(currentTime > unfreezeDate) {
                freezeDisabled = "enabled";
            }
            var dateOptions = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
            statsBox = statsBox + "<tr>";
            statsBox = statsBox + "<td>" + i+ "</td>";
            statsBox = statsBox + "<td>" + depositTime.toLocaleDateString("en-US", dateOptions) +  "</td>";
            statsBox = statsBox + "<td><a href='https://etherscan.io/token/" + tokenAddress + "' target='_new'>" + tokenName +  "</a></td>";
            statsBox = statsBox + "<td>" + theAmount.toFixed(5) + " " + tokenSymbol + "</td>";
            statsBox = statsBox + "<td>" + unfreezeDate.toLocaleDateString("en-US", dateOptions) +  "</td>";
            statsBox = statsBox + "<td><a class='addTimeButton btn btn-primary btn-sm ml-1 my-1 mx-1 pull-left' href='#user'>+</a>";
            statsBox = statsBox + "<a id='unfreezeButton' class='unfreezeButton btn btn-primary btn-sm ml-1 my-1 mx-1 pull-left " + freezeDisabled + "' index='" + i + "' href='#user'>Unfreeze</a></td>";
            
            statsBox = statsBox + "</tr>";
        }
        statsBox = statsBox + "</table>";
        $(".statsBox").html(statsBox);
    }

    setTimeout(getUserStats, 60000);
}


$("#freezeButton").click(async function(e) {
    if(ethereumEnabled) {
        var theTokenDecimals = $("#tokenInfoDecimals").html();
        console.log(theTokenDecimals);
        
        freezeAmount = $("#freezeAmount").val();
        freezeAmount *= Math.pow(10, theTokenDecimals);

        console.log(freezeAmount);

        try {
            var tokenAddress = $("#tokenAddress").val();
            var tokenWeb3 = new Web3(Web3.givenProvider || "ws://infura.io/ws/v3/244edbea5c684f28abebcff483b9a8b9");
            var tokenContract = new tokenWeb3.eth.Contract(erc20abi, tokenAddress);
            txHash = await tokenContract.methods.approveAndCall(address, freezeAmount, [ 0 ]).send({from: walletAddress});
            console.log(txHash);
            getUserStats();
        } catch(e) {
            console.log(e);
        }
    }
    e.preventDefault();
});


$(document).on('click', '.unfreezeButton', async function(e) {
    var depositIndex = $(this).attr("index");

    if(ethereumEnabled) {
        try {
            txHash = await contract.methods.unfreeze(depositIndex).send({from: walletAddress});
        } catch(e) {
            console.log("Could not unfreeze tokens");
        }
    }
    e.preventDefault();
});




/*
$("#wrapButton").click(async function(e) {
    if(ethereumEnabled) {
        wrapAmount =  web3.utils.toWei($("#wrapAmount").val(), 'ether');
        console.log(wrapAmount);
        tx = await contract.methods.deposit().send({from: walletAddress, value: wrapAmount});
    } else {
        ethereum.enable().then ( (x) => {
            ethereumEnabled = true;
            $("#enableEthereumBox").hide();
            $("#wrapButton").html("Wrap");
            $("#unwrapButton").html("Unwrap");

            walletAddress = `${x[0]}`;
            console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
        } );
    }
    e.preventDefault();
});

*/



