// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 540, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// logo
		this.add.image(960, 540, "logo");

		// playBtn
		const playBtn = this.add.image(960, 940, "play-btn");
		playBtn.visible = false;

		// progress (components)
		new PreloadText(progress);

		this.playBtn = playBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	playBtn;

	/* START-USER-CODE */

  // Write your code here

  preload() {
    this.editorCreate();
    this.editorPreload();

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

    this.outerBar = this.add.sprite(960, 1009, "outer-bar");
    this.outerBar.setOrigin(0.5);

    this.innerBar = this.add.sprite(
      this.outerBar.x - this.outerBar.displayWidth / 2 + 7,
      this.outerBar.y,
      "inner-bar"
    );
    this.innerBar.setOrigin(0, 0.5);

    this.innerBarWidth = this.innerBar.displayWidth;

    this.maskGraphics = this.make.graphics();
    this.maskGraphics.fillStyle(0xffffff);
    this.maskGraphics.fillRect(
      this.innerBar.x,
      this.innerBar.y - this.innerBar.displayHeight / 2,
      this.innerBar.displayWidth,
      this.innerBar.displayHeight
    );

    this.innerBar.setMask(this.maskGraphics.createGeometryMask());

    const loadingDuration = 3000;
    const intervalDuration = 30;
    const numIntervals = loadingDuration / intervalDuration;
    let currentInterval = 0;
    const progressIncrement = 1 / numIntervals;

    const updateProgressBar = () => {
      const currentProgress = currentInterval * progressIncrement;
      this.maskGraphics.clear();
      this.maskGraphics.fillStyle(0xffffff);
      this.maskGraphics.fillRect(
        this.innerBar.x,
        this.innerBar.y - this.innerBar.displayHeight / 2,
        this.innerBarWidth * currentProgress,
        this.innerBar.displayHeight
      );

      currentInterval++;

      if (currentProgress >= 1) {
        clearInterval(progressInterval);
        this.innerBar.setVisible(false);
        this.outerBar.setVisible(false);
        setTimeout(() => {
          this.playBtn.setVisible(true);
        }, 100);
      }
    };

    const progressInterval = setInterval(updateProgressBar, intervalDuration);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
