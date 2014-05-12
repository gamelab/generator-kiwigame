var <%= gameName%> = <%= gameName%> || {};

<%= gameName%>.Intro = new Kiwi.State('Intro');

/**
* The IntroState is the state which would manage any main-menu functionality for your game.
* Generally this State would switch to other sub 'states' which would handle the individual features. 
*  
* Right now we are just switching straight to the PlayState.
*
*/


<%= gameName%>.Intro.create = function () {
    game.states.switchState("Play");
}