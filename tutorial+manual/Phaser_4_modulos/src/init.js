import SceneA from "./sceneA.js";
import SceneB from "./sceneB.js";

const config = {
    width:800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    backgroundColor: '#392542',
    scene: [SceneA, SceneB]
}

var game = new Phaser.Game(config);


