'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them
var allLocations = [];
//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal or netTotal
var netTotal = 0;
//constructor function begin with an Uppercase letter

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
    //why is this an array??
    //these are the questions we need to solve
    this.randCustByHour = [];
    this.avgCookiesSoldPerHour = [];
    this.totalCookies = 0;
    allLocations.push(this);
    //using the "this" keyword in front of the method to show that the method belongs to the object that this function creates. 
    //start solving our problems with methods!
    //this.calcRandCustByHour = function() {
        //method go here
        //use prototypes
        //}

}

//remember to clal the methods in the constructor that the now prototypes available to the new objects that the constructor will make using MakeLocation
//this.calcRandCustByHour();

//call the function in a function if you want
//this construtor function creates four new objects with their own unique values in properties of this object( name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour)

function makeStands() {
    new MakeLocation('First and Pike', 23, 65, 6.3);
    new MakeLocation('SeaTac Airport', 3, 24, 1.2);
    new MakeLocation('Seattle Center', 11, 38, 3.7);
    new MakeLocation('Capitol Hill', 20, 38, 2.3);
    new MakeLocation('Alki', 2, 16, 4.6);
};

makeStands();

//time to create the table in js , not HTML
//make header row
//table needs an id in html

function makeHeaderRow() {
    //cookiestands is our table id from the HTML
    var cookiestands = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    var trEl = document.createElement('th');
    trEl.appendChild(thEl);

}
//consider a for loop for the hours
//create a th element
//give the th element some text content like hours [i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remember to call makeHeaderRow();

//remember to put an "empty" <th></th> element at the top of the table to push the "6am" cell over to the right.

