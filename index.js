var app = require('express')();
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var scheduler = require('./schedule');
var caseService = require('./case');
var moment = require('moment');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
 	res.send('Hello World!');
});

app.get('/cemetery/schedule/1', function (req, res) {
	var schedule = {
					  "CemeteryName": "XYZ National Cemetery",
					  "CemeteryInstructions": "Make sure everything is correct",
					  "SchedulingInfo": {
					    "SchedulingPeriodUnitMinutes": "15",
					    "Schedule": [
					      {
					        "PeriodTime": "09:00:00.000",
					        "RemaingSlots": "2"
					      },
					      {
					        "PeriodTime": "09:15:00.000",
					        "RemaingSlots": "1"
					      },
					      {
					        "PeriodTime": "09:30:00.000",
					        "RemaingSlots": "2"
					      },
					      {
					        "PeriodTime": "09:45:00.000",
					        "RemaingSlots": "0"
					      },
					      {
					        "PeriodTime": "10:00:00.000",
					        "RemaingSlots": "2"
					      }
					    ]
					  }
					};
 	res.send(schedule);
});

app.get('/cemetery/statuses', function (req, res){
	var cemeteries = {
        "Cemeteries": [
            {
                "CemeteryName": "Arlington National Cemetery",
                "CemeteryStatus": "Accepting All Interment Types"
            },
            {
                "CemeteryName": "Bakersfield National Cemetery",
                "CemeteryStatus": "Accepting All Interment Types"
            },
            {
                "CemeteryName": "Balls Bluff National Cemetery",
                "CemeteryStatus": "Accepting All Interment Types"
            },
            {
                "CemeteryName": "Baltimore National Cemetery",
                "CemeteryStatus": "Accepting All Interment Types"
            },
            {
                "CemeteryName": "Alexandria National Cemetery",
                "CemeteryStatus": "Accepting All Interment Types"
            }
        ]
    };
	res.send(cemeteries);
});

app.post('/cemetery/schedule', function(req, res) {
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;

    var myScheduler = new scheduler();
    var availability = myScheduler.getAvailability(startDate, endDate);

    res.send(availability);
});

app.put('/case/upsert', function(req, res) {
	//var memorialCase = req.body.case;
	//var myCaseService = new caseService();

	//var memorialCaseResponse = myCaseService.upsertCase(memorialCase);

	//res.send(memorialCaseResponse);

  console.log(req.body);
  res.send(req.body);
});

var server = app.listen(PORT, function () {
	var host = server.address().address;
	host = (host === '::' ? 'localhost' : host);
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});