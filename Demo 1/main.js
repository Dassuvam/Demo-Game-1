var game= new Phaser.Game(600,500,Phaser.Auto);
game.state.add('state1', demo.state1);
game.state.start('state1'); 