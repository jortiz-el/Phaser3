const config = {
    width:320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity:{
               // y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image("pajaro","./assets/bird.png"); // 2parametros -  1.nombre interno de la imagen , 2.ruta de la imagen 
    this.load.image("pajaro2","./assets/bird_dos.png");
}

function create() {
    console.log(Phaser.Input.Keyboard.KeyCodes);
    this.pajaro = this.physics.add.image(50,100,"pajaro");// 3parametros -  1.eje x , 2.eje y , 3. nombre imagen 
    // //1.asignar el pulso de teclado para ejecutar funcion 
    // this.input.keyboard.on("keydown-RIGHT", () => {
    //     //this.pajaro.x ++;
    //     this.pajaro.setAcceleration(100,0);
    // });

    // this.input.keyboard.on("keyup-RIGHT", () => {
    //     //al lavantar el teclado de establece la velocidad a 0 para que deje de moverse
    //     this.pajaro.setAcceleration(0,0);
    //     this.pajaro.setVelocity(0);
    // });

    //2. asignar pulso de teclas por cursor flechas
    this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor);

}

function update(time, delta) {
   
    if (this.cursor.right.isDown)
    {
        this.pajaro.x++;
    }else if (this.cursor.left.isDown)
    {
        this.pajaro.x--;
    }
}
