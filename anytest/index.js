var chart;
var data1 = [
  {
    "name": "Test",
    "description": "Some description",
    "active": [
      {
        "name": "Sub task",
        "intervals": [
          {
            "start": '2016-10-01',
            "end": '2016-11-23',
            "minutesPerDay": 200
          }
        ]
      },
      {
        "name": "Sub task1",
        "intervals": [
          {
            "start": '2016-10-05',
            "end": '2016-10-15',
            "minutesPerDay": 300
          }
        ]
      }
    ]
  },
  {
    "name": "Test1",
    "description": "Some description",
    "active": [
      {
        "name": "Sub task",
        "intervals": [
          {
            "start": '2016-09-25',
            "end": '2016-10-10',
            "minutesPerDay": 120
          }
        ]
      }
    ]
  }
];
anychart.onDocumentLoad(function() {
  anytest.setUp(600, 500);

  chart = anychart.resource();
  chart.zoomLevel(2);
  dataSet = anychart.data.set(data1);
  var mapping = dataSet.mapAs(undefined, {"activities": "active"});
  chart.data(mapping);

  chart.timeTrackingMode(anychart.enums.TimeTrackingMode.AVAILABILITY_PER_CHART);

  chart.calendar().availabilities([
    {
      'each': anychart.enums.AvailabilityPeriod.DAY,
      'from': 10,
      'to': 18,
      'isWorking': true
    },
    {
      'each': anychart.enums.AvailabilityPeriod.DAY,
      'from': 14,
      'to': 15,
      'isWorking': false
    }
  ]);
  chart.timeLine()
      .stroke('3 red')
      .drawTopLine(true)
      .drawRightLine(true)
      .drawBottomLine(true)
      .drawLeftLine(true);
  anytest.drawInStage(chart);
  anytest.stageListen();
  stage.resume();
});