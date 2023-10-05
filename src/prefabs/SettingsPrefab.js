
// You can write more code here

/* START OF COMPILED CODE */

class SettingsPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// infoIcon
		const infoIcon = scene.add.image(0, 0, "info");
		this.add(infoIcon);

		// musicIcon
		const musicIcon = scene.add.image(0, 0, "music");
		this.add(musicIcon);

		// soundIcon
		const soundIcon = scene.add.image(0, 0, "sound");
		this.add(soundIcon);

		// settingIcon
		const settingIcon = scene.add.image(0, 0, "setting");
		this.add(settingIcon);

		this.infoIcon = infoIcon;
		this.musicIcon = musicIcon;
		this.soundIcon = soundIcon;
		this.settingIcon = settingIcon;

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
		settingIcon.on('pointerover', () => this.pointerOver([settingIcon],1));
		settingIcon.on('pointerout', () => this.pointerOut([settingIcon],1));
		infoIcon.on('pointerover', () => this.pointerOver([infoIcon],1));
		infoIcon.on('pointerout', () => this.pointerOut([infoIcon],1));
		soundIcon.on('pointerover', () => this.pointerOver([soundIcon],1));
		soundIcon.on('pointerout', () => this.pointerOut([soundIcon],1));
		musicIcon.on('pointerover', () => this.pointerOver([musicIcon],1));
		musicIcon.on('pointerout', () => this.pointerOut([musicIcon],1));
		
		this.isSettingOpen = false;
		this.isMusicEnabled = true;
		this.isSoundEnabled = true;
		this.settingIcon.setInteractive().on('pointerdown', () => {
			if(!this.isSettingOpen) {
				this.openSettingDrawer();
				this.isSettingOpen = !this.isSettingOpen;
			}
			else {
				this.closeSettingDrawer();
				this.isSettingOpen = !this.isSettingOpen;
			}
		});
		this.infoIcon.setInteractive().on('pointerdown', () => {
			this.showInfo();
		});
		this.musicIcon.setInteractive().on('pointerdown', () => {
			this.toggleMusic();
		});
		this.soundIcon.setInteractive().on('pointerdown', () => {
			this.toggleSound();
		});
		this.oScene = scene;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	infoIcon;
	/** @type {Phaser.GameObjects.Image} */
	musicIcon;
	/** @type {Phaser.GameObjects.Image} */
	soundIcon;
	/** @type {Phaser.GameObjects.Image} */
	settingIcon;

	/* START-USER-CODE */

	// Write your code here.
	openSettingDrawer() {
		this.oScene.tweens.add({
			targets: this.settingIcon,
			scale: 0.85,
			yoyo: true,
			duration: 120,
		});
		this.oScene.tweens.add({
			targets: this.soundIcon,
			y: 105,
			duration: 240,
		});
		this.oScene.tweens.add({
			targets: this.musicIcon,
			y: 210,
			duration: 240,
		});
		this.oScene.tweens.add({
			targets: this.infoIcon,
			y: 315,
			duration: 240,
		});
	}

	closeSettingDrawer() {
		this.oScene.tweens.add({
			targets: this.settingIcon,
			scale: 0.85,
			yoyo: true,
			duration: 120,
		});
		this.oScene.tweens.add({
			targets: this.soundIcon,
			y: 0,
			duration: 240,
		});
		this.oScene.tweens.add({
			targets: this.musicIcon,
			y: 0,
			duration: 240,
		});
		this.oScene.tweens.add({
			targets: this.infoIcon,
			y: 0,
			duration: 240,
		});
	}

	showInfo() {
		this.oScene.tweens.add({
			targets: this.infoIcon,
			scale: 0.85,
			duration: 120,
			yoyo: true,
		});
	}

	toggleMusic() {
		this.oScene.tweens.add({
			targets: this.musicIcon,
			scale: 0.85,
			duration: 120,
			yoyo: true,
		});

		if(this.isMusicEnabled) {
			this.musicIcon.setTexture('music-off');
			this.isMusicEnabled = !this.isMusicEnabled;
		}
		else {
			this.musicIcon.setTexture('music');
			this.isMusicEnabled = !this.isMusicEnabled;
		}
	}

	toggleSound() {
		this.oScene.tweens.add({
			targets: this.soundIcon,
			scale: 0.85,
			duration: 120,
			yoyo: true,
		});

		if(this.isSoundEnabled) {
			this.soundIcon.setTexture('sound-off');
			this.isSoundEnabled = !this.isSoundEnabled;
		}
		else {
			this.soundIcon.setTexture('sound');
			this.isSoundEnabled = !this.isSoundEnabled;
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
