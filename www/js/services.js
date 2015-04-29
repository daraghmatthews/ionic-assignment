angular.module('calorific.services', [])

.factory('foods', function() {
  
  var foods = [{
    id: 0,
    name: 'Apple',
    text: 'medium, 72 cal',
    pic: 'img/apple.jpg',
	info: 'https://en.wikipedia.org/wiki/Apple',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/apple'
  }, {
    id: 1,
    name: 'Bagel',
    text: '289 cal',
    pic: 'img/bagel.jpg',
	info: 'http://en.wikipedia.org/wiki/Bagel',
	recipes: 'http://www.bbcgoodfood.com/recipes/edds-bagels'
  }, {
    id: 2,
    name: 'Banana',
    text: 'medium, 105 cal',
    pic: 'img/banana.jpg',
	info: 'http://en.wikipedia.org/wiki/Banana',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/banana'
  }, {
    id: 3,
    name: 'Beer',
    text: 'pint (500ml), 153 cal',
    pic: 'img/beer.jpg',
	info: 'http://en.wikipedia.org/wiki/Beer',
	recipes: 'http://beerrecipes.org/'
  }, {
    id: 4,
    name: 'Bread',
    text: 'one slice, white, 66 cal',
    pic: 'img/bread.jpg',
	info: 'http://en.wikipedia.org/wiki/Bread',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/bread'
  }, {
	id: 5,
    name: 'Butter',
    text: '1 tablespoon, 102 cal',
    pic: 'img/butter.jpg',
	info: 'http://en.wikipedia.org/wiki/Butter',
	recipes: 'http://www.bbcgoodfood.com/howto/guide/how-make-flavoured-butters'
  }, {
    id: 6,
    name: 'Carrots',
    text: 'raw, 1 cup, 52 cal',
    pic: 'img/carrots.jpg',
	info: 'http://en.wikipedia.org/wiki/Carrot',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/carrot'
  }, {
    id: 7,
    name: 'Cheddar cheese',
    text: '1 slice, 113 cal',
    pic: 'img/cheese.jpg',
	info: 'http://en.wikipedia.org/wiki/Cheddar_cheese',
	recipes: 'http://www.bbc.co.uk/food/cheddar_cheese'
  }, {
    id: 8,
    name: 'Chicken breast',
    text: 'roasted, 85g, 142 cal',
    pic: 'img/chicken.jpg',
	info: 'http://en.wikipedia.org/wiki/Chicken_(food)',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/chicken-breast'
  }, {
    id: 9,
    name: 'Chilli with beans',
    text: 'canned, 1 cup, 287 cal',
    pic: 'img/chilli.jpg',
	info: 'http://en.wikipedia.org/wiki/Chili_sauce',
	recipes: 'http://www.foodnetwork.com/recipes/rachael-ray/veg-head-three-bean-chili-recipe.html'
	}, {
    id: 10,
    name: 'Chocolate chip cookie',
    text: '59 cal',
    pic: 'img/cookie.jpg',
	info: 'http://en.wikipedia.org/wiki/Cookie',
	recipes: 'http://allrecipes.com/recipes/desserts/cookies/'
  }, {
    id: 11,
    name: 'Coffee',
    text: 'regular, black, 2 cal',
    pic: 'img/coffee.jpg',
	info: 'http://en.wikipedia.org/wiki/Coffee',
	recipes: 'http://allrecipes.com/recipes/drinks/coffee/'
  }, {
    id: 12,
    name: 'Cola',
    text: '500ml, 136 cal',
    pic: 'img/cola.jpg',
	info: 'http://en.wikipedia.org/wiki/Cola',
	recipes: 'http://en.wikipedia.org/wiki/OpenCola_%28drink%29'
  }, {
    id: 13,
    name: 'Corn',
    text: 'canned, 1 cup, 180 cal',
    pic: 'img/corn.jpg',
	info: 'http://en.wikipedia.org/wiki/Sweet_corn',
	recipes: 'http://www.bbc.co.uk/food/sweetcorn'
  }, {
	id: 14,
    name: 'Egg',
    text: 'large, 102 cal',
    pic: 'img/egg.jpg',
	info: 'http://en.wikipedia.org/wiki/Egg',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/egg'
  }, {
    id: 15,
    name: 'Graham cracker',
    text: 'plain, 59 cal',
    pic: 'img/graham.jpg',
	info: 'http://en.wikipedia.org/wiki/Graham_cracker',
	recipes: 'http://allrecipes.com/recipe/honey-graham-crackers/'
  }, {
    id: 16,
    name: 'Granola bar',
    text: '1.5-ounce bar, 193 cal',
    pic: 'img/granola.jpg',
	info: 'http://en.wikipedia.org/wiki/Granola',
	recipes: 'http://www.foodnetwork.com/recipes/ina-garten/homemade-granola-bars-recipe.html'
  }, {
    id: 17,
    name: 'Green beans',
    text: 'canned, 1 cup, 40 cal',
    pic: 'img/green-beans.jpg',
	info: 'http://en.wikipedia.org/wiki/Green_bean',
	recipes: 'http://www.bbc.co.uk/food/green_bean'
  }, {
    id: 18,
    name: 'Ground beef burger',
    text: '4 ounces, fried, 193 cal',
    pic: 'img/burger.jpg',
	info: 'http://en.wikipedia.org/wiki/Hamburger',
	recipes: 'http://www.bbc.co.uk/food/beef_burger'
	  }, {
    id: 19,
    name: 'Hot dog',
    text: 'pork, 137 cal',
    pic: 'img/hotdog.jpg',
	info: 'http://en.wikipedia.org/wiki/Hot_dog',
	recipes: 'http://allrecipes.com/recipes/main-dish/sandwiches/hot-dogs-and-corn-dogs/'
  }, {
    id: 20,
    name: 'Ice cream',
    text: 'vanilla, 110g, 145 cal',
    pic: 'img/ice.jpg',
	info: 'http://en.wikipedia.org/wiki/Ice_cream',
	recipes: 'http://www.bbc.co.uk/food/ice_cream'
  }, {
    id: 21,
    name: 'Jam doughnut',
    text: '289 cal',
    pic: 'img/doughnut.jpg',
	info: 'http://en.wikipedia.org/wiki/Jelly_doughnut',
	recipes: 'http://www.bbc.co.uk/food/doughnuts'
  }, {
    id: 22,
    name: 'Ketchup',
    text: '1 tablespoon, 15 cal',
    pic: 'img/ketchup.jpg',
	info: 'http://en.wikipedia.org/wiki/Ketchup',
	recipes: 'http://www.bbc.co.uk/food/ketchup'
  }, {
	id: 23,
    name: 'Milk',
    text: '2% fat, 250ml, 122 cal',
    pic: 'img/milk.jpg',
	info: 'http://en.wikipedia.org/wiki/Milk',
	recipes: 'http://www.bbc.co.uk/food/milk'
  }, {
    id: 24,
    name: 'Peanuts',
    text: 'salted, 30g, 168 cal',
    pic: 'img/peanuts.jpg',
	info: 'http://en.wikipedia.org/wiki/Peanut',
	recipes: 'http://www.bbc.co.uk/food/peanut'
  }, {
    id: 25,
    name: 'Mustard',
    text: 'yellow, 2 teaspoons, 6 cal',
    pic: 'img/mustard.jpg',
	info: 'http://en.wikipedia.org/wiki/Mustard_(condiment)',
	recipes: 'http://www.bbc.co.uk/food/mustard'
  }, {
    id: 26,
    name: 'Porridge',
    text: 'medium bowl, 147 cal',
    pic: 'img/porridge.jpg',
	info: 'http://en.wikipedia.org/wiki/Porridge',
	recipes: 'http://www.bbc.co.uk/food/oats'
  }, {
    id: 27,
    name: 'Orange juice',
    text: '250ml, 112 cal',
    pic: 'img/orange-juice.jpg',
	info: 'http://en.wikipedia.org/wiki/Orange_juice',
	recipes: 'http://allrecipes.com/recipe/fresh-orange-juice/'
	}, {
    id: 28,
    name: 'Peanut butter',
    text: '2 tablespoons, 180 cal',
    pic: 'img/peabutter.jpg',
	info: 'http://en.wikipedia.org/wiki/Peanut_butter',
	recipes: 'http://www.bbc.co.uk/food/peanut_butter'
  }, {
    id: 29,
    name: 'Pizza',
    text: 'pepperoni, one slice, 298 cal',
    pic: 'img/pizza.jpg',
	info: 'http://en.wikipedia.org/wiki/Pizza',
	recipes: 'http://www.bbcgoodfood.com/recipes/collection/pizza'
  }, {
    id: 30,
    name: 'Pork chop',
    text: 'grilled, 85g, 221 cal',
    pic: 'img/porkchop.jpg',
	info: 'http://en.wikipedia.org/wiki/Pork_chop',
	recipes: 'http://www.bbc.co.uk/food/pork_chop'
  }, {
    id: 31,
    name: 'Potato',
    text: 'medium, baked, 161 cal',
    pic: 'img/potato.jpg',
	info: 'http://en.wikipedia.org/wiki/Potato',
	recipes: 'http://www.bbc.co.uk/food/potato'
  }, {
	id: 32,
    name: 'Potato chips',
    text: '30g, 155 cal',
    pic: 'img/chips.jpg',
	info: 'http://en.wikipedia.org/wiki/French_fries',
	recipes: 'http://www.bbc.co.uk/food/chips'
  }, {
    id: 33,
    name: 'Raisins',
    text: '40g, 130 cal',
    pic: 'img/raisins.jpg',
	info: 'http://en.wikipedia.org/wiki/Raisin',
	recipes: 'http://www.bbc.co.uk/food/raisins'
  }, {
    id: 34,
    name: 'Red wine',
    text: '1 glass, 123 cal',
    pic: 'img/red.jpg',
	info: 'http://en.wikipedia.org/wiki/Red_wine',
	recipes: 'http://www.wikihow.com/Make-Homemade-Wine'
  }, {
    id: 35,
    name: 'Rice',
    text: 'white, 1 cup, 205 cal',
    pic: 'img/rice.jpg',
	info: 'http://en.wikipedia.org/wiki/Rice',
	recipes: 'http://www.bbc.co.uk/food/rice'
  }, {
    id: 36,
    name: 'salad dressing',
    text: '2 tablespoons, 146 cal',
    pic: 'img/dressing.jpg',
	info: 'http://en.wikipedia.org/wiki/Salad#Dressings',
	recipes: 'http://www.bbc.co.uk/food/french_dressing'
	  }, {
    id: 37,
    name: 'Salsa',
    text: '110g, 35 cal',
    pic: 'img/salsa.jpg',
	info: 'http://en.wikipedia.org/wiki/Salsa_(sauce)',
	recipes: 'http://www.bbc.co.uk/food/salsa'
  }, {
    id: 38,
    name: 'Shrimp',
    text: '85g, 84 cal',
    pic: 'img/shrimp.jpg',
	info: 'http://en.wikipedia.org/wiki/Shrimp',
	recipes: 'http://www.bbc.co.uk/food/shrimp'
  }, {
	id: 39,
    name: 'Spaghetti',
    text: '1 cup, 221 cal',
    pic: 'img/spaghetti.jpg',
	info: 'http://en.wikipedia.org/wiki/Spaghetti',
	recipes: 'http://www.bbc.co.uk/food/spaghetti'
  }, {
    id: 40,
    name: 'Spaghetti sauce',
    text: 'marinara, 110g, 92 cal',
    pic: 'img/spaghetti-sauce.jpg',
	info: 'http://en.wikipedia.org/wiki/Marinara_sauce',
	recipes: 'http://www.bbc.co.uk/food/recipes/spaghettimarinara_11201'
  }, {
    id: 41,
    name: 'Tuna',
    text: 'canned in water, 85g, 100 cal',
    pic: 'img/tuna.jpg',
	info: 'http://en.wikipedia.org/wiki/Tuna',
	recipes: 'http://www.bbc.co.uk/food/tuna_tinned'
  }, {
    id: 42,
    name: 'White wine',
    text: '1 glass, 121 cal',
    pic: 'img/white.jpg',
	info: 'http://en.wikipedia.org/wiki/White_wine',
	recipes: 'http://www.wikihow.com/Make-White-Wine'
  }, {
    id: 43,
    name: 'Yellow cake with chocolate frosting',
    text: 'one piece, 243 cal',
    pic: 'img/cake.jpg',
	info: 'http://en.wikipedia.org/wiki/Cake',
	recipes: 'http://www.marthastewart.com/336432/yellow-butter-cake-with-chocolate-frosti'
  }];

  return {
    all: function() {
      return foods;
    },
    remove: function(foods) {
      foods.splice(foods.indexOf(foods), 1);
    },
    get: function(foodsId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(foodsId)) {
          return foods[i];
        }
      }
      return null;
    }
  };
})


.factory('counter',function($timeout)
{
    var input = 0;
	
    var setTime = function(minutes){
        data.value =  minutes  * 60;
        data.time = data.value;


    };
    var start = function () {
        if(isRunning === false){
            increment();
            isRunning = true;
        }
    };
    var addStart = function () {
        if(isRunning === false){
            decrement();
            isRunning = true;
        }
    };
    var increment = function(){
        stopwatch = $timeout(function() {
            data.value++;
            updateClock()
            increment();
            if(data.value == 0){
                stop();
            }

        }, eachTick);

    };
    var decrement = function(){
        stopwatch = $timeout(function() {
            data.value--;
            updateClock();
            decrement();
            if(data.value == 0){
                stop();
            }

        },eachTick);

    };
    var updateClock = function(){
        data.minutes =(data.value-(data.value %60))/60;
        data.seconds = data.value%60;
    }



    var stop = function () {
        $timeout.cancel(stopwatch);
        stopwatch = null;
        isRunning = false;
    };

    var reset = function () {
        stop();
        data.value = 0;
        updateClock();
        isRunning = false;
    };
    var getDuration = function(){
        return data;
    };
    return{
        data: data,
        start: start,
        stop: stop,
        reset: reset,
        setTime :setTime,
        getDuration: getDuration,
        addStart : addStart
    };



})