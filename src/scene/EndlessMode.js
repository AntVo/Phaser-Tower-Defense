import { Scene } from 'phaser';

import terrain from '../assets/tilemaps/terrain.png';
import terrain2 from '../assets/tilemaps/terrain_2.png';
import monster1 from '../assets/monsters/monster1.png';
import tower from '../assets/towers/tower_3_32x.png';
import tree_button from '../assets/other/tree_icon.png';

import endlessMap from '../assets/maps/endlessMap';
import Enemy from '../class/enemy';
import Tower from '../class/tower';

// variables
const waypoints = {
	//init x: 135, y:0
	x: [128, 512, 512, 128, 128, 512, 512],
	y: [96, 96, 256, 256, 416, 416, 460]
}
const inventory = [];
let currentlySelectedObject = -1;


export default class EndlessMode extends Scene{
	constructor(){
		super({ key: "EndlessMode" });
	}

	preload() {
	  var mapTiles = this.load.image('mapTiles', terrain2);
	  this.load.image('enemy', monster1);
	  this.load.image('tower', tower)
	  this.load.image('tree_button', tree_button);
	}

	create() {
		// Map stuff
		const map = this.make.tilemap({ data: endlessMap, tileWidth: 32, tileHeight: 32 });
		const tiles = map.addTilesetImage("mapTiles");
		const mapLayer = map.createDynamicLayer(0, tiles, 0, 0);

		//Enemy
		this.enemies = this.physics.add.group();
		for (var i = 0; i < 10; i++){
			const enemy = new Enemy(this, 128, 0, 'enemy');
			this.enemies.add(enemy);
			this.add.existing(enemy);
		}

		//Towers
		this.towers = this.add.group();
		const tower = new Tower (this, 640, 128, 'tower');
		this.towers.add(tower);
		this.add.existing(tower);
		inventory.push(tower);

		//Event Listeners
		this.input.on('gameobjectdown', this.onObjectClickedDown);
		this.input.on('gameobjectup', this.onObjectPlace);

		//Skill Tree Button
		this.tree_button = this.add.image(32,478,'tree_button').setInteractive();
		this.tree_button.scaleX = .08; this.tree_button.scaleY = .08;
		this.tree_button.on('pointerdown', this.changeToTreeScene.bind(this));

		// Debugging
	}

	update(){

			// Move enemies
			this.enemies.getChildren().forEach((enemy) => {
				enemy.move(waypoints);
			})

			// if an item is selected have image follow
			if (currentlySelectedObject !== -1){
				currentlySelectedObject.x = this.input.activePointer.position.x;
			  currentlySelectedObject.y = this.input.activePointer.position.y;
			}
	}

	onObjectClickedDown(pointer, gameObject){
		if(gameObject instanceof Tower)
			currentlySelectedObject = gameObject;
	}

	onObjectPlace(pointer, gameObject){
		if(gameObject instanceof Tower){
			currentlySelectedObject = -1;
		  gameObject.disableInteractive();
		}
	}
	changeToTreeScene(){
		this.scene.switch("SkillTree")
	}

}


