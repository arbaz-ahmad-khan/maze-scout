
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1920,
		height: 1080,
		type: Phaser.AUTO,
        transparent: true,
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
        	default: 'arcade',
			arcade: {
				y: 0,
				debug: false,
			}
		},
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Home", Home);
	game.scene.add("LevelOne", LevelOne);
	game.scene.add("LevelTwo", LevelTwo);
	game.scene.add("LevelThree", LevelThree);
	game.scene.add("LevelFour", LevelFour);
	game.scene.add("LevelFive", LevelFive);
	game.scene.add("LevelSix", LevelSix);
	game.scene.add("LevelSeven", LevelSeven);
	game.scene.add("LevelEight", LevelEight);
	game.scene.add("LevelNine", LevelNine);
	game.scene.add("LevelTen", LevelTen);
	game.scene.add("LevelEleven", LevelEleven);
	game.scene.add("LevelTwelve", LevelTwelve);
	game.scene.add("LevelThirteen", LevelThirteen);
	game.scene.add("LevelFourteen", LevelFourteen);
	game.scene.add("LevelFifteen", LevelFifteen);
	game.scene.add("LevelSixteen", LevelSixteen);
	game.scene.add("LevelSeventeen", LevelSeventeen);
	game.scene.add("LevelEighteen", LevelEighteen);
	game.scene.add("LevelNineteen", LevelNineteen);
	game.scene.add("LevelTwenty", LevelTwenty);
	game.scene.add("GameComplete", GameComplete);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}