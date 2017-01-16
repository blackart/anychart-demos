var toolbar;
anychart.onDocumentReady(function() {
  toolbar = anychart.toolbar();

  toolbar.addChild(new goog.ui.ToolbarButton('Button'), true);
  toolbar.getChildAt(0).setTooltip('This is a tooltip for a button');
  toolbar.addChild(new goog.ui.ToolbarButton('AnotherButton'), true);
  toolbar.addChild(new anychart.ui.toolbar.Separator(), true);
  toolbar.addChild(new goog.ui.ToolbarButton('Disabled'), true);
  toolbar.getChildAt(3).setEnabled(false);
  toolbar.addChild(new goog.ui.ToolbarButton('YetAnotherButton'), true);
  //var toggleButton = new goog.ui.ToolbarToggleButton(goog.dom.createDom('div',
  //    'icon goog-edit-bold'));
  //toggleButton.setChecked(true);
  //toolbar.addChild(toggleButton, true);
  var btnLeft = new goog.ui.ToolbarButton('Left');
  btnLeft.setCollapsed(goog.ui.ButtonSide.END);
  toolbar.addChild(btnLeft, true);
  var btnCenter = new goog.ui.ToolbarButton('Center');
  btnCenter.setCollapsed(goog.ui.ButtonSide.END | goog.ui.ButtonSide.START);
  toolbar.addChild(btnCenter, true);
  var btnRight = new goog.ui.ToolbarButton('Right');
  btnRight.setCollapsed(goog.ui.ButtonSide.START);
  toolbar.addChild(btnRight, true);

  toolbar.container('container');
  toolbar.draw();


  var a = anychart.ui.contextMenu();
  a.attach(toolbar.element_);
  a.itemsProvider(function(){
    return [{
      text: 'Export as...',
      iconClass: 'fa fa-floppy-o',
      subMenu: [{
        text: '.png',
        iconClass: 'fa fa-file-image-o',
        eventType: 'saveAsPng'
      },{
        text: '.jpg',
        iconClass: 'fa fa-file-image-o',
        eventType: 'saveAsJpg'
      },{
        text: '.pdf',
        iconClass: 'fa fa-file-pdf-o',
        eventType: 'saveAsPdf'
      },{
        text: '.svg',
        iconClass: 'fa fa-file-code-o',
        eventType: 'saveAsSvg'
      }]
    }]
  });
});