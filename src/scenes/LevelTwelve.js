
// You can write more code here

/* START OF COMPILED CODE */

class LevelTwelve extends Phaser.Scene {

	constructor() {
		super("LevelTwelve");

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

		// boxTile
		const boxTile = this.add.image(645, 810, "box-tile");
		boxTileContainer.add(boxTile);

		// boxTile0
		const boxTile0 = this.add.image(545, 810, "box-tile");
		boxTileContainer.add(boxTile0);

		// boxTile_1
		const boxTile_1 = this.add.image(445, 810, "box-tile");
		boxTileContainer.add(boxTile_1);

		// boxTile_3
		const boxTile_3 = this.add.image(845, 810, "box-tile");
		boxTileContainer.add(boxTile_3);

		// boxTile_4
		const boxTile_4 = this.add.image(945, 810, "box-tile");
		boxTileContainer.add(boxTile_4);

		// boxTile_5
		const boxTile_5 = this.add.image(1045, 810, "box-tile");
		boxTileContainer.add(boxTile_5);

		// boxTile_6
		const boxTile_6 = this.add.image(1145, 810, "box-tile");
		boxTileContainer.add(boxTile_6);

		// boxTile_7
		const boxTile_7 = this.add.image(1245, 810, "box-tile");
		boxTileContainer.add(boxTile_7);

		// boxTile_10
		const boxTile_10 = this.add.image(645, 710, "box-tile");
		boxTileContainer.add(boxTile_10);

		// boxTile_11
		const boxTile_11 = this.add.image(1445, 710, "box-tile");
		boxTileContainer.add(boxTile_11);

		// boxTile_12
		const boxTile_12 = this.add.image(1345, 710, "box-tile");
		boxTileContainer.add(boxTile_12);

		// boxTile_13
		const boxTile_13 = this.add.image(1245, 710, "box-tile");
		boxTileContainer.add(boxTile_13);

		// boxTile_14
		const boxTile_14 = this.add.image(1145, 710, "box-tile");
		boxTileContainer.add(boxTile_14);

		// boxTile_16
		const boxTile_16 = this.add.image(945, 710, "box-tile");
		boxTileContainer.add(boxTile_16);

		// boxTile_17
		const boxTile_17 = this.add.image(845, 710, "box-tile");
		boxTileContainer.add(boxTile_17);

		// boxTile_18
		const boxTile_18 = this.add.image(745, 710, "box-tile");
		boxTileContainer.add(boxTile_18);

		// boxTile_19
		const boxTile_19 = this.add.image(445, 710, "box-tile");
		boxTileContainer.add(boxTile_19);

		// boxTile_20
		const boxTile_20 = this.add.image(545, 710, "box-tile");
		boxTileContainer.add(boxTile_20);

		// boxTile_22
		const boxTile_22 = this.add.image(1445, 610, "box-tile");
		boxTileContainer.add(boxTile_22);

		// boxTile_25
		const boxTile_25 = this.add.image(1145, 610, "box-tile");
		boxTileContainer.add(boxTile_25);

		// boxTile_27
		const boxTile_27 = this.add.image(945, 610, "box-tile");
		boxTileContainer.add(boxTile_27);

		// boxTile_30
		const boxTile_30 = this.add.image(445, 610, "box-tile");
		boxTileContainer.add(boxTile_30);

		// boxTile_33
		const boxTile_33 = this.add.image(1445, 510, "box-tile");
		boxTileContainer.add(boxTile_33);

		// boxTile_36
		const boxTile_36 = this.add.image(1145, 510, "box-tile");
		boxTileContainer.add(boxTile_36);

		// boxTile_38
		const boxTile_38 = this.add.image(945, 510, "box-tile");
		boxTileContainer.add(boxTile_38);

		// boxTile_41
		const boxTile_41 = this.add.image(445, 510, "box-tile");
		boxTileContainer.add(boxTile_41);

		// boxTile_43
		const boxTile_43 = this.add.image(645, 410, "box-tile");
		boxTileContainer.add(boxTile_43);

		// boxTile_44
		const boxTile_44 = this.add.image(1445, 410, "box-tile");
		boxTileContainer.add(boxTile_44);

		// boxTile_45
		const boxTile_45 = this.add.image(1345, 410, "box-tile");
		boxTileContainer.add(boxTile_45);

		// boxTile_46
		const boxTile_46 = this.add.image(1245, 410, "box-tile");
		boxTileContainer.add(boxTile_46);

		// boxTile_47
		const boxTile_47 = this.add.image(1145, 410, "box-tile");
		boxTileContainer.add(boxTile_47);

		// boxTile_49
		const boxTile_49 = this.add.image(945, 410, "box-tile");
		boxTileContainer.add(boxTile_49);

		// boxTile_50
		const boxTile_50 = this.add.image(845, 410, "box-tile");
		boxTileContainer.add(boxTile_50);

		// boxTile_51
		const boxTile_51 = this.add.image(745, 410, "box-tile");
		boxTileContainer.add(boxTile_51);

		// boxTile_52
		const boxTile_52 = this.add.image(445, 410, "box-tile");
		boxTileContainer.add(boxTile_52);

		// boxTile_53
		const boxTile_53 = this.add.image(545, 410, "box-tile");
		boxTileContainer.add(boxTile_53);

		// boxTile_54
		const boxTile_54 = this.add.image(645, 310, "box-tile");
		boxTileContainer.add(boxTile_54);

		// boxTile_57
		const boxTile_57 = this.add.image(1245, 310, "box-tile");
		boxTileContainer.add(boxTile_57);

		// boxTile_58
		const boxTile_58 = this.add.image(1145, 310, "box-tile");
		boxTileContainer.add(boxTile_58);

		// boxTile_59
		const boxTile_59 = this.add.image(1045, 310, "box-tile");
		boxTileContainer.add(boxTile_59);

		// boxTile_60
		const boxTile_60 = this.add.image(945, 310, "box-tile");
		boxTileContainer.add(boxTile_60);

		// boxTile_61
		const boxTile_61 = this.add.image(845, 310, "box-tile");
		boxTileContainer.add(boxTile_61);

		// boxTile_63
		const boxTile_63 = this.add.image(445, 310, "box-tile");
		boxTileContainer.add(boxTile_63);

		// boxTile_64
		const boxTile_64 = this.add.image(545, 310, "box-tile");
		boxTileContainer.add(boxTile_64);

		// colliderContainer
		const colliderContainer = this.add.container(0, 0);

		// rectangle
		const rectangle = this.add.rectangle(545, 865, 300, 10);
		rectangle.visible = false;
		rectangle.isFilled = true;
		colliderContainer.add(rectangle);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1045, 865, 500, 10);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		colliderContainer.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(695, 655, 400, 10);
		rectangle_2.visible = false;
		rectangle_2.isFilled = true;
		colliderContainer.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(695, 465, 400, 10);
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		colliderContainer.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(1045, 252, 500, 10);
		rectangle_4.visible = false;
		rectangle_4.isFilled = true;
		colliderContainer.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(545, 255, 300, 10);
		rectangle_5.visible = false;
		rectangle_5.isFilled = true;
		colliderContainer.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(1395, 355, 200, 10);
		rectangle_6.visible = false;
		rectangle_6.isFilled = true;
		colliderContainer.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(1295, 465, 200, 10);
		rectangle_7.visible = false;
		rectangle_7.isFilled = true;
		colliderContainer.add(rectangle_7);

		// rectangle_8
		const rectangle_8 = this.add.rectangle(1295, 655, 200, 10);
		rectangle_8.visible = false;
		rectangle_8.isFilled = true;
		colliderContainer.add(rectangle_8);

		// rectangle_9
		const rectangle_9 = this.add.rectangle(1395, 765, 200, 10);
		rectangle_9.visible = false;
		rectangle_9.isFilled = true;
		colliderContainer.add(rectangle_9);

		// rectangle_10
		const rectangle_10 = this.add.rectangle(745, 355, 100, 10);
		rectangle_10.visible = false;
		rectangle_10.isFilled = true;
		colliderContainer.add(rectangle_10);

		// rectangle_11
		const rectangle_11 = this.add.rectangle(745, 765, 100, 10);
		rectangle_11.visible = false;
		rectangle_11.isFilled = true;
		colliderContainer.add(rectangle_11);

		// rectangle_12
		const rectangle_12 = this.add.rectangle(500, 560, 10, 200);
		rectangle_12.visible = false;
		rectangle_12.isFilled = true;
		colliderContainer.add(rectangle_12);

		// rectangle_13
		const rectangle_13 = this.add.rectangle(890, 560, 10, 200);
		rectangle_13.visible = false;
		rectangle_13.isFilled = true;
		colliderContainer.add(rectangle_13);

		// rectangle_14
		const rectangle_14 = this.add.rectangle(1200, 560, 10, 200);
		rectangle_14.visible = false;
		rectangle_14.isFilled = true;
		colliderContainer.add(rectangle_14);

		// rectangle_15
		const rectangle_15 = this.add.rectangle(1390, 560, 10, 200);
		rectangle_15.visible = false;
		rectangle_15.isFilled = true;
		colliderContainer.add(rectangle_15);

		// rectangle_16
		const rectangle_16 = this.add.rectangle(1000, 560, 10, 400);
		rectangle_16.visible = false;
		rectangle_16.isFilled = true;
		colliderContainer.add(rectangle_16);

		// rectangle_17
		const rectangle_17 = this.add.rectangle(1090, 560, 10, 400);
		rectangle_17.visible = false;
		rectangle_17.isFilled = true;
		colliderContainer.add(rectangle_17);

		// rectangle_18
		const rectangle_18 = this.add.rectangle(1045, 365, 100, 10);
		rectangle_18.visible = false;
		rectangle_18.isFilled = true;
		colliderContainer.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(1045, 755, 100, 10);
		rectangle_19.visible = false;
		rectangle_19.isFilled = true;
		colliderContainer.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(390, 560, 10, 600);
		rectangle_20.visible = false;
		rectangle_20.isFilled = true;
		colliderContainer.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(1500, 560, 10, 400);
		rectangle_21.visible = false;
		rectangle_21.isFilled = true;
		colliderContainer.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(700, 310, 10, 100);
		rectangle_22.visible = false;
		rectangle_22.isFilled = true;
		colliderContainer.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(790, 310, 10, 100);
		rectangle_23.visible = false;
		rectangle_23.isFilled = true;
		colliderContainer.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(1300, 310, 10, 100);
		rectangle_24.visible = false;
		rectangle_24.isFilled = true;
		colliderContainer.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(700, 810, 10, 100);
		rectangle_25.visible = false;
		rectangle_25.isFilled = true;
		colliderContainer.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(790, 810, 10, 100);
		rectangle_26.visible = false;
		rectangle_26.isFilled = true;
		colliderContainer.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(1300, 810, 10, 100);
		rectangle_27.visible = false;
		rectangle_27.isFilled = true;
		colliderContainer.add(rectangle_27);

		// container_particles
		const container_particles = this.add.container(0, 0);

		// headerContainer
		const headerContainer = this.add.container(0, 0);

		// levelNumberText
		const levelNumberText = this.add.text(960, 100, "", {});
		levelNumberText.setOrigin(0.5, 0.5);
		levelNumberText.text = "LEVEL - 12";
		levelNumberText.setStyle({ "fontFamily": "Futura", "fontSize": "72px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
		headerContainer.add(levelNumberText);

		// timerText
		const timerText = this.add.text(960, 1000, "", {});
		timerText.setOrigin(0.5, 0.5);
		timerText.setStyle({ "fontFamily": "Futura", "fontSize": "60px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
		headerContainer.add(timerText);

		// character
		const character = this.add.image(445, 710, "character-without-eyes");

		// rightEye
		const rightEye = this.add.image(1445, 710, "character-eyeball");

		// leftEye
		const leftEye = this.add.image(1445, 710, "character-eyeball");

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

		let tempEndTime = Date.now() + this.oGameManager.levelTwelveTimer;
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
						this.popupPrefab.setLevel(12);
						this.popupPrefab.winContainer.setVisible(true);
						this.levelCompleted = true;
					}
				}
			}
		}
	}

	startLevelTimer() {
		if(!this.isTimerRunning && this.isTimerStarted) {
			this.endTime = Date.now() + this.oGameManager.levelTwelveTimer;
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
			this.popupPrefab.setLevel(12);
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
