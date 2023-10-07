class inicio extends Phaser.Scene{
    constructor(){
        super("inicio");
        // aqui tambien se puede agregar variables

        
      }
 
      preload (){

        // es un metodo

       
        this.load.image('fondo', '/public/imag/fondo.png'); // esta es la imagen de fondo
       
        this.load.spritesheet('nave','/public/imag/nave.png', {frameWidth:70, frameHeight:62}); // la nave principal
      }
      create (){
        this.add.image(400,400, 'fondo'); 
       
       
        this.player = this.physics.add.sprite(400,400, 'nave');
        this.player.setCollideWorldBounds(true); //no atravesar bordes del area de juego
      
        this.cursors = this.input.keyboard.createCursorKeys();

        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 0 }),
          //[{key: 'avion', frame:2  }],//('avion',/*{start:0 , end:0 }*/)
          //frameRate: 30
          //repeat: -1 // valor negativo para repeticion infinita, 0 para una sola
                      //reproduccion, 1 para dos repeticiones, y asi sucesivamente
      });

      this.anims.create({
          key: 'up',
          frames: this.anims.generateFrameNumbers('nave', { start: 2, end: 2 }),
          //frameRate: 20
      });

      this.anims.create({
          key: 'right',
          frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 0 }),
          //frameRate: 10
          ///repeat: -1
      });

      this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('nave', { start: 1, end: 1 }),
        //frameRate: 10
        //repeat: -1
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////





      }
      



      update(){   

        if (this.cursors.left.isDown) {
          this.player.setVelocityX(-160);
          this.player.anims.play('left', true);
      }else if(this.cursors.right.isDown){
          this.player.setVelocityX(160); 
          this.player.anims.play('right', true);
      }


      else if(this.cursors.up.isDown){
        this.player.setVelocityY(-160);
        
        this.player.anims.play('up', true);
       }

    else if(this.cursors.down.isDown){
      this.player.setVelocityY(160);
      
      this.player.anims.play('down', true);
  }
      else{
          this.player.setVelocityX(0);
          this.player.setVelocityY(0);
          
          this.player.anims.play('left', true);
      }



      }

}

export  default inicio;