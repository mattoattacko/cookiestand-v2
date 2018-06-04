'use strict';   
//first we add an array that holds the hours the stores will use
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//second we need an array to hold all of our locations
var allLocations = [];
//this var has all the cookies from all the stores
var netTotal = 0;
//ask about allLocations[0].calcRandCustByHour();?

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;

  //these are the questions we need to solve for
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalCookiesSoldPerStore = 0;
  allLocations.push(this);

  console.log(this);
}
//Use prototype to calcRandCustByHour. Check code demo i think
//need to figure out randCustPerHour to figure out cookiesSoldPerHour
    MakeLocation.prototype.calcRanCustByHour = function () {
        for (var i = 0; i < hours.length; i++) {
        this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }

  console.log(this.randCustPerHour);
};
//Use prototype to calcCookiesSoldPerHour
//avgCustPerHour x avgCookiesSoldPerHour should give cookiesSoldPerHour back into our constructor
//we need to figure this out first since we need cookiesSoldPerHour to figure out totalCookiesSoldPerStore
    MakeLocation.prototype.calcCookiesSoldPerHour = function () {
        for (var j = 0; j < hours.length; j++) {
        this.cookiesSoldPerHour.push(Math.round(this.randCustPerHour[j] * this.avgCookiesSoldPerHour));
  }

  console.log(this.cookiesSoldPerHour);
};
//Use prototype to calctotalCookiesSoldPerStore
//use += event handler/method?
    MakeLocation.prototype.calctotalCookiesSoldPerStore = function () {
        for (var k = 0; k < hours.length; k++) {
        this.totalCookiesSoldPerStore += this.cookiesSoldPerHour[k];
  }

  console.log(this.totalCookiesSoldPerStore);
};
//use a function? Fix later. Ask smarter people
function calcTotal() {
  for (var l = 0; l < allLocations.length; l++) {
    netTotal += allLocations[l].totalCookiesSoldPerStore;
  }
}

function makeSalmonCookieStore() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
//call the function? 
//push this stuff into our array withe all the locations and such
function allLocationsDataArray() {
  for (var m = 0; m < allLocations.length; m++) {
    allLocations[m].calcRanCustByHour();
    allLocations[m].calcCookiesSoldPerHour();
    allLocations[m].calctotalCookiesSoldPerStore();
  }
}
    console.log(allLocationsDataArray);

    //use the header row maker shown in class or from TA
var makeHeaderRowEl = document.getElementById('tableHead');
    function makeHeaderRow(inputArray) {
        var trEl = document.createElement('tr');
        var blankEl = document.createElement('th');
        trEl.appendChild(blankEl);
        for (var n = 0; n < inputArray.length; n++) {
        var thEl = document.createElement('th');
        thEl.textContent = inputArray[n];
        trEl.appendChild(thEl);
  }
    var totalEl = document.createElement('th');
        totalEl.textContent = 'Total';
        trEl.appendChild(totalEl);
        makeHeaderRowEl.appendChild(trEl);
}
    console.log(makeHeaderRowEl);


function makeBodyRows(name, inputArray, totalCookiesSoldPerStore) {
        var bodyRowEl = document.getElementById('tableBody');
        var trEl = document.createElement('tr');
        var storeNameEl = document.createElement('td');
            storeNameEl.textContent = name;
            trEl.appendChild(storeNameEl);
    //skip o since it looks like a zero? Ask
    for (var o = 0; o < inputArray.length; o++) {
         var tdEl = document.createElement('td');
            tdEl.textContent = inputArray[o];
            trEl.appendChild(tdEl);
  }
    console.log(makeBodyRows);

  var locationsTotalCookies = document.createElement('td');
    locationsTotalCookies.textContent = totalCookiesSoldPerStore;
     trEl.appendChild(locationsTotalCookies);
     bodyRowEl.appendChild(trEl);
}
//p is for push! One push ah ha ha. Two push ah ha ha. Three push ah ha ha. Three pushes! - The Count
function pushTheData() {
  for (var p = 0; p < allLocations.length; p++) {
    makeBodyRows(allLocations[p].name, allLocations[p].cookiesSoldPerHour, allLocations[p].totalCookiesSoldPerStore);
  }
}
    console.log(pushTheData);

//yo dog. i heard you like for loops, so I put a for loop in a for loop so you can for loop while you for loop. It's for loops all the way down
function makeFooterRow(inputArray) {
  var tableFoot = document.getElementById('tableFoot');
  tableFoot.innerHTML = ''; //adds the blank box I think? console log this stuff
  var trEl = document.createElement('tr');
  var textTotalEl = document.createElement('td');
  textTotalEl.textContent = 'Total';
  trEl.appendChild(textTotalEl);
  for (var q = 0; q < hours.length; q++) { 
    var hrTotal = 0;
  for (var r = 0; r < inputArray.length; r++) {
      hrTotal += inputArray[r].cookiesSoldPerHour[q];
  }
    var tdEl = document.createElement('td');
    tdEl.textContent = hrTotal;
    trEl.appendChild(tdEl);
  }
    var netTotalEl = document.createElement('td');
    netTotalEl.textContent = netTotal;
    trEl.appendChild(netTotalEl);
    tableFoot.appendChild(trEl);
}
    // console.log(arrayNetTotal); why doesn't this log work??

//Rachel's code. Use if necessary.
// make totals row
// function makeTotalsRow() {
//     // var cookiestands = document.getElementById('cookiestands');
//     var trEl = document.createElement('tr');
//     var tdEl = document.createElement('td');
//     tdEl.textContent = 'Totals';
//     trEl.appendChild(tdEl);
  
//     for (var i = 0; i < hours.length; i++) {
//       var totalCookiesByHour = 0;
//       for (var j = 0; j < allLocations.length; j++) {
//         totalCookiesByHour += allLocations[j].cookiesSoldByHour[i];
  
//       }
//       tdEl = document.createElement('td');
//       tdEl.textContent = totalCookiesByHour;
//       trEl.appendChild(tdEl);
//       totalTotal += totalCookiesByHour;
//     }
//     tdEl = document.createElement('td');
//     tdEl.textContent = totalTotal;
//     trEl.appendChild(tdEl);
  
//     cookiestands.appendChild(trEl);
//   };
  
//   function render() {
//     totalTotal = 0;
//     cookiestands.innerHTML = '';
//     makeHeaderRowEl();
//     for (var j = 0; j < allLocations.length; j++) {
//       makeOneDataRow(j);
//     }
//     makeTotalsRow();
//   }

//Making our event. Comfirm w/ smarter people if we are even close...
//work work till html added in. Don't stress.
var storeForm = document.getElementById('store-form');

//check demo for fix!
//create an event handler for the submission of a new store
function storeEvent(event) {
//it's looking for the event in the function
  event.preventDefault();

  console.log(event.target.storename.value);

    if(!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcook.value) {
    return console.log('Fields cannot be empty.');
    }
//creating a new location to populate into makeLocation (our first constructor funtion) that will push into allLocations (our first empty array at the top)
    var patAddedNewViaForm = new MakeLocation(event.target.storename.value, event.target.mincust.value, event.target.maxcust.value, event.target.avgcook.value); 
     patAddedNewViaForm.calcRanCustByHour();
     patAddedNewViaForm.calcCookiesSoldPerHour();
     patAddedNewViaForm.calctotalCookiesSoldPerStore();
     makeBodyRows(patAddedNewViaForm.name, patAddedNewViaForm.cookiesSoldPerHour, patAddedNewViaForm.totalCookiesSoldPerStore);
     makeFooterRow(allLocations);
}
//event listener for new store submission form look at pg 254 in your books
storeForm.addEventListener('submit', storeEvent); 
//clear the form by setting the value = null
//our math is wrong somewhere... no clue where... but it is. I think. who knows.

//Hello, is this functions?
//NO THIS IS PATRICK!
makeSalmonCookieStore();
allLocationsDataArray();
calcTotal();
makeHeaderRow(hours);
pushTheData();
makeFooterRow(allLocations); 
//ask why no storeEvent()?