var chart0, chart1, chart2;
anychart.onDocumentLoad(function() {
  anytest.setUp(400, 600);
  var data0 = [
    {id: '1', duration: 30, name: '1', fullName: 'Aerodynamics'},
    {id: '2', duration: 50, name: '2', fullName: 'Build & Test Model'},
    {id: '3', duration: 35, name: '3', fullName: 'Structure'},
    {id: '4', duration: 50, name: '4', dependsOn: ['1'], fullName: 'Propulsion'},
    {id: '5', duration: 60, name: '5', dependsOn: ['2'], fullName: 'Build Prototype'},
    {id: '6', duration: 40, name: '6', dependsOn: ['3'], fullName: 'Control & Stability'},
    {id: '7', duration: 20, name: '7', dependsOn: ['4'], fullName: 'Wind Tunnel'},
    {id: '8', duration: 20, name: '8', dependsOn: ['6'], fullName: 'Computation'},
    {id: '9', duration: 45, name: '9', dependsOn: ['7'], fullName: 'Review'},
    {id: '10', duration: 30, name: '10', dependsOn: ['8'], fullName: 'Flight Simulation'},
    {id: '11', duration: 50, name: '11', dependsOn: ['9'], fullName: 'Research flights'},
    {id: '12', duration: 45, name: '12', dependsOn: ['10'], fullName: 'Revise & Review'},
    {id: '13', duration: 25, name: '13', dependsOn: ['5'], fullName: 'Finalize'}
  ];
  var data1 = [
    {id: "A1", duration: 1, name: "Task A"},
    {id: "A2", duration: 3, name: "Task B"},
    {id: "A3", duration: 3, name: "Task C"},
    {id: "A4", duration: 1, name: "Task D"},
    {id: "A5", duration: 2, name: "Task AB", dependsOn: ["A1", "A2"]},
    {id: "A6", duration: 2, name: "Task BCD", dependsOn: ["A2", "A3", "A4"]}
  ];

  var data2 = [
    {id: "A1", duration: 1, name: "Task A"},
    {id: "A2", duration: 3, name: "Task B"},
    {id: "A3", duration: 3, name: "Task C"},
    {id: "A4", duration: 1, name: "Task D"},
    {id: "A5", duration: 2, name: "Task AD"},
    {id: "A6", duration: 2, name: "Task BC"}
  ];

  var dependencies2 = [
    {from: "A1", to: "A5"},
    {from: "A4", to: "A5"},
    {from: "A2", to: "A6"},
    {from: "A3", to: "A6"}
  ];
  var treeData0 = anychart.data.tree(data0, anychart.enums.TreeFillingMethod.AS_TABLE);

  chart0 = anychart.pert();
  chart0.data(treeData0);
  chart0.milestones().size(null);
  chart0.milestones().tooltip(false);
  chart0.bounds(0, 0, '100%', '33%');
  anytest.drawInStage(chart0);

  chart1 = anychart.pert();
  chart1.data(data1, "asTable");
  chart1.horizontalSpacing('100');
  chart1.milestones({size: 20});
  chart1.bounds(0, '33%', '100%', '33%');
  anytest.drawInStage(chart1);

  chart2 = anychart.pert();
  chart2.data(data2, "asTable", dependencies2);
  chart2.horizontalSpacing(100);
  chart2.milestones().size('14');
  chart2.bounds(0, '66%', '100%', '33%');
  anytest.drawInStage(chart2);

  anytest.stageListen(function(){
    anytest.step(function(){
      anytest.CAT.getScreen();
    });
    anytest.step(function(){
      chart0.milestones().size(20);
      anytest.CAT.getScreen('sizeChangedChart0', -1);
    });
    anytest.step(function(){
      chart1.milestones().size(-10);
      anytest.CAT.getScreen('sizeChangedChart1', -1, 'sizeChangedChart0');
    });
    anytest.step(function(){
      chart2.milestones({size: 5});
      anytest.CAT.getScreen('sizeChangedChart2', -1, 'sizeChangedChart1');
    });
    anytest.step(function(){
      chart0.milestones().size(null);
      chart1.milestones({size: 20});
      chart2.milestones().size('14');
      anytest.CAT.getScreen('backToInitialState', 1);
    });
    anytest.exit();
  }).charts4modes("chart0", "chart1", 'chart2');
//        anytest.createPanel('interactive');
  stage.resume();
  /*« methods
   anychart.core.pert.Milestones.size
   »*/
});