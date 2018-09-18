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
	  const centerX = 768 / 2;
	  const centerY = 512 / 2;

	  const title = this.add.text(centerX, centerY * .8, "Tower Defense").setOrigin(.5,.5);
	  const campaignButton = this.add.text(centerX, centerY * 1, "Campaign Mode").setOrigin(.5,.5).setInteractive();
	  const endlessButton = this.add.text(centerX, centerY * 1.2, "Endless Mode").setOrigin(.5,.5).setInteractive();
	  // TODO this.add.image instead 

	  campaignButton.on("pointerdown", function(e){
	  	menuNumber = 0;
	  })

  	endlessButton.on("pointerdown", function(e){
	  	menuNumber = 1;
	  })

	}

	update(){
		if(menuNumber === 0){
			this.scene.start("CampaignMode");
		}
		else if(menuNumber === 1)
			this.scene.start("EndlessMode");
	}

}


