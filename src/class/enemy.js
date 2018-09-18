export default class Enemy extends Phaser.GameObjects.Image {
    constructor (scene, x, y, texture){
        super(scene, x, y, texture);
        this.hp = 100;
        this.speed = 2;
        this.currWaypoint = 0;
        this.setOrigin(0,0);
    }
}

Enemy.prototype.move = function(waypoints){
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
