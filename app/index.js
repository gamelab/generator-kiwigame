'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var KiwijsGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the Kiwijs generator.'));

    var prompts = [{
      type: 'input',
      name: 'gameName',
      message: "What would you like to call your game? (Use CamelCase, with an initial capital. Eg MsPacMan, not ms-pac-man)", 
      default: 'KiwiGame'
  
    },
    {
      type: 'prompt',
      name: 'webgl',
      message: "Would you like to render with WebGL? (works on fewer browsers, you can change it later) ", 
      default: false
    },
    {
      type: 'prompt',
      name: 'repo',
      message: "Would you like to use the dev branch? (recommended for kiwi.js devs only) ", 
      default: false
    }

    ];

    this.prompt(prompts, function (props) {
      this.gameName = props.gameName;
      this.gameNameLower = props.gameName.toLowerCase();
      this.renderer = (props.webgl) ? "Kiwi.RENDERER_WEBGL" : "Kiwi.RENDERER_CANVAS";
      this.repo = (props.repo) ? "https://github.com/gamelab/kiwi.js.git#dev" : "https://github.com/gamelab/kiwi.js.git";
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('assets');
    this.mkdir('src');
    this.mkdir('src/states');
    this.mkdir('lib');
    this.mkdir('build');
    this.mkdir('assets/img/');
    this.mkdir('assets/img/loading/');

    this.copy('index.html','index.html');
    this.copy('readme.txt','readme.txt');

    this.copy('game.js','src/game.js');
      
    this.copy('states/intro.js','src/states/intro.js');
    this.copy('states/loading.js','src/states/loading.js');
    this.copy('states/play.js','src/states/play.js');

    this.copy('kiwipreloader.js', 'lib/kiwipreloader.js');

    this.copy('img/loading/loading-texture-atlas.json', 'assets/img/loading/loading-texture-atlas.json');
    this.copy('img/loading/loading-texture-atlas.png', 'assets/img/loading/loading-texture-atlas.png');
    this.copy('img/kiwijs-icons.png', 'assets/img/kiwijs-icons.png');
    this.copy('img/kiwijs-name.png', 'assets/img/kiwijs-name.png');
    
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_.bowerrc', '.bowerrc');
    this.copy('_gruntfile.js', 'gruntfile.js');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = KiwijsGenerator;