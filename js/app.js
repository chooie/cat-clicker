var ViewModel = function() {
  'use strict';

  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('some dude');
  this.nickNames = ko.observable([
    'Tab',
    'TabTab',
    'Puss',
    'Mr Muffin',
    'Pawz'
  ]);

  this.level = ko.computed(function() {
    var levels = ['infant', 'teen', 'adult'],
      multiplier = 10;

    if (this.clickCount() < multiplier) {
      return levels[0];
    } else if (this.clickCount() < 2 * multiplier) {
      return levels[1];
    } else {
      return levels[2];
    }
  }, this);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
