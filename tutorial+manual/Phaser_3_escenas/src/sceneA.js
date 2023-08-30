class SceneA extends Phaser.Scene{
    constructor(){
        super({
            key:"SceneA"
        });
    }
    preload(){

    }
    create(){
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1);

        graphics.fillRect(100,200,600,300);
        graphics.fillRect(100,100,100,100);

        this.add.text(120,110,"A",{font: "96px Courier", fill:"#000000"});

        //instamciar una escena dentro de otra
        this.scene.add("SceneC", new SceneC);

        //this.scene.start("SceneC");

        /*
        this.scene.sendToBack(); // mandar atras
        this.scene.bringToTop(); // traer al frente
        this.scene.moveUp(); //un paso arriba
        this.scene.moveDown(); // un paso atras
        this.scene.moveAbove(); //arriba de una escena 
        this.scene.moveBelow(); //abajo de una escena
        */
    }
    update(){

    }
}