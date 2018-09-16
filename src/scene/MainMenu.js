import { Scene } from 'phaser';
import introImage from '../img/study.png';
let menuNumber = -1;

export default class MainMenu extends Scene{

	constructor(){
		super({ key: "MainMenu" });
	}

	preload() {
	  this.load.image('study', introImage);
	}

	create() {
	  const centerX = 800 / 2;
	  const centerY = 600 / 2;

	  const title = this.add.text(centerX, centerY * .8, "Tower Defense");
	  const campaignButton = this.add.text(centerX, centerY * 1, "Campaign Mode").setInteractive();
	  const endlessButton = this.add.text(centerX, centerY * 1.2, "Endless Mode").setInteractive();
	  // TODO this.add.image instead 

	  campaignButton.on("pointerdown", function(e){
	  	menuNumber = 0;
	  })

  	endlessButton.on("pointerdown", function(e){
	  	menuNumber = 1;
	  })

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


