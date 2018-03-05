
var moment = require('moment-timezone');

var scheduler  = function () {
    var self = this;
    var offset = '-0500';
    var timeZone = 'America/New_York';

    this.getAvailability = function(startDate, endDate){
        //var currentTime = moment(startDate * 1000).utcOffset(offset).startOf('day').add(9, 'hours');
        //var endTime = moment(endDate * 1000).utcOffset(offset).startOf('day').add(17, 'hours');

        var currentTime = moment(startDate * 1000).tz(timeZone).startOf('day').add(9, 'hours');
        var endTime = moment(endDate * 1000).tz(timeZone).startOf('day').add(17, 'hours');

        var timeSlots = [];
        while(currentTime < endTime){
            var timeslot = {
                "time": currentTime.unix(),
                "status": Math.floor(Math.random() * 10) % 2 == 0 ? "AVAILABLE" : "UNAVAILABLE"
            }
            timeSlots.push(timeslot);

            currentTime.add(1, 'hours');

            if(currentTime.get('hour') >= 17){
                currentTime.add(1, 'days').tz(timeZone).startOf('day').add(9, 'hours');
            }
        }

        var availability = {
            "cemeteryId" : "SomeGuidHere",
            "timeSlots" : timeSlots
        };
        return availability;
    };
};

module.exports = scheduler;