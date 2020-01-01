var abi = JSON.parse('[{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getLastWithdrawal","outputs":[{"name":"_lastWithdrawal","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_tokenContract","type":"address"},{"name":"_extraData","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"_timeLeft","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getBalance","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amt","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"TokensFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amt","type":"uint256"},{"indexed":false,"name":"time","type":"uint256"}],"name":"TokensUnfrozen","type":"event"}]';
var address = '0x19E6BF254aBf5ABC925ad72d32bac44C6c03d3a4';
var web3 = new Web3(Web3.givenProvider || "ws://infura.io/ws/v3/244edbea5c684f28abebcff483b9a8b9");
var contract = new web3.eth.Contract(abi, address);

console.log
let ethereumEnabled = false;
let walletAddress;
let walletEther;
let walletTokens;

let contractTokenBalance;
let contractEtherBalance;
let contractTokenPrice;

$(document).ready(async function() {
    getContractStats();
});

$("#enableEthereum").click(function(e){
    ethereum.enable().then ( (x) => {
        ethereumEnabled = true;
        $(".eth-enabled").show();
        walletAddress = `${x[0]}`;
        console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
    } );
    e.preventDefault();
});


$("#freezeButton").click(async function(e) {
    if(ethereumEnabled) {
         unwrapAmount =  web3.utils.toWei($("#unwrapAmount").val(), 'ether');
        console.log(unwrapAmount);
        tx = await contract.methods.withdraw(unwrapAmount).send({from: walletAddress});
    } else {
        ethereum.enable().then ( (x) => {
            ethereumEnabled = true;
            $("#enableEthereumBox").hide();
            $("#unwrapButton").html("Unwrap");
            $("#wrapButton").html("Wrap");

            walletAddress = `${x[0]}`;
            console.log(`Found address ${x[0]} with web3.js version ${web3.version}`); 
        } );
    }
    e.preventDefault();
});

$("#unfreezeButton").click(async function(e) {
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



$("#myEtherBalance").click(async function(e) {
    $("#wrapAmount").val(walletEther / 1e18);
    updateWrapPrice();
    e.preventDefault();
});


$("#myTokenBalance").click(async function(e) {
   $("#unwrapAmount").val(walletTokens / 1e18);
    updateUnwrapPrice();
    e.preventDefault();
});


async function getContractStats() {

    try {
    contractEtherBalance = await contract.methods.getContractBalance().call();
    //console.log("contractEtherBalance: "+ contractEtherBalance);
    contractTokenBalance = await contract.methods.getTokenBalance().call();
    // console.log("contractTokenBalance: "+ contractTokenBalance);
    contractTokenPrice = await contract.methods.getTokenPrice().call();
    // console.log("contractTokenPrice: "+ contractTokenPrice);
    contractBurnBalance = await contract.methods.burnedTokens().call();
    // console.log("contractTokenPrice: "+ contractTokenPrice);
    } catch(e) {
        continue;
    }
    if(ethereumEnabled) {
        walletTokens = await contract.methods.balanceOf(walletAddress).call();
        walletEther = await web3.eth.getBalance(walletAddress);

        $("#myTokenBalance").html((walletTokens / 1e18).toFixed(3));
        $("#myEtherBalance").html((walletEther / 1e18).toFixed(3));
    }

    $("#contractTokenBalance").html((contractTokenBalance / 1e18).toFixed(3));
    $("#contractEtherBalance").html((contractEtherBalance / 1e18).toFixed(3));
    $("#contractBurnBalance").html((contractBurnBalance / 1e18).toFixed(3));
    $("#contractPrice").html((contractTokenPrice / 1e18).toFixed(3));

    setTimeout(getContractStats, 5000);
}
