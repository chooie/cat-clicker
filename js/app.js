var initialCats = [
  {
    clickCount : 0,
    name : 'Tabby',
    imgSrc : 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: [
      'Tab',
      'TabTab',
      'Puss',
      'Mr Muffin',
      'Pawz'
    ]
  },
  {
    clickCount : 0,
    name : 'Tiger',
    imgSrc : 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
    nicknames: ['Tigger']
  },
  {
    clickCount : 0,
    name : 'Scaredy',
    imgSrc : 'img/22252709_010df3379e_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
    nicknames: ['Casper']
  },
  {
    clickCount : 0,
    name : 'Shadow',
    imgSrc : 'img/1413379559_412a540d29_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
    nickname: ['Shooby']
  },
  {
    clickCount : 0,
    name : 'Sleepy',
    imgSrc : 'img/9648464288_2516b35537_z.jpg',
    imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
    nickname: ['Zzzzzz']
  }
];

var Cat = function(data) {
  'use strict';
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observable(data.nicknames);

  this.level = ko.computed(function() {
    var levels = ['Infant', 'Teen', 'Adult'],
      multiplier = 10;

    if (this.clickCount() < multiplier) {
      return levels[0];
    } else if (this.clickCount() < 2 * multiplier) {
      return levels[1];
    } else {
      return levels[2];
    }
  }, this);
};

var ViewModel = function() {
  'use strict';
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.catNames = ko.computed(function() {
    var names = [];
    self.catList().forEach(function(catItem) {
      names.push(catItem.name);
    });
    return names;
  });

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};

ko.applyBindings(new ViewModel());
