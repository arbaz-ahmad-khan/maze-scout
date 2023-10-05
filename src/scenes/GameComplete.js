// You can write more code here

/* START OF COMPILED CODE */

class GameComplete extends Phaser.Scene {

	constructor() {
		super("GameComplete");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// black_layer
		this.add.image(960, 540, "black-layer");

		// bgContainer
		const bgContainer = this.add.container(960, 455);

		// pop_up
		const pop_up = this.add.image(0, 85, "pop-up");
		bgContainer.add(pop_up);

		// playerWin
		const playerWin = this.add.image(-6, 85, "playerWin");
		playerWin.scaleX = 0.8;
		playerWin.scaleY = 0.8;
		bgContainer.add(playerWin);

		// star
		const star = this.add.image(-206, 86, "star");
		bgContainer.add(star);

		// star_1
		const star_1 = this.add.image(190, 86, "star");
		bgContainer.add(star_1);

		// congratsText
		const congratsText = this.add.text(0, 83, "", {});
		congratsText.scaleX = 0;
		congratsText.scaleY = 0;
		congratsText.setOrigin(0.5, 0.5);
		congratsText.text = "CONGRATULATIONS!";
		congratsText.setStyle({ "color": "#ca5a2c", "fontFamily": "Futura", "fontSize": "56px", "fontStyle": "bold", "shadow.blur":2});
		bgContainer.add(congratsText);

		// infoText
		const infoText = this.add.text(0, 288, "", {});
		infoText.scaleX = 0;
		infoText.scaleY = 0;
		infoText.setOrigin(0.5, 0.5);
		infoText.text = "YOU HAVE COMPLETED\nALL THE LEVELS!";
		infoText.setStyle({ "align": "center", "fixedWidth":560,"fixedHeight":200,"fontFamily": "Futura", "fontSize": "40px", "fontStyle": "bold", "shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
		infoText.setWordWrapWidth(555);
		bgContainer.add(infoText);

		// homeBtn
		const homeBtn = this.add.image(0, 378, "home-btn");
		bgContainer.add(homeBtn);

		this.congratsText = congratsText;
		this.infoText = infoText;
		this.homeBtn = homeBtn;
		this.bgContainer = bgContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	congratsText;
	/** @type {Phaser.GameObjects.Text} */
	infoText;
	/** @type {Phaser.GameObjects.Image} */
	homeBtn;
	/** @type {Phaser.GameObjects.Container} */
	bgContainer;

	/* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.gameCompleteAnimation();
    this.startConfettiAnimation();

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
		this.homeBtn.on('pointerover', () => this.pointerOver([this.homeBtn],1));
		this.homeBtn.on('pointerout', () => this.pointerOut([this.homeBtn],1));

    this.homeBtn.setInteractive().on('pointerdown', () => {
      this.tweens.add({
        targets: this.homeBtn,
        scaleX: 0.9,
        scaleY: 0.9,
        duration: 80,
        yoyo: true,
        onComplete: () => {
          clearInterval(this.interval);
          this.scene.start("Home");
        }
      });
    });
  }

  gameCompleteAnimation() {
    this.tweens.add({
      targets: this.bgContainer,
      scaleX: 1,
      scaleY: 1,
      duration: 200,
      onComplete: () => {
        this.tweens.add({
          targets: this.congratsText,
          scaleX: 1,
          scaleY: 1,
          duration: 600,
          delay: 180,
          onComplete: () => {
            this.tweens.add({
              targets: this.congratsText,
              y: -50,
              duration: 400,
              onComplete: () => {
                this.tweens.add({
                  targets: this.infoText,
                  scaleX: 1,
                  scaleY: 1,
                  duration: 600,
                  delay: 180
                })
              }
            })
          }
        })
      }
    });
  }

  startConfettiAnimation() {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    this.interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
