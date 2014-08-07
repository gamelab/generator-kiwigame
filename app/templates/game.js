
/**
* The core <%= gameName%> game file.
* 
* This file is only used to initalise (start-up) the main Kiwi Game 
* and add all of the relevant states to that Game.
*
*/

//Initialise the Kiwi Game. 

var gameOptions = {
	renderer: <%= renderer%>, 
	width: 800,
	height: 600,
	deviceTarget: <%= cocoonJS%>
}

var game = new Kiwi.Game('content', '<%= gameName%>', null, gameOptions);

//Add all the States we are going to use.
game.states.addState(<%= gameName%>.Loading);
game.states.addState(<%= gameName%>.Intro);
game.states.addState(<%= gameName%>.Play);

game.states.switchState("Loading");