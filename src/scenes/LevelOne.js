
// You can write more code here

/* START OF COMPILED CODE */

class LevelOne extends Phaser.Scene {

	constructor() {
		super("LevelOne");

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

		// colliderContainer
		const colliderContainer = this.add.container(0, 0);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(590, 865, 100, 10);
		rectangle_24.visible = false;
		rectangle_24.isFilled = true;
		colliderContainer.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(1290, 255, 100, 10);
		rectangle_25.visible = false;
		rectangle_25.isFilled = true;
		colliderContainer.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(535, 555, 10, 600);
		rectangle_26.visible = false;
		rectangle_26.isFilled = true;
		colliderContainer.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(645, 610, 10, 500);
		rectangle_27.visible = false;
		rectangle_27.isFilled = true;
		colliderContainer.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(740, 365, 200, 10);
		rectangle_28.visible = false;
		rectangle_28.isFilled = true;
		colliderContainer.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(740, 255, 400, 10);
		rectangle_29.visible = false;
		rectangle_29.isFilled = true;
		colliderContainer.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(945, 410, 10, 300);
		rectangle_30.visible = false;
		rectangle_30.isFilled = true;
		colliderContainer.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(835, 510, 10, 300);
		rectangle_31.visible = false;
		rectangle_31.isFilled = true;
		colliderContainer.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(1090, 555, 300, 10);
		rectangle_32.visible = false;
		rectangle_32.isFilled = true;
		colliderContainer.add(rectangle_32);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(1090, 665, 500, 10);
		rectangle_33.visible = false;
		rectangle_33.isFilled = true;
		colliderContainer.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(1235, 410, 10, 300);
		rectangle_34.visible = false;
		rectangle_34.isFilled = true;
		colliderContainer.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(1345, 460, 10, 400);
		rectangle_35.visible = false;
		rectangle_35.isFilled = true;
		colliderContainer.add(rectangle_35);

		// boxTileContainer
		const boxTileContainer = this.add.container(0, 0);

		// boxTile
		const boxTile = this.add.image(590, 810, "box-tile");
		boxTileContainer.add(boxTile);

		// boxTile_21
		const boxTile_21 = this.add.image(1290, 410, "box-tile");
		boxTileContainer.add(boxTile_21);

		// boxTile_23
		const boxTile_23 = this.add.image(1290, 610, "box-tile");
		boxTileContainer.add(boxTile_23);

		// boxTile_25
		const boxTile_25 = this.add.image(1290, 310, "box-tile");
		boxTileContainer.add(boxTile_25);

		// boxTile_29
		const boxTile_29 = this.add.image(1290, 510, "box-tile");
		boxTileContainer.add(boxTile_29);

		// boxTile_1
		const boxTile_1 = this.add.image(590, 710, "box-tile");
		boxTileContainer.add(boxTile_1);

		// boxTile_2
		const boxTile_2 = this.add.image(590, 610, "box-tile");
		boxTileContainer.add(boxTile_2);

		// boxTile_3
		const boxTile_3 = this.add.image(590, 510, "box-tile");
		boxTileContainer.add(boxTile_3);

		// boxTile_4
		const boxTile_4 = this.add.image(590, 410, "box-tile");
		boxTileContainer.add(boxTile_4);

		// boxTile_5
		const boxTile_5 = this.add.image(590, 310, "box-tile");
		boxTileContainer.add(boxTile_5);

		// boxTile_6
		const boxTile_6 = this.add.image(690, 310, "box-tile");
		boxTileContainer.add(boxTile_6);

		// boxTile_7
		const boxTile_7 = this.add.image(790, 310, "box-tile");
		boxTileContainer.add(boxTile_7);

		// boxTile_8
		const boxTile_8 = this.add.image(890, 310, "box-tile");
		boxTileContainer.add(boxTile_8);

		// boxTile_9
		const boxTile_9 = this.add.image(890, 410, "box-tile");
		boxTileContainer.add(boxTile_9);

		// boxTile_10
		const boxTile_10 = this.add.image(890, 510, "box-tile");
		boxTileContainer.add(boxTile_10);

		// boxTile_11
		const boxTile_11 = this.add.image(890, 610, "box-tile");
		boxTileContainer.add(boxTile_11);

		// boxTile_12
		const boxTile_12 = this.add.image(990, 610, "box-tile");
		boxTileContainer.add(boxTile_12);

		// boxTile_13
		const boxTile_13 = this.add.image(1090, 610, "box-tile");
		boxTileContainer.add(boxTile_13);

		// boxTile_14
		const boxTile_14 = this.add.image(1190, 610, "box-tile");
		boxTileContainer.add(boxTile_14);

		// container_particles
		const container_particles = this.add.container(0, -1);

		// headerContainer
		const headerContainer = this.add.container(0, 1);

		// levelNumberText
		const levelNumberText = this.add.text(960, 100, "", {});
		levelNumberText.setOrigin(0.5, 0.5);
		levelNumberText.text = "LEVEL - 1";
		levelNumberText.setStyle({ "fontFamily": "Futura", "fontSize": "72px", "fontStyle": "bold", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.color": "#000000ff", "shadow.stroke": true, "shadow.fill": true });
		headerContainer.add(levelNumberText);

		// timerText
		const timerText = this.add.text(960, 1000, "", {});
		timerText.setOrigin(0.5, 0.5);
		timerText.setStyle({ "fontFamily": "Futura", "fontSize": "60px", "fontStyle": "bold", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.color": "#000000ff", "shadow.stroke": true, "shadow.fill": true });
		headerContainer.add(timerText);

		// character
		const character = this.add.image(590, 810, "character-without-eyes");

		// leftEye
		const leftEye = this.add.image(575, 787, "character-eyeball");

		// rightEye
		const rightEye = this.add.image(607, 787, "character-eyeball");

		// settingsPrefab
		const settingsPrefab = new SettingsPrefab(this, 1560, 250);
		this.add.existing(settingsPrefab);
		settingsPrefab.scaleX = 0.8;
		settingsPrefab.scaleY = 0.8;
		settingsPrefab.visible = true;

		// blackLayer
		const blackLayer = this.add.image(960, 540, "black-layer");
		blackLayer.visible = false;

		this.colliderContainer = colliderContainer;
		this.boxTileContainer = boxTileContainer;
		this.container_particles = container_particles;
		this.timerText = timerText;
		this.character = character;
		this.leftEye = leftEye;
		this.rightEye = rightEye;
		this.settingsPrefab = settingsPrefab;
		this.blackLayer = blackLayer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	colliderContainer;
	/** @type {Phaser.GameObjects.Container} */
	boxTileContainer;
	/** @type {Phaser.GameObjects.Container} */
	container_particles;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Image} */
	character;
	/** @type {Phaser.GameObjects.Image} */
	leftEye;
	/** @type {Phaser.GameObjects.Image} */
	rightEye;
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
		this.levelCompleted = false;
		const leftEyeRotationRadius = 5;
		const rightEyeRotationRadius = 5;
		const rotationSpeed = 0.003;
		this.leftEyeRotationRadius = leftEyeRotationRadius;
		this.rightEyeRotationRadius = rightEyeRotationRadius;
		this.rotationSpeed = rotationSpeed;

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
			speed: 60,
			lifespan: 100,
			frequency: 24,
			quantity: 1
		});
		this.emitter.setGravityY(20);

		let tempEndTime = Date.now() + this.oGameManager.levelOneTimer;
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
						this.popupPrefab.setLevel(1);
						clearInterval(this.interval);
						this.popupPrefab.winContainer.setVisible(true);
						this.levelCompleted = true;
					}
				}
			}
		}
	}

	startLevelTimer() {
		if (!this.isTimerRunning && this.isTimerStarted) {
			this.endTime = Date.now() + this.oGameManager.levelOneTimer;
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
			return; // Stop the timer
		}
		let currentTime = Date.now();
		let remainingTime = this.endTime - currentTime;

		if (remainingTime <= 0) {
			this.timerText.setText('Time Left: 0:00');
			this.cursorsEnabled = false;
			this.isPopup = true;
			this.blackLayer.setVisible(true);
			this.popupPrefab = new PopupPrefab(this, 960, 540);
			this.popupPrefab.setLevel(1);
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
		this.leftEye.setPosition((leftEyeX) - 20, (leftEyeY) - 23);

		const rightEyeX = this.character.x + this.rightEyeRotationRadius * Math.cos(currentTime * this.rotationSpeed);
		const rightEyeY = this.character.y + this.rightEyeRotationRadius * Math.sin(currentTime * this.rotationSpeed);
		this.rightEye.setPosition((rightEyeX) + 20, (rightEyeY) - 23);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
