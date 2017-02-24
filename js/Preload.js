var jeu = jeu || {};
jeu.Preload = function () { };
jeu.Preload.prototype = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(3);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.spritesheet('snoop', 'assets/images/snoopmode.png', 220, 240, 16)
        this.load.spritesheet('girl', 'assets/images/girl.png', 82, 80, 6);

    },
    create: function () {
        this.state.start('Game');
    }

};
