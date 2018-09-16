import { Scene } from 'phaser';

export default class EndlessMode extends Scene{
	// width: 800
	// height: 600
	constructor(){
		super({ key: "EndlessMode" });
	}

	preload() {
	  game.load.image('tiles', 'assets/tilemaps/terrain.png');
	}

	create() {
	  const centerX = 800 / 2;
	  const centerY = 600 / 2;
		

	}

	update(){
		console.log(menuNumber);
		if(menuNumber === 0){
			this.scene.start("CampaignMode");
		}
		else if(menuNumber === 1)
			this.scene.start("EndlessMode");
	}

}


