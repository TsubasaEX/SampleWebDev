//Alex Brown's
this.car = "Honda Civic w/ Ugly Spolier";

var marksGarage = {
    car: "Aston Martin",
    getCar: function () {
        return this.car;
    }
};

console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;

//Now work is over and Mark wants his car
console.log(storeGetCarForLater()); //WTF

// var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage);
// console.log(theRealGetCarFunction());

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());