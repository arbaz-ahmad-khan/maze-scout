
// You can write more code here

/* START OF COMPILED CODE */

class LevelSeven extends Phaser.Scene {

	constructor() {
		super("LevelSeven");

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

		// rectangle_18
		const rectangle_18 = this.add.rectangle(940, 865, 800, 10);
		rectangle_18.visible = false;
		rectangle_18.isFilled = true;
		colliderContainer.add(rectangle_18);

		// rectangle_19
		const rectangle_19 = this.add.rectangle(535, 560, 10, 600);
		rectangle_19.visible = false;
		rectangle_19.isFilled = true;
		colliderContainer.add(rectangle_19);

		// rectangle_20
		const rectangle_20 = this.add.rectangle(690, 455, 100, 10);
		rectangle_20.visible = false;
		rectangle_20.isFilled = true;
		colliderContainer.add(rectangle_20);

		// rectangle_21
		const rectangle_21 = this.add.rectangle(1345, 560, 10, 600);
		rectangle_21.visible = false;
		rectangle_21.isFilled = true;
		colliderContainer.add(rectangle_21);

		// rectangle_22
		const rectangle_22 = this.add.rectangle(1190, 455, 100, 10);
		rectangle_22.visible = false;
		rectangle_22.isFilled = true;
		colliderContainer.add(rectangle_22);

		// rectangle_23
		const rectangle_23 = this.add.rectangle(690, 365, 100, 10);
		rectangle_23.visible = false;
		rectangle_23.isFilled = true;
		colliderContainer.add(rectangle_23);

		// rectangle_24
		const rectangle_24 = this.add.rectangle(1190, 365, 100, 10);
		rectangle_24.visible = false;
		rectangle_24.isFilled = true;
		colliderContainer.add(rectangle_24);

		// rectangle_25
		const rectangle_25 = this.add.rectangle(1145, 410, 10, 100);
		rectangle_25.visible = false;
		rectangle_25.isFilled = true;
		colliderContainer.add(rectangle_25);

		// rectangle_26
		const rectangle_26 = this.add.rectangle(1235, 410, 10, 100);
		rectangle_26.visible = false;
		rectangle_26.isFilled = true;
		colliderContainer.add(rectangle_26);

		// rectangle_27
		const rectangle_27 = this.add.rectangle(645, 410, 10, 100);
		rectangle_27.visible = false;
		rectangle_27.isFilled = true;
		colliderContainer.add(rectangle_27);

		// rectangle_28
		const rectangle_28 = this.add.rectangle(735, 410, 10, 100);
		rectangle_28.visible = false;
		rectangle_28.isFilled = true;
		colliderContainer.add(rectangle_28);

		// rectangle_29
		const rectangle_29 = this.add.rectangle(845, 360, 10, 200);
		rectangle_29.visible = false;
		rectangle_29.isFilled = true;
		colliderContainer.add(rectangle_29);

		// rectangle_30
		const rectangle_30 = this.add.rectangle(1035, 360, 10, 200);
		rectangle_30.visible = false;
		rectangle_30.isFilled = true;
		colliderContainer.add(rectangle_30);

		// rectangle_31
		const rectangle_31 = this.add.rectangle(940, 455, 200, 10);
		rectangle_31.visible = false;
		rectangle_31.isFilled = true;
		colliderContainer.add(rectangle_31);

		// rectangle_32
		const rectangle_32 = this.add.rectangle(690, 255, 300, 10);
		rectangle_32.visible = false;
		rectangle_32.isFilled = true;
		colliderContainer.add(rectangle_32);

		// rectangle_33
		const rectangle_33 = this.add.rectangle(1190, 255, 300, 10);
		rectangle_33.visible = false;
		rectangle_33.isFilled = true;
		colliderContainer.add(rectangle_33);

		// rectangle_34
		const rectangle_34 = this.add.rectangle(940, 755, 600, 10);
		rectangle_34.visible = false;
		rectangle_34.isFilled = true;
		colliderContainer.add(rectangle_34);

		// rectangle_35
		const rectangle_35 = this.add.rectangle(940, 565, 600, 10);
		rectangle_35.visible = false;
		rectangle_35.isFilled = true;
		colliderContainer.add(rectangle_35);

		// rectangle_36
		const rectangle_36 = this.add.rectangle(645, 660, 10, 200);
		rectangle_36.visible = false;
		rectangle_36.isFilled = true;
		colliderContainer.add(rectangle_36);

		// rectangle_37
		const rectangle_37 = this.add.rectangle(1235, 660, 10, 200);
		rectangle_37.visible = false;
		rectangle_37.isFilled = true;
		colliderContainer.add(rectangle_37);

		// boxTileContainer
		const boxTileContainer = this.add.container(0, 0);

		// boxTile_17
		const boxTile_17 = this.add.image(690, 810, "box-tile");
		boxTileContainer.add(boxTile_17);

		// boxTile_18
		const boxTile_18 = this.add.image(590, 810, "box-tile");
		boxTileContainer.add(boxTile_18);

		// boxTile1
		const boxTile1 = this.add.image(590, 710, "box-tile");
		boxTileContainer.add(boxTile1);

		// boxTile_30
		const boxTile_30 = this.add.image(790, 810, "box-tile");
		boxTileContainer.add(boxTile_30);

		// boxTile_31
		const boxTile_31 = this.add.image(890, 810, "box-tile");
		boxTileContainer.add(boxTile_31);

		// boxTile_32
		const boxTile_32 = this.add.image(990, 810, "box-tile");
		boxTileContainer.add(boxTile_32);

		// boxTile_33
		const boxTile_33 = this.add.image(1090, 810, "box-tile");
		boxTileContainer.add(boxTile_33);

		// boxTile_34
		const boxTile_34 = this.add.image(1190, 810, "box-tile");
		boxTileContainer.add(boxTile_34);

		// boxTile_35
		const boxTile_35 = this.add.image(1290, 810, "box-tile");
		boxTileContainer.add(boxTile_35);

		// boxTile_36
		const boxTile_36 = this.add.image(590, 610, "box-tile");
		boxTileContainer.add(boxTile_36);

		// boxTile_37
		const boxTile_37 = this.add.image(590, 510, "box-tile");
		boxTileContainer.add(boxTile_37);

		// boxTile_38
		const boxTile_38 = this.add.image(590, 410, "box-tile");
		boxTileContainer.add(boxTile_38);

		// boxTile_39
		const boxTile_39 = this.add.image(590, 310, "box-tile");
		boxTileContainer.add(boxTile_39);

		// boxTile_40
		const boxTile_40 = this.add.image(690, 310, "box-tile");
		boxTileContainer.add(boxTile_40);

		// boxTile_41
		const boxTile_41 = this.add.image(790, 310, "box-tile");
		boxTileContainer.add(boxTile_41);

		// boxTile_42
		const boxTile_42 = this.add.image(790, 410, "box-tile");
		boxTileContainer.add(boxTile_42);

		// boxTile_43
		const boxTile_43 = this.add.image(790, 510, "box-tile");
		boxTileContainer.add(boxTile_43);

		// boxTile_44
		const boxTile_44 = this.add.image(690, 510, "box-tile");
		boxTileContainer.add(boxTile_44);

		// boxTile_45
		const boxTile_45 = this.add.image(890, 510, "box-tile");
		boxTileContainer.add(boxTile_45);

		// boxTile_46
		const boxTile_46 = this.add.image(1290, 710, "box-tile");
		boxTileContainer.add(boxTile_46);

		// boxTile_47
		const boxTile_47 = this.add.image(1290, 610, "box-tile");
		boxTileContainer.add(boxTile_47);

		// boxTile_48
		const boxTile_48 = this.add.image(1290, 510, "box-tile");
		boxTileContainer.add(boxTile_48);

		// boxTile_49
		const boxTile_49 = this.add.image(1290, 410, "box-tile");
		boxTileContainer.add(boxTile_49);

		// boxTile_50
		const boxTile_50 = this.add.image(1290, 310, "box-tile");
		boxTileContainer.add(boxTile_50);

		// boxTile_51
		const boxTile_51 = this.add.image(1190, 310, "box-tile");
		boxTileContainer.add(boxTile_51);

		// boxTile_52
		const boxTile_52 = this.add.image(1090, 310, "box-tile");
		boxTileContainer.add(boxTile_52);

		// boxTile_53
		const boxTile_53 = this.add.image(1090, 410, "box-tile");
		boxTileContainer.add(boxTile_53);

		// boxTile_54
		const boxTile_54 = this.add.image(1090, 510, "box-tile");
		boxTileContainer.add(boxTile_54);

		// boxTile_55
		const boxTile_55 = this.add.image(1190, 510, "box-tile");
		boxTileContainer.add(boxTile_55);

		// boxTile_56
		const boxTile_56 = this.add.image(990, 510, "box-tile");
		boxTileContainer.add(boxTile_56);

		// container_particles
		const container_particles = this.add.container(0, 0);

		// headerContainer
		const headerContainer = this.add.container(0, 0);

		// levelNumberText
		const levelNumberText = this.add.text(960, 100, "", {});
		levelNumberText.setOrigin(0.5, 0.5);
		levelNumberText.text = "LEVEL - 7";
		levelNumberText.setStyle({ "fontFamily": "Futura", "fontSize": "72px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
		headerContainer.add(levelNumberText);

		// timerText
		const timerText = this.add.text(960, 1000, "", {});
		timerText.setOrigin(0.5, 0.5);
		timerText.setStyle({ "fontFamily": "Futura", "fontSize": "60px", "fontStyle": "bold", "shadow.offsetX":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true,"shadow.fill":true});
		headerContainer.add(timerText);

		// character
		const character = this.add.image(590, 810, "character-without-eyes");

		// rightEye
		const rightEye = this.add.image(590, 810, "character-eyeball");

		// leftEye
		const leftEye = this.add.image(590, 810, "character-eyeball");

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
		this.rightEye = rightEye;
		this.leftEye = leftEye;
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

		let tempEndTime = Date.now() + this.oGameManager.levelSevenTimer;
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
						this.popupPrefab.setLevel(7);
						this.popupPrefab.winContainer.setVisible(true);
						this.levelCompleted = true;
					}
				}
			}
		}
	}

	startLevelTimer() {
		if(!this.isTimerRunning && this.isTimerStarted) {
			this.endTime = Date.now() + this.oGameManager.levelSevenTimer;
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
			this.popupPrefab.setLevel(7);
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
