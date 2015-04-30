This my 'Calorific' calorie counter app. It contains 4 states and 1 abstract state which is used for tabs. All states contain a
header with the current state name and tabs along the bottom. There are 3 tabs that link to different states. The app name has
been changed in the config.xml file to Calorific as it's a catchier name. This app, and all commit history, is available on 
github at: https://github.com/daraghmatthews/ionic-assignment.git 

On loading the app the very first time the app opens into the 'home' state. This displays the current calorie total and a 
welcome image. The current total is displayed here using a factory to share data between controllers and I am proud of this
feature. When the total in the calorie counter state is changed it will update here also.

There is also a 'food list' state which displays a large number of common foods and they're calories. On clicking on a 
particular food item a different state is entered. This is the food-detail state and shows the picture for  the food list item
larger, and all of the food items text from the factory/service in services.js. Also, in this state are 3 buttons. The 2 lower 
buttons are links to external websites containing information and recipes for the respective food item. The top button changes 
the current state to the calculator state. It uses angular ui-router to do this. Therefore $state.go is used to change the state.

The calc state is a simple calculator. This contains a card at the top which displays the current total. This is the total that
is shared with the homepage. Below this I have used an input to keep the state clutter free. By using input I do not have to put 
more buttons in the state for numbers, as when the input bar is clicked/tapped the devices number pad will appear. Below the 
input bar are 2 buttons. The left button simply clears the total (on both this state and the 'home' state). The right button 
will add whatever figure has been inputted into the input area to the current total.

Happy eating!!