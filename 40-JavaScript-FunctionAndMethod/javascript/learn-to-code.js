function area(length, width) {
    return length * width;
}

var rectanglesAreas = [];

rectanglesAreas.push(area(10, 15));
rectanglesAreas.push(area(14, 2));
rectanglesAreas.push(area(4, 5));
console.log(rectanglesAreas);


var bankBalance = 500;

function makeTransaction(priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
        console.log(bankBalance);
    } else {
        console.log("Insufficient Funds");
    }
}

makeTransaction(79.00);
makeTransaction(2.32);
makeTransaction(10.45);
makeTransaction(450.00);


bankBalance = 500;
var transaction = function (priceOfSale) {
    if (priceOfSale <= bankBalance) {
        bankBalance -= priceOfSale;
        console.log("Purchase Successful");
        console.log(bankBalance);
    } else {
        console.log("Insufficient Funds");
    }
};

transaction(10);

var printCustomerName = function (first, last) {
    console.log("First Name: " + first + " Last Name: " + last);
};

var applyForCreditCard = function (creditScore, soul) {
    //call some functions to process application
};

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);