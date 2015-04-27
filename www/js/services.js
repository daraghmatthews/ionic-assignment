angular.module('calorific.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Apple',
    text: 'medium, 72 cal',
    pic: 'img/apple.jpg'
  }, {
    id: 1,
    name: 'Bagel',
    text: '289 cal',
    pic: ''
  }, {
    id: 2,
    name: 'Banana',
    text: 'medium, 105 cal',
    pic: ''
  }, {
    id: 3,
    name: 'Beer',
    text: 'pint (500ml), 153 cal',
    pic: ''
  }, {
    id: 4,
    name: 'Bread',
    text: 'one slice, white, 66 cal',
    pic: ''
  }, {
	id: 5,
    name: 'Butter',
    text: '1 tablespoon, 102 cal',
    pic: ''
  }, {
    id: 6,
    name: 'Carrots',
    text: 'raw, 1 cup, 52 cal',
    pic: ''
  }, {
    id: 7,
    name: 'Cheddar cheese',
    text: '1 slice, 113 cal',
    pic: ''
  }, {
    id: 8,
    name: 'Chicken breast',
    text: 'boneless, skinless, roasted, 3 ounces, 142 cal',
    pic: ''
  }, {
    id: 9,
    name: 'Chilli with beans',
    text: 'canned, 1 cup, 287 cal',
    pic: ''
	}, {
    id: 10,
    name: 'Chocolate chip cookie',
    text: 'from packaged dough, 59 cal',
    pic: ''
  }, {
    id: 11,
    name: 'Coffee',
    text: 'regular, brewed from grounds, black, 2 cal',
    pic: ''
  }, {
    id: 12,
    name: 'Cola',
    text: '500ml, 136 cal',
    pic: ''
  }, {
    id: 13,
    name: 'Sweetcorn',
    text: 'canned, whole kernel, drained, 1 cup, 180 cal',
    pic: ''
  }, {
	id: 14,
    name: 'Egg',
    text: 'large, 102 cal',
    pic: ''
  }, {
    id: 15,
    name: 'Graham cracker',
    text: 'plain, 59 cal',
    pic: ''
  }, {
    id: 16,
    name: 'Granola bar',
    text: '1.5-ounce bar, 193 cal',
    pic: ''
  }, {
    id: 17,
    name: 'Green beans',
    text: 'canned, drained, 1 cup, 40 cal',
    pic: ''
  }, {
    id: 18,
    name: 'Ground beef burger',
    text: '4 ounces, fried, 193 cal',
    pic: ''
	  }, {
    id: 19,
    name: 'Hot dog',
    text: 'pork, 137 cal',
    pic: ''
  }, {
    id: 20,
    name: 'Ice cream',
    text: 'vanilla, 110g, 145 cal',
    pic: ''
  }, {
    id: 21,
    name: 'Jam doughnut',
    text: '289 cal',
    pic: ''
  }, {
    id: 22,
    name: 'Ketchup',
    text: '1 tablespoon, 15 cal',
    pic: ''
  }, {
	id: 23,
    name: 'Milk',
    text: '2% fat, 250ml, 122 cal',
    pic: ''
  }, {
    id: 24,
    name: 'Peanuts',
    text: 'dry roasted, salted, 30g, 168 cal',
    pic: ''
  }, {
    id: 25,
    name: 'Mustard',
    text: 'yellow, 2 teaspoons, 6 cal',
    pic: ''
  }, {
    id: 26,
    name: 'Porridge',
    text: 'medium bowl, 147 cal',
    pic: ''
  }, {
    id: 27,
    name: 'Orange juice',
    text: 'made from concentrate, 250ml, 112 cal',
    pic: ''
	}, {
    id: 28,
    name: 'Peanut butter',
    text: '2 tablespoons, 180 cal',
    pic: ''
  }, {
    id: 29,
    name: 'Pizza',
    text: 'pepperoni, one slice, 298 cal',
    pic: ''
  }, {
    id: 30,
    name: 'Pork chop',
    text: 'grilled, 85g, 221 cal',
    pic: ''
  }, {
    id: 31,
    name: 'Potato',
    text: 'medium, baked, 161 cal',
    pic: ''
  }, {
	id: 32,
    name: 'Potato chips',
    text: '30g, 155 cal',
    pic: ''
  }, {
    id: 33,
    name: 'Raisins',
    text: '40g, 130 cal',
    pic: ''
  }, {
    id: 34,
    name: 'Red wine',
    text: '1 glass, 123 cal',
    pic: ''
  }, {
    id: 35,
    name: 'Rice',
    text: 'white, 1 cup, 205 cal',
    pic: ''
  }, {
    id: 36,
    name: 'salad dressing',
    text: '2 tablespoons, 146 cal',
    pic: ''
	  }, {
    id: 37,
    name: 'Salsa',
    text: '110g, 35 cal',
    pic: ''
  }, {
    id: 38,
    name: 'Shrimp',
    text: '85g, 84 cal',
    pic: ''
  }, {
	id: 39,
    name: 'Spaghetti',
    text: '1 cup, 221 cal',
    pic: ''
  }, {
    id: 40,
    name: 'Spaghetti sauce',
    text: 'marinara, 110g, 92 cal',
    pic: ''
  }, {
    id: 41,
    name: 'Tuna',
    text: 'canned in water, 85g, 100 cal',
    pic: ''
  }, {
    id: 42,
    name: 'White wine',
    text: '1 glass, 121 cal',
    pic: ''
  }, {
    id: 43,
    name: 'Yellow cake with chocolate frosting',
    text: 'one piece, 243 cal',
    pic: ''
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});