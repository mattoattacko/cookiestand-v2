'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = [];
var totalCookiesByHour = 0;
var totalCookiesByStore = 0;
var netTotal = 0;

// allLocations[0].calcRandCustByHour();

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;

    //these are the questions we need to solve
    this.randCustByHour = [];
    this.randCookiesSoldByHour = [];
    this.totalCookies = 0;
    allLocations.push(this);
    console.log(this);

    //screw the functions for now. lets do something that works. 

        for(var i = 0; i < hours.length; i++) {
            this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour + 1)) + this.minCustPerHour);
            console.log(this.randCustByHour[i]);
    }

         for(var j = 0; j < hours.length; j++) {
            this.randCookiesSoldByHour.push(Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j]));
            this.totalCookies += this.randCookiesSoldByHour
            console.log(this.randCookiesSoldByHour[j]);
            console.log(this.randCustByHour[j]);
            
    }
    
    console.log(this.totalCookies);
};
        
//remember to call the methods in the constructor that the now prototypes available to the new objects that the constructor will make using MakeLocation
//this.calcRandCustByHour();

function makeSalmonCookieStores() {
    new MakeLocation('First and Pike', 23, 65, 6.3);
    new MakeLocation('SeaTac Airport', 3, 24, 1.2);
    new MakeLocation('Seattle Center', 11, 38, 3.7);
    new MakeLocation('Capitol Hill', 20, 38, 2.3);
    new MakeLocation('Alki', 2, 16, 4.6);
};

makeSalmonCookieStores();

function makeHeaderRow() {
    var cookiestands = document.getElementById('cookiedata');
    var trEl = document.createElement('tr');
    var trEl = document.createElement('th');
    thEl.textContent = '';
    //I think that added in the blank box at the front of the table
    trEl.appendChild(thEl);

};

for(var k = 0; k < hours.length; k++) {
    thEl = document.createElement('th');
    thEl.textContent = "Pat's Daily Store Data";
    trEl.appendChild(thEl);
    table.appendChild(trEl);

console.log(checkheader);


//table data rows

function makeBodyRows() {
    for(var l = 0; l < allLocations.length; l++) {
        var cookiedata = document.getElementById('cookiedata');
        var trEl = document.createElement('tr');
        var thEl = document.createElement('th');
        thEl.textContent = allLocations[l].name;
        trEl.appendChild(thEl);
    for(var m = 0; m < hours.length; m++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = allLocations[l].randCookiesSoldByHour[m];
        trEl.appendChild(tdEl);
    };
    thEl = document.createElement('th');
    thEl.textContent = allLocations[l].totalCookies;
    trEl.appendChild(thEl);
    cookiedata.appendChild(trEl);
    };
};

makeBodyRows();

//footer rows

function makeFooterRow() {
    var cookiedata = document.getElementById('cookiedata');
    var trEl = document.createElement('tr');
    var thEl = document.createAttribute('th');
    var netTotals = 0;
    thEl.textContent = "Pat's Hourly Store Totals";
    trEl.appendChild(thEl);

    for(var p = 0; p < hours.length; p++) {
        var patHourlyTotals = 0;
    for(var q = 0; q < allLocations.length; q++) {
        patHourlyTotals = patHourlyTotals + allLocations[q].randCookiesSoldByHour[p];
    };
    thEl = document.createElement('th');
    thEl.textContent = patHourlyTotals;
    trEl.appendChild(thEl);
    };

    for(var r = 0; r < allLocations.length; r++) {
        netTotals = netTotals + allLocations[r].netTotals;
    };
    thEl = document.createElement('th');
    thEl.textContent = netTotals;
    trEl.appendChild(thEl);
    table.appendChild(trEl);
};

    makeFooterRow();

    console.log(checkFooter);


//Making our event. Confirm w/ smarter people if even close

function storeEvent(event) {
    event.preventDefault();
//checkdemo for fix
    var storename = document.getElementById('storename').value;
    var mincust = Number(document.getElementById('mincust').value);
    var maxcust = Number(document.getElementById('maxcust').value);
    var avgcook = Number(document.getElementById('avgcook').value);
    
    new MakeLocation(storename, mincust, maxcust, avgcook);

    var t = allLocations.length - 1;
    var cookiedata = document.getElementById('cookiedata');
    document.getElementById('cookiedata').deleteRow(allLocations.length);
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = allLocations[t].name;
    trEl.appendChild(thEl);
}













var firstAndPikeTable = ["First and Pike", 2, 4, 6, 8, 10];
var seatacAirportTable = ["Seatac Airport", 3, 5, 7, 9, 1];
var seattleCenterTable = ["Seattle Center", ];
var capitolHillTable = ["Capitol Hill", ];
var alkiTable = ["Alki", ];
//access the table element in the html
var tableEl = document.getElementById("cookiedata");

function headerRowMaker(inputArray) {
    //make a table row
    var trEl = document.createElement('tr');
    trEl.appendChild(document.createElement('td'));
    //iterate through array
    for (var i = 0; i < inputArray.length; i++) {
        var tdEl = document.createElement("td"); //create
        tdEl.textContent = inputArray[i]; //content
        trEl.appendChild(tdEl); //add cell to the row
    }
    tableEl.appendChild(trEl); //add row to the table
}

MakeLocations.prototype.dataRowMaker = function(inputArray) {
    //make a table row
    var trEl = document.createElement("tr");
    //iterate through array
    for (var i = 0; i < inputArray.length; i++) {
        var tdEl = document.createElement("td"); //create
        tdEl.textContent = inputArray[i]; //content
        trEl.appendChild(tdEl); //add cell to the row
    }
    tableEl.appendChild(trEl); //add row to the table
}

//allLocations[0].dataRowMaker();

headerRowMaker(hours);
dataRowMaker(firstAndPikeTable);
dataRowMaker(seatacAirportTable);
dataRowMaker(seattleCenterTable);
dataRowMaker(capitolHillTable);
dataRowMaker(alkiTable);
//consider a for loop for the hours
//create a th element
//give the th element some text content like hours [i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remember to call makeHeaderRow();

//remember to put an "empty" <th></th> element at the top of the table to push the "6am" cell over to the right.