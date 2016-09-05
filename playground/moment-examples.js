var moment = require('moment');

console.log(moment().format());

// Jan 1 1970 @ 12:00am -> 0
// Jan 1 1970 @12:01am -> -60

var now = moment();

console.log('Current timestamp', now.unix());
// Current timestamp 1473030773

var timestamp = 1473030773;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'))

// Challenge: format like this: January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'))
