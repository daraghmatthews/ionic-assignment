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
    pic: 'img/bagel.jpg'
  }, {
    id: 2,
    name: 'Banana',
    text: 'medium, 105 cal',
    pic: 'img/banana.jpg'
  }, {
    id: 3,
    name: 'Beer',
    text: 'pint (500ml), 153 cal',
    pic: 'img/beer.jpg'
  }, {
    id: 4,
    name: 'Bread',
    text: 'one slice, white, 66 cal',
    pic: 'img/bread.jpg'
  }, {
	id: 5,
    name: 'Butter',
    text: '1 tablespoon, 102 cal',
    pic: 'img/butter.jpg'
  }, {
    id: 6,
    name: 'Carrots',
    text: 'raw, 1 cup, 52 cal',
    pic: 'img/carrots.jpg'
  }, {
    id: 7,
    name: 'Cheddar cheese',
    text: '1 slice, 113 cal',
    pic: 'img/cheese.jpg'
  }, {
    id: 8,
    name: 'Chicken breast',
    text: 'boneless, skinless, roasted, 3 ounces, 142 cal',
    pic: 'img/chicken.jpg'
  }, {
    id: 9,
    name: 'Chilli with beans',
    text: 'canned, 1 cup, 287 cal',
    pic: 'img/chilli.jpg'
	}, {
    id: 10,
    name: 'Chocolate chip cookie',
    text: 'from packaged dough, 59 cal',
    pic: 'img/cookie.jpg'
  }, {
    id: 11,
    name: 'Coffee',
    text: 'regular, brewed from grounds, black, 2 cal',
    pic: 'img/coffee.jpg'
  }, {
    id: 12,
    name: 'Cola',
    text: '500ml, 136 cal',
    pic: 'img/cola.jpg'
  }, {
    id: 13,
    name: 'Sweetcorn',
    text: 'canned, whole kernel, drained, 1 cup, 180 cal',
    pic: 'img/corn.jpg'
  }, {
	id: 14,
    name: 'Egg',
    text: 'large, 102 cal',
    pic: 'img/egg.jpg'
  }, {
    id: 15,
    name: 'Graham cracker',
    text: 'plain, 59 cal',
    pic: 'img/graham.jpg'
  }, {
    id: 16,
    name: 'Granola bar',
    text: '1.5-ounce bar, 193 cal',
    pic: 'img/granola.jpg'
  }, {
    id: 17,
    name: 'Green beans',
    text: 'canned, drained, 1 cup, 40 cal',
    pic: 'img/green-beans.jpg'
  }, {
    id: 18,
    name: 'Ground beef burger',
    text: '4 ounces, fried, 193 cal',
    pic: 'img/burger.jpg'
	  }, {
    id: 19,
    name: 'Hot dog',
    text: 'pork, 137 cal',
    pic: 'img/hotdog.jpg'
  }, {
    id: 20,
    name: 'Ice cream',
    text: 'vanilla, 110g, 145 cal',
    pic: 'img/ice.jpg'
  }, {
    id: 21,
    name: 'Jam doughnut',
    text: '289 cal',
    pic: 'img/doughnut.jpg'
  }, {
    id: 22,
    name: 'Ketchup',
    text: '1 tablespoon, 15 cal',
    pic: 'img/ketchup.jpg'
  }, {
	id: 23,
    name: 'Milk',
    text: '2% fat, 250ml, 122 cal',
    pic: 'img/milk.jpg'
  }, {
    id: 24,
    name: 'Peanuts',
    text: 'dry roasted, salted, 30g, 168 cal',
    pic: 'img/peanuts.jpg'
  }, {
    id: 25,
    name: 'Mustard',
    text: 'yellow, 2 teaspoons, 6 cal',
    pic: 'img/mustard.jpg'
  }, {
    id: 26,
    name: 'Porridge',
    text: 'medium bowl, 147 cal',
    pic: 'img/porridge.jpg'
  }, {
    id: 27,
    name: 'Orange juice',
    text: 'made from concentrate, 250ml, 112 cal',
    pic: 'img/orange-juice.jpg'
	}, {
    id: 28,
    name: 'Peanut butter',
    text: '2 tablespoons, 180 cal',
    pic: 'img/peabutter.jpg'
  }, {
    id: 29,
    name: 'Pizza',
    text: 'pepperoni, one slice, 298 cal',
    pic: 'img/pizza.jpg'
  }, {
    id: 30,
    name: 'Pork chop',
    text: 'grilled, 85g, 221 cal',
    pic: 'img/porkchop.jpg'
  }, {
    id: 31,
    name: 'Potato',
    text: 'medium, baked, 161 cal',
    pic: 'img/potato.jpg'
  }, {
	id: 32,
    name: 'Potato chips',
    text: '30g, 155 cal',
    pic: 'img/chips.jpg'
  }, {
    id: 33,
    name: 'Raisins',
    text: '40g, 130 cal',
    pic: 'img/raisins.jpg'
  }, {
    id: 34,
    name: 'Red wine',
    text: '1 glass, 123 cal',
    pic: 'img/red.jpg'
  }, {
    id: 35,
    name: 'Rice',
    text: 'white, 1 cup, 205 cal',
    pic: 'img/rice.jpg'
  }, {
    id: 36,
    name: 'salad dressing',
    text: '2 tablespoons, 146 cal',
    pic: 'img/dressing.jpg'
	  }, {
    id: 37,
    name: 'Salsa',
    text: '110g, 35 cal',
    pic: 'img/salsa.jpg'
  }, {
    id: 38,
    name: 'Shrimp',
    text: '85g, 84 cal',
    pic: 'img/shrimp.jpg'
  }, {
	id: 39,
    name: 'Spaghetti',
    text: '1 cup, 221 cal',
    pic: 'img/spaghetti.jpg'
  }, {
    id: 40,
    name: 'Spaghetti sauce',
    text: 'marinara, 110g, 92 cal',
    pic: 'img/spaghetti-sauce.jpg'
  }, {
    id: 41,
    name: 'Tuna',
    text: 'canned in water, 85g, 100 cal',
    pic: 'img/tuna.jpg'
  }, {
    id: 42,
    name: 'White wine',
    text: '1 glass, 121 cal',
    pic: 'img/white.jpg'
  }, {
    id: 43,
    name: 'Yellow cake with chocolate frosting',
    text: 'one piece, 243 cal',
    pic: 'img/cake.jpg'
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