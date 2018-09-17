import { Scene } from 'phaser';
import terrain from '../assets/tilemaps/terrain.png';
import monster1 from '../assets/monsters/monster1.png';
import endlessMap from '../assets/maps/endlessMap';

// variables
const waypoints = {
	x: [135, 135, 495, 495, 135, 135, 495, 495],
	y: [0, 100, 100, 250, 250, 400, 400, 550]
}

class Enemy extends Phaser.GameObjects.Image {
    constructor (scene, x, y, texture){
        super(scene, x, y, texture);
        this.hp = 100;
        this.speed = .002;
        this.scaleX = .1;
        this.scaleY = .1;
        this.percentPathTraveled = 0;
    }
}
Enemy.prototype.move = function(newX, newY ){
	this.x = newX
	this.y = newY
}


export default class EndlessMode extends Scene{
	constructor(){
		super({ key: "EndlessMode" });
	}

	preload() {
	  this.load.image('mapTiles', terrain);
	  this.load.image('enemy', monster1);
	}

	create() {
		// Map stuff
		const map = this.make.tilemap({ data: endlessMap, tileWidth: 30, tileHeight: 30 });
		const tiles = map.addTilesetImage("mapTiles");
		const layer = map.createStaticLayer(0, tiles, 0, 0);

		// Path stuff
		

		//Enemy
		this.enemies = this.physics.add.group();
		for (var i = 0; i < 10; i++){
			const enemy = new Enemy(this, 140, 0, 'enemy');
			this.enemies.add(enemy);
			this.add.existing(enemy);
		}
		// Debugging
		console.log(this.add.displayList.list, 0, 0, 'monster1');
	}

	update(){
			this.enemies.getChildren().forEach((enemy) => {
				var px = Phaser.Math.Interpolation.Linear(waypoints.x, enemy.percentPathTraveled);
				var py = Phaser.Math.Interpolation.Linear(waypoints.y, enemy.percentPathTraveled);
				enemy.x = px;
				enemy.y = py;
				enemy.percentPathTraveled += enemy.speed;
			})
	}

}


