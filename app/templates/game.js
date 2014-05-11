
/**
* The core <%= gameName%> game file.
* 
* This file is only used to initalise (start-up) the main Kiwi Game 
* and add all of the relevant states to that Game.
*
*/

//Initialise the Kiwi Game. 

var game = new Kiwi.Game('content', '<%= gameName%>', null, { renderer: <%= renderer%> });

//Add all the States we are going to use.
game.states.addState(<%= gameName%>.Loading);
game.states.addState(<%= gameName%>.Intro);
game.states.addState(<%= gameName%>.Play);

game.states.switchState("<%= gameName%>.Loading");