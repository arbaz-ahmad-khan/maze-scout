
// You can write more code here

/* START OF COMPILED CODE */

class LevelEleven extends Phaser.Scene {

	constructor() {
		super("LevelEleven");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sand_bg
		this.add.image(960, 540, "sand-bg");

		// backgroundContainer
		this.add.container(0, 0);

		// boxTileContainer
		const boxTileContainer = this.add.container(0, 0);

		// boxTile_65
		const boxTile_65 = this.add.image(645, 810, "box-tile");
		boxTileContainer.add(boxTile_65);

		// boxTile_66
		const boxTile_66 = this.add.image(545, 810, "box-tile");
		boxTileContainer.add(boxTile_66);

		// boxTile_68
		const boxTile_68 = this.add.image(745, 810, "box-tile");
		boxTileContainer.add(boxTile_68);

		// boxTile_69
		const boxTile_69 = this.add.image(845, 810, "box-tile");
		boxTileContainer.add(boxTile_69);

		// boxTile_70
		const boxTile_70 = this.add.image(945, 810, "box-tile");
		boxTileContainer.add(boxTile_70);

		// boxTile_72
		const boxTile_72 = this.add.image(1145, 810, "box-tile");
		boxTileContainer.add(boxTile_72);

		// boxTile_73
		const boxTile_73 = this.add.image(1245, 810, "box-tile");
		boxTileContainer.add(boxTile_73);

		// boxTile_74
		const boxTile_74 = this.add.image(1345, 810, "box-tile");
		boxTileContainer.add(boxTile_74);

		// boxTile_75
		const boxTile_75 = this.add.image(1445, 810, "box-tile");
		boxTileContainer.add(boxTile_75);

		// boxTile_76
		const boxTile_76 = this.add.image(645, 710, "box-tile");
		boxTileContainer.add(boxTile_76);

		// boxTile_78
		const boxTile_78 = this.add.image(1345, 710, "box-tile");
		boxTileContainer.add(boxTile_78);

		// boxTile_79
		const boxTile_79 = this.add.image(1245, 710, "box-tile");
		boxTileContainer.add(boxTile_79);

		// boxTile_80
		const boxTile_80 = this.add.image(1145, 710, "box-tile");
		boxTileContainer.add(boxTile_80);

		// boxTile_81
		const boxTile_81 = this.add.image(1045, 710, "box-tile");
		boxTileContainer.add(boxTile_81);

		// boxTile_82
		const boxTile_82 = this.add.image(945, 710, "box-tile");
		boxTileContainer.add(boxTile_82);

		// boxTile_83
		const boxTile_83 = this.add.image(845, 710, "box-tile");
		boxTileContainer.add(boxTile_83);

		// boxTile_84
		const boxTile_84 = this.add.image(745, 710, "box-tile");
		boxTileContainer.add(boxTile_84);

		// boxTile_85
		const boxTile_85 = this.add.image(445, 710, "box-tile");
		boxTileContainer.add(boxTile_85);

		// boxTile_86
		const boxTile_86 = this.add.image(545, 710, "box-tile");
		boxTileContainer.add(boxTile_86);

		// boxTile_88
		const boxTile_88 = this.add.image(1445, 610, "box-tile");
		boxTileContainer.add(boxTile_88);

		// boxTile_89
		const boxTile_89 = this.add.image(1345, 610, "box-tile");
		boxTileContainer.add(boxTile_89);

		// boxTile_90
		const boxTile_90 = this.add.image(1245, 610, "box-tile");
		boxTileContainer.add(boxTile_90);

		// boxTile_91
		const boxTile_91 = this.add.image(1145, 610, "box-tile");
		boxTileContainer.add(boxTile_91);

		// boxTile_92
		const boxTile_92 = this.add.image(1045, 610, "box-tile");
		boxTileContainer.add(boxTile_92);

		// boxTile_93
		const boxTile_93 = this.add.image(945, 610, "box-tile");
		boxTileContainer.add(boxTile_93);

		// boxTile_94
		const boxTile_94 = this.add.image(845, 610, "box-tile");
		boxTileContainer.add(boxTile_94);

		// boxTile_95
		const boxTile_95 = this.add.image(745, 610, "box-tile");
		boxTileContainer.add(boxTile_95);

		// boxTile_96
		const boxTile_96 = this.add.image(445, 610, "box-tile");
		boxTileContainer.add(boxTile_96);

		// boxTile_97
		const boxTile_97 = this.add.image(545, 610, "box-tile");
		boxTileContainer.add(boxTile_97);

		// boxTile_98
		const boxTile_98 = this.add.image(645, 510, "box-tile");
		boxTileContainer.add(boxTile_98);

		// boxTile_99
		const boxTile_99 = this.add.image(1445, 510, "box-tile");
		boxTileContainer.add(boxTile_99);

		// boxTile_100
		const boxTile_100 = this.add.image(1345, 510, "box-tile");
		boxTileContainer.add(boxTile_100);

		// boxTile_101
		const boxTile_101 = this.add.image(1245, 510, "box-tile");
		boxTileContainer.add(boxTile_101);

		// boxTile_102
		const boxTile_102 = this.add.image(1145, 510, "box-tile");
		boxTileContainer.add(boxTile_102);

		// boxTile_103
		const boxTile_103 = this.add.image(1045, 510, "box-tile");
		boxTileContainer.add(boxTile_103);

		// boxTile_105
		const boxTile_105 = this.add.image(845, 510, "box-tile");
		boxTileContainer.add(boxTile_105);

		// boxTile_106
		const boxTile_106 = this.add.image(745, 510, "box-tile");
		boxTileContainer.add(boxTile_106);

		// boxTile_107
		const boxTile_107 = this.add.image(445, 510, "box-tile");
		boxTileContainer.add(boxTile_107);

		// boxTile_108
		const boxTile_108 = this.add.image(545, 510, "box-tile");
		boxTileContainer.add(boxTile_108);

		// boxTile_110
		const boxTile_110 = this.add.image(1445, 410, "box-tile");
		boxTileContainer.add(boxTile_110);

		// boxTile_111
		const boxTile_111 = this.add.image(1345, 410, "box-tile");
		boxTileContainer.add(boxTile_111);

		// boxTile_112
		const boxTile_112 = this.add.image(1245, 410, "box-tile");
		boxTileContainer.add(boxTile_112);

		// boxTile_113
		const boxTile_113 = this.add.image(1145, 410, "box-tile");
		boxTileContainer.add(boxTile_113);

		// boxTile_114
		const boxTile_114 = this.add.image(1045, 410, "box-tile");
		boxTileContainer.add(boxTile_114);

		// boxTile_118
		const boxTile_118 = this.add.image(445, 410, "box-tile");
		boxTileContainer.add(boxTile_118);

		// boxTile_119
		const boxTile_119 = this.add.image(545, 410, "box-tile");
		boxTileContainer.add(boxTile_119);

		// boxTile_120
		const boxTile_120 = this.add.image(645, 310, "box-tile");
		boxTileContainer.add(boxTile_120);

		// boxTile_122
		const boxTile_122 = this.add.image(1345, 310, "box-tile");
		boxTileContainer.add(boxTile_122);

		// boxTile_123
		const boxTile_123 = this.add.image(1245, 310, "box-tile");
		boxTileContainer.add(boxTile_123);

		// boxTile_125
		const boxTile_125 = this.add.image(1045, 310, "box-tile");
		boxTileContainer.add(boxTile_125);

		// boxTile_126
		const boxTile_126 = this.add.image(945, 310, "box-tile");
		boxTileContainer.add(boxTile_126);

		// boxTile_127
		const boxTile_127 = this.add.image(845, 310, "box-tile");
		boxTileContainer.add(boxTile_127);

		// boxTile_128
		const boxTile_128 = this.add.image(745, 310, "box-tile");
		boxTileContainer.add(boxTile_128);

		// boxTile_130
		const boxTile_130 = this.add.image(545, 310, "box-tile");
		boxTileContainer.add(boxTile_130);

		// colliderContainer
		const colliderContainer = this.add.container(0, 0);

		// rectangle
		const rectangle = this.add.rectangle(745, 865, 500, 10);
		rectangle.visible = false;
		rectangle.isFilled = true;
		colliderContainer.add(rectangle);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(745, 255, 700, 10);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		colliderContainer.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(795, 365, 400, 10);
		rectangle_2.visible = false;
		rectangle_2.isFilled = true;
		colliderContainer.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(745, 455, 300, 10);
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		colliderContainer.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(1295, 865, 400, 10);
		rectangle_4.visible = false;
		rectangle_4.isFilled = true;
		colliderContainer.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(1295, 255, 200, 10);
		rectangle_5.visible = false;
		rectangle_5.isFilled = true;
		colliderContainer.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(445, 765, 100, 10);
		rectangle_6.visible = false;
		rectangle_6.isFilled = true;
		colliderContainer.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(645, 655, 100, 10);
		rectangle_7.visible = false;
		rectangle_7.isFilled = true;
		colliderContainer.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(945, 555, 100, 10);
		rectangle_8.visible = false;
		rectangle_8.isFilled = true;
		colliderContainer.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(1145, 355, 100, 10);
		rectangle_9.visible = false;
		rectangle_9.isFilled = true;
		colliderContainer.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(1445, 355, 100, 10);
		rectangle_10.visible = false;
		rectangle_10.isFilled = true;
		colliderContainer.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(1045, 765, 100, 10);
		rectangle_11.visible = false;
		rectangle_11.isFilled = true;
		colliderContainer.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(1445, 755, 100, 10);
		rectangle_12.visible = false;
		rectangle_12.isFilled = true;
		colliderContainer.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(645, 565, 100, 10);
		rectangle_13.visible = false;
		rectangle_13.isFilled = true;
		colliderContainer.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(1445, 665, 100, 10);
		rectangle_14.visible = false;
		rectangle_14.isFilled = true;
		colliderContainer.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(390, 510, 10, 500);
		rectangle_15.visible = false;
		rectangle_15.isFilled = true;
		colliderContainer.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(990, 460, 10, 200);
		rectangle_16.visible = false;
		rectangle_16.isFilled = true;
		colliderContainer.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(1500, 510, 10, 300);
		rectangle_17.visible = false;
		rectangle_17.isFilled = true;
		colliderContainer.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(490, 810, 10, 100);
		rectangle_18.visible = false;
		rectangle_18.isFilled = true;
		colliderContainer.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(1000, 810, 10, 100);
		rectangle_19.visible = false;
		rectangle_19.isFilled = true;
		colliderContainer.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(1090, 810, 10, 100);
		rectangle_20.visible = false;
		rectangle_20.isFilled = true;
		colliderContainer.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(1400, 710, 10, 100);
		rectangle_21.visible = false;
		rectangle_21.isFilled = true;
		colliderContainer.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(600, 610, 10, 100);
		rectangle_22.visible = false;
		rectangle_22.isFilled = true;
		colliderContainer.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(690, 610, 10, 100);
		rectangle_23.visible = false;
		rectangle_23.isFilled = true;
		colliderContainer.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(600, 410, 10, 100);
		rectangle_24.visible = false;
		rectangle_24.isFilled = true;
		colliderContainer.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(900, 510, 10, 100);
		rectangle_25.visible = false;
		rectangle_25.isFilled = true;
		colliderContainer.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(1100, 310, 10, 100);
		rectangle_26.visible = false;
		rectangle_26.isFilled = true;
		colliderContainer.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(1190, 310, 10, 100);
		rectangle_27.visible = false;
		rectangle_27.isFilled = true;
		colliderContainer.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(1400, 310, 10, 100);
		rectangle_28.visible = false;
		rectangle_28.isFilled = true;
		colliderContainer.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(1500, 810, 10, 100);
		rectangle_29.visible = false;
		rectangle_29.isFilled = true;
		colliderContainer.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(490, 310, 10, 100);
		rectangle_30.visible = false;
		rectangle_30.isFilled = true;
		colliderContainer.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(445, 355, 100, 10);
		rectangle_31.visible = false;
		rectangle_31.isFilled = true;
		colliderContainer.add(rectangle_31);

		// container_particles
		const container_particles = this.add.container(0, 0);

		// headerContainer
		const headerContainer = this.add.container(0, 0);

		// levelNumberText
		const levelNumberText = this.add.text(960, 100, "", {});
		levelNumberText.setOrigin(0.5, 0.5);
		levelNumberText.text = "LEVEL - 11";
		levelNumberText.setStyle({ "fontFamily": "Futura", "fontSize": "72px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
		headerContainer.add(levelNumberText);

		// timerText
		const timerText = this.add.text(960, 1000, "", {});
		timerText.setOrigin(0.5, 0.5);
		timerText.setStyle({ "fontFamily": "Futura", "fontSize": "60px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
		headerContainer.add(timerText);

		// character
		const character = this.add.image(445, 410, "character-without-eyes");

		// rightEye
		const rightEye = this.add.image(445, 410, "character-eyeball");

		// leftEye
		const leftEye = this.add.image(445, 410, "character-eyeball");

		// settingsPrefab
		const settingsPrefab = new SettingsPrefab(this, 1560, 250);
		this.add.existing(settingsPrefab);
		settingsPrefab.scaleX = 0.8;
		settingsPrefab.scaleY = 0.8;
		settingsPrefab.visible = true;

		// blackLayer
		const blackLayer = this.add.image(960, 540, "black-layer");
		blackLayer.visible = false;

		this.boxTileContainer = boxTileContainer;
		this.colliderContainer = colliderContainer;
		this.container_particles = container_particles;
		this.timerText = timerText;
		this.character = character;
		this.rightEye = rightEye;
		this.leftEye = leftEye;
		this.settingsPrefab = settingsPrefab;
		this.blackLayer = blackLayer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	boxTileContainer;
	/** @type {Phaser.GameObjects.Container} */
	colliderContainer;
	/** @type {Phaser.GameObjects.Container} */
	container_particles;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Image} */
	character;
	/** @type {Phaser.GameObjects.Image} */
	rightEye;
	/** @type {Phaser.GameObjects.Image} */
	leftEye;
	/** @type {SettingsPrefab} */
	settingsPrefab;
	/** @type {Phaser.GameObjects.Image} */
	blackLayer;

	/* START-USER-CODE */

	// Write your code here

	create() {
		const interactiveArea = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000, 0);
		this.input.setDefaultCursor('default');
		this.oGameManager = new GameManager(this);
		this.isPopup = false;
		this.cursorsEnabled = true;
		this.isTimerStarted = false;
		this.isTimerRunning = false;
		this.editorCreate();
		this.enableColliders();
		this.physics.world.enable(this.character);
		const leftEyeRotationRadius = 5;
		const rightEyeRotationRadius = 5;
		const rotationSpeed = 0.003;
		this.leftEyeRotationRadius = leftEyeRotationRadius;
		this.rightEyeRotationRadius = rightEyeRotationRadius;
		this.rotationSpeed = rotationSpeed;
		this.levelCompleted = false;
		this.startLevelTimer();
		this.cursors = this.input.keyboard.createCursorKeys();

		// Mouse-drag
	
		interactiveArea.setOrigin(0);
		interactiveArea.setInteractive();
		let dragStartX = 0;
		let dragStartY = 0;
		interactiveArea.on("pointerdown", (pointer) => {
			dragStartX = pointer.x;
			dragStartY = pointer.y;
		});
		interactiveArea.on("pointerup", (pointer) => {
			const dragEndX = pointer.x;
			const dragEndY = pointer.y;
			const dragThreshold = 50;
			const dragX = dragEndX - dragStartX;
			const dragY = dragEndY - dragStartY;

			if (Math.abs(dragX) > Math.abs(dragY) && Math.abs(dragX) > dragThreshold) {
				//Check Y Axis Collision and Continue Movement; Stop at Collision
				if (dragX > 0) {
					this.playTweenForPlayer("Right");
				} else {
					this.playTweenForPlayer("Left");
				}
			} else if (
				Math.abs(dragY) > Math.abs(dragX) &&
				Math.abs(dragY) > dragThreshold
			) {
				//Check X Axis Collision and Continue Movement; Stop at Collision
				if (dragY > 0) {
					this.playTweenForPlayer("Down");
				} else {
					this.playTweenForPlayer("Up");
				}
			}
		});

		this.particles = this.add.particles('brown');
		this.container_particles.add(this.particles)
		this.emitter = this.particles.createEmitter({
			follow: this.character,
			scale: { start: 0.2, end: 0 },
			speed:  60,
			lifespan: 100,
			frequency: 24,
			quantity: 1
		});
		this.emitter.setGravityY(20);

		let tempEndTime = Date.now() + this.oGameManager.levelElevenTimer;
		let tempCurrentTime = Date.now();
		let tempRemainingTime = tempEndTime - tempCurrentTime;
		let tempMinutes = Math.floor(tempRemainingTime / 60000);
		let tempSeconds = Math.ceil((tempRemainingTime % 60000) / 1000);

		this.timerText.setText('Time Left: ' + tempMinutes.toString().padStart(2, '0') + ':' + tempSeconds.toString().padStart(2, '0'));		
	}

	enableColliders() {
		for (let i = 0; i < this.colliderContainer.length; i++) {
			this.physics.world.enable(this.colliderContainer.list[i]);
			this.colliderContainer.list[i].body.setImmovable(true);
			this.physics.add.collider(this.character, this.colliderContainer.list[i], this.stopCollision, null, this);
		}
	}

	stopCollision() {
		this.character.body.setVelocity(0);
	}

	handleTextures() {
		for (let i = 0; i < this.boxTileContainer.list.length; i++) {
			if ((this.character.x >= this.boxTileContainer.list[i].x - 20 && this.character.x <= this.boxTileContainer.list[i].x + 20) && (this.character.y >= this.boxTileContainer.list[i].y - 20 && this.character.y <= this.boxTileContainer.list[i].y + 20)) {
				this.boxTileContainer.list[i].setTexture('box-filled');
			}
		}
	}

	arrowKeyPressed() {
		if (this.cursorsEnabled && !this.levelCompleted) {
			if (this.character.body.velocity.x == 0 && this.character.body.velocity.y == 0) {
				if (this.cursors.left.isDown) {
					this.character.body.setVelocityX(this.oGameManager.leftArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
				}
				else if (this.cursors.right.isDown) {
					this.character.body.setVelocityX(this.oGameManager.rightArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
				}
				else if (this.cursors.up.isDown) {
					this.character.body.setVelocityY(this.oGameManager.upArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
				}
				else if (this.cursors.down.isDown) {
					this.character.body.setVelocityY(this.oGameManager.downArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
				}
			}
		}
	}

	playTweenForPlayer(swipeSide) {
		if (this.cursorsEnabled && !this.levelCompleted) {
			switch (swipeSide) {
				case "Left":
					this.character.body.setVelocityX(this.oGameManager.leftArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
					break;

				case "Right":
					this.character.body.setVelocityX(this.oGameManager.rightArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
					break;
				case "Up":
					this.character.body.setVelocityY(this.oGameManager.upArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
					break;
				case "Down":
					this.character.body.setVelocityY(this.oGameManager.downArrowSpeed);
					this.isTimerStarted = true;
					this.startLevelTimer();
					break;
			}
		}
	}

	checkLevelCompleted() {
		let count = 0;
		for (let i = 0; i < this.boxTileContainer.list.length; i++) {
			if (this.boxTileContainer.list[i].texture.key == 'box-filled') {
				count++;
				if (count == this.boxTileContainer.list.length) {
					if (!this.isPopup) {
						this.isPopup = true;
						this.pauseTimer();
						this.blackLayer.setVisible(true);
						this.popupPrefab = new PopupPrefab(this, 960, 540);
						this.popupPrefab.setLevel(11);
						this.popupPrefab.winContainer.setVisible(true);
						this.levelCompleted = true;
					}
				}
			}
		}
	}

	startLevelTimer() {
		if(!this.isTimerRunning && this.isTimerStarted) {
			this.endTime = Date.now() + this.oGameManager.levelElevenTimer;
			this.isTimerRunning = true;
			this.updateTimer();
		}
	}

	pauseTimer() {
        this.isTimerRunning = false;
    }

	updateTimer = () => {
		if (!this.isTimerRunning) {
            return;
        }
		if (this.levelCompleted) {
			return;
		}
		let currentTime = Date.now();
		let remainingTime = this.endTime - currentTime;

		if (remainingTime <= 0) {
			this.timerText.setText('Time Left: 0:00');
			this.cursorsEnabled = false;
			this.isPopup = true;
			this.blackLayer.setVisible(true);
			this.popupPrefab = new PopupPrefab(this, 960, 540);
			this.popupPrefab.setLevel(11);
			this.popupPrefab.loseContainer.setVisible(true);
		} else {
			let minutes = Math.floor(remainingTime / 60000);
			let seconds = Math.ceil((remainingTime % 60000) / 1000);

			this.timerText.setText('Time Left: ' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'));

			setTimeout(this.updateTimer, 1000);
		}
	}

	update() {
		this.handleTextures();
		this.arrowKeyPressed();
		this.checkLevelCompleted();

		const currentTime = this.time.now;

		const leftEyeX = this.character.x + this.leftEyeRotationRadius * Math.cos(currentTime * this.rotationSpeed);
		const leftEyeY = this.character.y + this.leftEyeRotationRadius * Math.sin(currentTime * this.rotationSpeed);
		this.leftEye.setPosition((leftEyeX)-20, (leftEyeY)-23);

		const rightEyeX = this.character.x + this.rightEyeRotationRadius * Math.cos(currentTime * this.rotationSpeed);
		const rightEyeY = this.character.y + this.rightEyeRotationRadius * Math.sin(currentTime * this.rotationSpeed);
		this.rightEye.setPosition((rightEyeX)+20, (rightEyeY)-23);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
