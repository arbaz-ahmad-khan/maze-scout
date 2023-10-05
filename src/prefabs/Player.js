
// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// character
		const character = scene.add.image(0, 0, "character-without-eyes");
		this.add(character);

		// leftEye
		const leftEye = scene.add.image(-21, -21, "character-eyeball");
		this.add(leftEye);

		// rightEye
		const rightEye = scene.add.image(21, -20, "character-eyeball");
		this.add(rightEye);

		this.character = character;
		this.leftEye = leftEye;
		this.rightEye = rightEye;

		/* START-USER-CTR-CODE */
		// Write your code here.



		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	character;
	/** @type {Phaser.GameObjects.Image} */
	leftEye;
	/** @type {Phaser.GameObjects.Image} */
	rightEye;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
