
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// logo
		this.add.image(960, 540, "logo");

		// playBtn
		const playBtn = this.add.image(960, 940, "play-btn");

		this.playBtn = playBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {
		
		this.editorCreate();
		this.input.setDefaultCursor('default');

		this.pointerOver = (aBtn,scale) => {
			this.input.setDefaultCursor('pointer');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn,scale) => {
			this.input.setDefaultCursor('default');
			this.tweens.add({
				targets: aBtn,
				scaleX: scale,
				scaleY: scale,
				duration: 50,
				onComplete: () => {
					aBtn.forEach((btn) => {
						btn.setScale(scale);
					});
				}
			})
		}
		this.playBtn.on('pointerover', () => this.pointerOver([this.playBtn],1));
		this.playBtn.on('pointerout', () => this.pointerOut([this.playBtn],1));

		this.playBtn.setInteractive().on('pointerdown', () => {
			this.tweens.add({
			  targets: this.playBtn,
			  scaleX: 0.9,
			  scaleY: 0.9,
			  duration: 80,
			  yoyo: true,
			  onComplete: () => {
				this.scene.start("LevelOne");
			  }
			});
		  });
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
