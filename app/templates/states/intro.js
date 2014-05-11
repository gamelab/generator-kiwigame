var <%= gameName%> = <%= gameName%> || {};

<%= gameName%>.Intro = new Kiwi.State('Intro');


<%= gameName%>.Intro.create = function () {
    game.states.switchState("Play");
}