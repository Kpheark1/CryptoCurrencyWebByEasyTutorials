var btc = document.getElementById("bitcoin"); //sets an element with this specific id in the index.html file equal to this new var
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    //console.log(response); //shows the response of this call in the console log if you inspect element on the page
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});