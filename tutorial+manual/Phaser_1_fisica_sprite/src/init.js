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
                y: 500
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
    this.pajaro = this.physics.add.image(50,100,"pajaro");// 3parametros -  1.eje x , 2.eje y , 3. nombre imagen 
    //console.log(this.pajaro); // ver informacion del objeto 
    //this.pajaro.setScale(2); // cambiar la escala (tamaño) del pajaro
    // Fisicas
    this.pajaro.setCollideWorldBounds(true); // establecer la colicion del objeto pajaro con el mundo (canvan)
    this.pajaro.setBounce(0.5); // rebote del objeto al caer
    this.pajaro.setAcceleration(10,0); //establecer aceleracion en eje X, Y + suma valor incrementando al anterior
    //this.pajaro.setVelocity(50); // establece una velocidad constante

}

function update(time, delta) {
    //console.log(delta)
}
