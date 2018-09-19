import { Scene } from 'phaser';

export default class MainMenu extends Scene{

	constructor(){
		super({ key: "SkillTree" });
	}

	preload() {
	  // this.load.image('study', introImage);
	}

	create() {
	  const centerX = 768 / 2;
	  const centerY = 512 / 2;
	  const that = this;
	  const title = this.add.text(centerX, centerY * .8, "Tower Defense").setOrigin(.5,.5);
	  const campaignButton = this.add.text(centerX, centerY * 1, "Campaign Mode").setOrigin(.5,.5).setInteractive();
	  const endlessButton = this.add.text(centerX, centerY * 1.2, "Endless Mode").setOrigin(.5,.5).setInteractive();
	  // TODO this.add.image instead 

	}

	update(){
	}

}


