var jeu = jeu || {};

jeu.game = new Phaser.Game(746, 420, Phaser.CANVAS, '');

jeu.game.state.add('Boot', jeu.Boot);
jeu.game.state.add('Preload', jeu.Preload);
jeu.game.state.add('Game', jeu.Game);

jeu.game.state.start('Boot');