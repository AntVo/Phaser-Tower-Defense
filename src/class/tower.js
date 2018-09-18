export default class Tower extends Phaser.GameObjects.Image {
    constructor (scene, x, y, texture){
        super(scene, x, y, texture);
        this.damage = 5;
        this.range = 100;
        this.attackSpeed = 1;
        this.sockets = 1;
        this.numProjectiles = 1;
        this.placed = false;
        // overrides
        this.inputEnabled = true;
        this.currentlySelected = false;
        this.setInteractive();
        this.setOrigin(0,0);
    }


}

