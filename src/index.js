import inicio from "./escenas/inicio.js";



 
 let gameConfig = {   
     type : Phaser.AUTO,
     backgroundColor : 0x444444,
     scale: {    
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        
        width : 800,
        height: 800
        
     },
     physics:{
      default: 'arcade',
      arcade: {
          //gravity: {y:300},
          debug: true
      }
  },
     
      scene: [inicio]
 }   

 let game =new Phaser.Game(gameConfig);