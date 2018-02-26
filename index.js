var app = require('express')();
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
 	res.send('Hello World!');
});

app.get('/cemetary/schedule/1', function (req, res) {
	var schedule = {
					  "CemetaryName": "XYZ National Cemetary",
					  "CemetaryInstructions": "Make sure everything is correct",
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
 
var server = app.listen(PORT, function () {
	var host = server.address().address;
	host = (host === '::' ? 'localhost' : host);
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});