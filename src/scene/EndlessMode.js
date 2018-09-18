import { Scene } from 'phaser';
import terrain from '../assets/tilemaps/terrain.png';
import terrain2 from '../assets/tilemaps/terrain_2.png';
import monster1 from '../assets/monsters/monster1.png';
import endlessMap from '../assets/maps/endlessMap';

// variables
const waypoints = {
	//init x: 135, y:0
	x: [135, 495, 495, 135, 135, 495, 495],
	y: [100, 100, 250, 250, 400, 400, 460]
}

class Enemy extends Phaser.GameObjects.Image {
    constructor (scene, x, y, texture){
        super(scene, x, y, texture);
        this.hp = 100;
        this.speed = 2;
        this.scaleX = .1;
        this.scaleY = .1;
        this.currWaypoint = 0;
    }
}



Enemy.prototype.move = function(){
	var dx = waypoints.x[this.currWaypoint] - this.x
	var dy = waypoints.y[this.currWaypoint] - this.y;
	if (dy > 0)
		this.y += this.speed;
	else if (dy < 0)
		this.y -= this.speed;
	if (dx > 0)
		this.x += this.speed;
	else if (dx < 0)
		this.x -= this.speed;
	if (dx == 0 && dy == 0)
		this.currWaypoint++;
}


export default class EndlessMode extends Scene{
	constructor(){
		super({ key: "EndlessMode" });
	}

	preload() {
	  var mapTiles = this.load.image('mapTiles', terrain2);
	  this.load.image('enemy', monster1);
	}

	create() {
		// Map stuff
		const map = this.make.tilemap({ data: endlessMap, tileWidth: 32, tileHeight: 32 });
		const tiles = map.addTilesetImage("mapTiles");
		const mapLayer = map.createDynamicLayer(0, tiles, 0, 0);
		// Path stuff
		

		//Enemy
		this.enemies = this.physics.add.group();
		for (var i = 0; i < 10; i++){
			const enemy = new Enemy(this, 135, 0, 'enemy');
			this.enemies.add(enemy);
			this.add.existing(enemy);
		}
		// Debugging
		console.log(this.add.displayList.list, 0, 0, 'monster1');
	}

	update(){
			this.enemies.getChildren().forEach((enemy) => {
				enemy.move();
			})

	}

}


