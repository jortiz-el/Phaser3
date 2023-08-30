const config = {
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config);

function preload(){

    //console.log("soy preload");
    // cargamos el sprite indicando un nombre interno, la ruta del sprite y un json indicando el alto y ancho del frame
    this.load.spritesheet('evil_tomato', './assets/evil_tomato.png', { frameWidth:16, frameHeight:25});

}

function create() {
    
    this.tomato = this.add.sprite (100, 100, 'evil_tomato', 0); // añadimos el sprite x, y , nombre del sprite y posicion del frame

    // creamos la animacion de caminar 
    this.anims.create({
        key: 'tomato_walk', // se definie el nombre interno de la animacion
        frames: this.anims.generateFrameNumbers('evil_tomato', {
            //frames: [1,2,3,4,5,6,7,8] // en el json puedo cargar los frames de 2 formas
            start: 1,
            end: 8
        }),
        repeat: -1, // indica la repeticion de la animacion. con -1 crea un bucle infinito
        frameRate: 10 // la velocidad en la que se ejecuta cada frame
    });

    // le decimos a la animacion que arranque con play
    this.tomato.anims.play('tomato_walk')

// console.log(this.anims.generateFrameNumbers('evil_tomato', {
//     frames: [1,2,3,4,5,6,7,8]
// }));

}