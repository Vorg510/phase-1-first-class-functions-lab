// Code your solution in this file!

// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] ;

const createFareMultiplier = (input) => {
    return function fareMultiplier(){
        return input*input
    }
}

const fareDoubler = (input) => {
        return input*2
}

const fareTripler = (input) => {
    return input*3
}

const selectDifferentDrivers = (drivers, selectingDrivers) => {
    return selectingDrivers(drivers);
}
