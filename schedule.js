
var moment = require('moment-timezone');

var scheduler  = function () {
    var self = this;
    var timeZone = 'America/New_York';

    this.getAvailability = function(startDate, endDate){
        //var currentTime = moment(startDate * 1000).utcOffset(offset).startOf('day').add(9, 'hours');
        //var endTime = moment(endDate * 1000).utcOffset(offset).startOf('day').add(17, 'hours');

        var currentTime = moment(startDate * 1000).tz(timeZone).startOf('day').add(9, 'hours');
        //gross DST transition hack
        if(currentTime.get('hour') == 10){
            currentTime.add(-1, 'hours');
        }

        var endTime = moment(endDate * 1000).tz(timeZone).startOf('day').add(17, 'hours');
        var isDST = currentTime.isDST();
        var timeSlots = [];
        while(currentTime < endTime){
            if(currentTime.isDST() != isDST) {
                if(!currentTime.isDST()) currentTime.add(-1, 'hours');
                //else currentTime.add(1, 'hours');
            }
            isDST = currentTime.isDST();
            var timeslot = {
                //"time": currentTime.tz(timeZone).unix(),
                "time": currentTime.tz(timeZone).toString(),
                "status": Math.floor(Math.random() * 10) % 2 == 0 ? "AVAILABLE" : "UNAVAILABLE"
            }
            timeSlots.push(timeslot);

            currentTime.add(1, 'hours');
            if(currentTime.get('hour') >= 17){
                currentTime.tz(timeZone).add(1, 'days').startOf('day').add(9, 'hours');
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