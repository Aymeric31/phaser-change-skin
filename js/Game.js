var jeu = jeu || {};
var snoopdog;
var change;
var girl = true;
var snoop = false;
var activateKonami = false;
jeu.Game = function () { };

jeu.Game.prototype = {

  create: function() {

  },
  activateGirl: function(){
    snoopdog = jeu.game.add.sprite(300, 200, 'snoop');

    snoopdog.animations.add('danse');

    snoopdog.animations.play('danse', 8, true);

  },
  activateSnoop: function(){
    girl = jeu.game.add.sprite(this.game.width / 2, this.game.height - 90, 'girl');

    girl.animations.add('run');

    girl.animations.play('run', 8, true);

  },

  update: function() {

   //konami code
   var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
   n = 0;
   $(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
      if (n === k.length) {
        activateKonami = true;  
        n = 0;
        return false;
      }
    } else {
      n = 0;
    }
  });
   if (activateKonami && girl) {
    girl = false
    snoop = true
    activateKonami = false;
  }

  if (activateKonami && girl==false) {
    girl = true;
    snoop = false;
  }

  if (girl) {
    this.activateGirl()
  }

  if(snoop) {
    this.activateSnoop()
  }

}

} 