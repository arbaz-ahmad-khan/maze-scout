
// You can write more code here

/* START OF COMPILED CODE */

class PopupPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 1);

		this.scaleX = 0;
		this.scaleY = 0;

		// winContainer
		const winContainer = scene.add.container(0, 0);
		winContainer.visible = false;
		this.add(winContainer);

		// box_win
		const box_win = scene.add.image(0, 0, "box-win");
		winContainer.add(box_win);

		// levelNumberText
		const levelNumberText = scene.add.text(0, -285, "", {});
		levelNumberText.setOrigin(0.5, 0.5);
		levelNumberText.setStyle({ "fontFamily": "Futura", "fontSize": "48px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		winContainer.add(levelNumberText);

		// levelCompletedText
		const levelCompletedText = scene.add.text(0, -100, "", {});
		levelCompletedText.setOrigin(0.5, 0.5);
		levelCompletedText.text = "LEVEL COMPLETED";
		levelCompletedText.setStyle({ "fontFamily": "Futura", "fontSize": "54px", "fontStyle": "bold", "shadow.blur":10,"shadow.stroke":true,"shadow.fill":true});
		winContainer.add(levelCompletedText);

		// retryBtnContainer
		const retryBtnContainer = scene.add.container(-250, 300);
		winContainer.add(retryBtnContainer);

		// retryBtn
		const retryBtn = scene.add.image(0, 0, "retry-btn");
		retryBtnContainer.add(retryBtn);

		// retryText
		const retryText = scene.add.text(0, 0, "", {});
		retryText.setOrigin(0.5, 0.5);
		retryText.text = "RETRY";
		retryText.setStyle({ "fontFamily": "Futura", "fontSize": "48px", "fontStyle": "bold", "shadow.blur":10,"shadow.stroke":true,"shadow.fill":true});
		retryBtnContainer.add(retryText);

		// nextBtnContainer
		const nextBtnContainer = scene.add.container(250, 300);
		winContainer.add(nextBtnContainer);

		// nextBtn
		const nextBtn = scene.add.image(0, 0, "next-btn");
		nextBtnContainer.add(nextBtn);

		// nextText
		const nextText = scene.add.text(0, 0, "", {});
		nextText.setOrigin(0.5, 0.5);
		nextText.text = "NEXT";
		nextText.setStyle({ "fontFamily": "Futura", "fontSize": "48px", "fontStyle": "bold", "shadow.blur":10,"shadow.stroke":true,"shadow.fill":true});
		nextBtnContainer.add(nextText);

		// homeBtnWin
		const homeBtnWin = scene.add.image(0, 300, "home-btn");
		winContainer.add(homeBtnWin);

		// loseContainer
		const loseContainer = scene.add.container(0, 0);
		loseContainer.visible = false;
		this.add(loseContainer);

		// box_lose
		const box_lose = scene.add.image(0, 0, "box-lose");
		loseContainer.add(box_lose);

		// loseLevelNumberText
		const loseLevelNumberText = scene.add.text(0, -285, "", {});
		loseLevelNumberText.setOrigin(0.5, 0.5);
		loseLevelNumberText.setStyle({ "fontFamily": "Futura", "fontSize": "48px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		loseContainer.add(loseLevelNumberText);

		// levelFailedText
		const levelFailedText = scene.add.text(0, -100, "", {});
		levelFailedText.setOrigin(0.5, 0.5);
		levelFailedText.text = "LEVEL FAILED";
		levelFailedText.setStyle({ "fontFamily": "Futura", "fontSize": "54px", "fontStyle": "bold", "shadow.blur":10,"shadow.stroke":true,"shadow.fill":true});
		loseContainer.add(levelFailedText);

		// loseRetryBtnContainer
		const loseRetryBtnContainer = scene.add.container(75, 300);
		loseContainer.add(loseRetryBtnContainer);

		// loseRetryBtn
		const loseRetryBtn = scene.add.image(0, 0, "retry");
		loseRetryBtnContainer.add(loseRetryBtn);

		// retryBtnText
		const retryBtnText = scene.add.text(0, 0, "", {});
		retryBtnText.setOrigin(0.5, 0.5);
		retryBtnText.text = "RETRY";
		retryBtnText.setStyle({ "fontFamily": "Futura", "fontSize": "48px", "fontStyle": "bold", "shadow.blur":10,"shadow.stroke":true,"shadow.fill":true});
		loseRetryBtnContainer.add(retryBtnText);

		// homeBtnLose
		const homeBtnLose = scene.add.image(-175, 300, "home-btn");
		loseContainer.add(homeBtnLose);

		this.levelNumberText = levelNumberText;
		this.levelCompletedText = levelCompletedText;
		this.retryBtn = retryBtn;
		this.retryText = retryText;
		this.retryBtnContainer = retryBtnContainer;
		this.nextBtn = nextBtn;
		this.nextText = nextText;
		this.nextBtnContainer = nextBtnContainer;
		this.homeBtnWin = homeBtnWin;
		this.winContainer = winContainer;
		this.loseLevelNumberText = loseLevelNumberText;
		this.levelFailedText = levelFailedText;
		this.loseRetryBtn = loseRetryBtn;
		this.retryBtnText = retryBtnText;
		this.loseRetryBtnContainer = loseRetryBtnContainer;
		this.homeBtnLose = homeBtnLose;
		this.loseContainer = loseContainer;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.pointerOver = (aBtn,scale) => {
			this.oScene.input.setDefaultCursor('pointer');
			this.oScene.tweens.add({
				targets: aBtn,
				scaleX: scale + 0.05,
				scaleY: scale + 0.05,
				duration: 50
			})
		}
		this.pointerOut = (aBtn,scale) => {
			this.oScene.input.setDefaultCursor('default');
			this.oScene.tweens.add({
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
		retryBtnContainer.on('pointerover', () => this.pointerOver([retryBtnContainer],1));
		retryBtnContainer.on('pointerout', () => this.pointerOut([retryBtnContainer],1));
		nextBtnContainer.on('pointerover', () => this.pointerOver([nextBtnContainer],1));
		nextBtnContainer.on('pointerout', () => this.pointerOut([nextBtnContainer],1));
		homeBtnWin.on('pointerover', () => this.pointerOver([homeBtnWin],1));
		homeBtnWin.on('pointerout', () => this.pointerOut([homeBtnWin],1));
		homeBtnLose.on('pointerover', () => this.pointerOver([homeBtnLose],1));
		homeBtnLose.on('pointerout', () => this.pointerOut([homeBtnLose],1));
		loseRetryBtnContainer.on('pointerover', () => this.pointerOver([loseRetryBtnContainer],1));
		loseRetryBtnContainer.on('pointerout', () => this.pointerOut([loseRetryBtnContainer],1));

		this.scene.add.existing(this);
		this.oScene = scene;
		this.oScene.settingsPrefab.setVisible(false);
		this.retryBtnContainer.setSize(295, 80);
		this.nextBtnContainer.setSize(295, 80);
		this.loseRetryBtnContainer.setSize(295, 80);
		this.oScene.input.keyboard.on('keydown-' + 'ENTER', () => {
			if(this.winContainer.visible) {
				this.startNextLevel(this.currentLevelNumber);
			}
		});
		this.homeBtnWin.setInteractive().on('pointerdown', () => {
			this.homeBtnWin.setScale(0.95);
		});
		this.homeBtnWin.setInteractive().on('pointerup', () => {
			this.homeBtnWin.setScale(1);
			this.oScene.scene.start('Home');
		});
		this.homeBtnLose.setInteractive().on('pointerdown', () => {
			this.homeBtnLose.setScale(0.95);
		});
		this.homeBtnLose.setInteractive().on('pointerup', () => {
			this.homeBtnLose.setScale(1);
			this.oScene.scene.start('Home');
		});
		this.retryBtnContainer.setInteractive().on('pointerdown', () => {
			this.retryBtnContainer.setScale(0.95);
		});
		this.retryBtnContainer.setInteractive().on('pointerup', () => {
			this.retryBtnContainer.setScale(1);
			this.oScene.scene.restart();
		});
		this.nextBtnContainer.setInteractive().on('pointerdown', () => {
			this.nextBtnContainer.setScale(0.95);
		});
		this.nextBtnContainer.setInteractive().on('pointerup', () => {
			this.nextBtnContainer.setScale(1);
			this.startNextLevel(this.currentLevelNumber);
		});
		this.loseRetryBtnContainer.setInteractive().on('pointerdown', () => {
			this.loseRetryBtnContainer.setScale(0.95);
		});
		this.loseRetryBtnContainer.setInteractive().on('pointerup', () => {
			this.loseRetryBtnContainer.setScale(1);
			this.oScene.scene.restart();
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	levelNumberText;
	/** @type {Phaser.GameObjects.Text} */
	levelCompletedText;
	/** @type {Phaser.GameObjects.Image} */
	retryBtn;
	/** @type {Phaser.GameObjects.Text} */
	retryText;
	/** @type {Phaser.GameObjects.Container} */
	retryBtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	nextBtn;
	/** @type {Phaser.GameObjects.Text} */
	nextText;
	/** @type {Phaser.GameObjects.Container} */
	nextBtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	homeBtnWin;
	/** @type {Phaser.GameObjects.Container} */
	winContainer;
	/** @type {Phaser.GameObjects.Text} */
	loseLevelNumberText;
	/** @type {Phaser.GameObjects.Text} */
	levelFailedText;
	/** @type {Phaser.GameObjects.Image} */
	loseRetryBtn;
	/** @type {Phaser.GameObjects.Text} */
	retryBtnText;
	/** @type {Phaser.GameObjects.Container} */
	loseRetryBtnContainer;
	/** @type {Phaser.GameObjects.Image} */
	homeBtnLose;
	/** @type {Phaser.GameObjects.Container} */
	loseContainer;

	/* START-USER-CODE */

	// Write your code here.
	

	setLevel(levelNumber) {
		this.currentLevelNumber = levelNumber;
		this.levelNumberText.setText("LEVEL - " + this.currentLevelNumber);
		this.loseLevelNumberText.setText("LEVEL - " + this.currentLevelNumber);
		this.startPopupAnimation();
	}

	startPopupAnimation() {
		this.oScene.tweens.add({
			targets: this,
			scale: 1,
			duration: 480,
		});
	}

	startNextLevel(currentLevel) {
		switch(currentLevel) {
			case 1:
				this.oScene.scene.stop("LevelOne");
				this.oScene.scene.start("LevelTwo");
				break;

			case 2:
				this.oScene.scene.stop("LevelTwo");
				this.oScene.scene.start("LevelThree");
				break;

			case 3:
				this.oScene.scene.stop("LevelThree");
				this.oScene.scene.start("LevelFour");
				break;

			case 4:
				this.oScene.scene.stop("LevelFour");
				this.oScene.scene.start("LevelFive");
				break;

			case 5:
				this.oScene.scene.stop("LevelFive");
				this.oScene.scene.start("LevelSix");
				break;

			case 6:
				this.oScene.scene.stop("LevelSix");
				this.oScene.scene.start("LevelSeven");
				break;

			case 7:
				this.oScene.scene.stop("LevelSeven");
				this.oScene.scene.start("LevelEight");
				break;

			case 8:
				this.oScene.scene.stop("LevelEight");
				this.oScene.scene.start("LevelNine");
				break;

			case 9:
				this.oScene.scene.stop("LevelNine");
				this.oScene.scene.start("LevelTen");
				break;

			case 10:
				this.oScene.scene.stop("LevelTen");
				this.oScene.scene.start("LevelEleven");
				break;

			case 11:
				this.oScene.scene.stop("LevelEleven");
				this.oScene.scene.start("LevelTwelve");
				break;

			case 12:
				this.oScene.scene.stop("LevelTwelve");
				this.oScene.scene.start("LevelThirteen");
				break;

			case 13:
				this.oScene.scene.stop("LevelThirteen");
				this.oScene.scene.start("LevelFourteen");
				break;

			case 14:
				this.oScene.scene.stop("LevelFourteen");
				this.oScene.scene.start("LevelFifteen");
				break;

			case 15:
				this.oScene.scene.stop("LevelFifteen");
				this.oScene.scene.start("LevelSixteen");
				break;

			case 16:
				this.oScene.scene.stop("LevelSixteen");
				this.oScene.scene.start("LevelSeventeen");
				break;

			case 17:
				this.oScene.scene.stop("LevelSeventeen");
				this.oScene.scene.start("LevelEighteen");
				break;

			case 18:
				this.oScene.scene.stop("LevelEighteen");
				this.oScene.scene.start("LevelNineteen");
				break;

			case 19:
				this.oScene.scene.stop("LevelNineteen");
				this.oScene.scene.start("LevelTwenty");
				break;

			case 20:
				this.oScene.scene.stop("LevelTwenty");
				this.oScene.scene.start("GameComplete");
				break;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

