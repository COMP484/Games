/* setting up our game asthetics and important functionalities*/
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },// end of physics
    scene: {
        preload: preload,
        create: create,
        update: update,

        extend: {
            makePlayer: makePlayer
        }// end of extend

    }// end of scene

};//end of config

//creating variables for the game : player, leftkey and rightkey
var game = new Phaser.Game(config);
var player;
var leftKey;
var rightKey;

/*  where we load in external files (or “assets”)*/
function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');
    //this.load.image('sky', 'assets/skies/space3.png');

    /* creating the sprite image of the ship in the preaload */
    this.load.image('player', 'assets/Ship.png');
    // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    // this.load.image('red', 'assets/particles/red.png');
}

/* where we define the GameObjects that are necessary at the start of our game*/
function create()
{
    /*this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);*/

    //ssetting the left key and right key
    player = this.makePlayer(this.sys.canvas.width / 2, this.sys.canvas.height);
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.keyCodes.LEFT);
    rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
}
/* where we define animation and interaction in our game  */
function update() {
    // making th fucntionality of the keybords to work
    if( rightKey.isDown && player.x < this.sys.canvas.width - player.displayWidth * player.originX){
        player.x += 5;

    } else if (leftKey.isDown){
        player.x += 5;
    }
}
//placing a player at (x,y) position
function makePlayer(x,y){
    var player = this.add.image(x,y, 'player').setOrigin(0.5,1);
    return player;
}