//professora não consegui colocar a musica

var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, bordas;
var musica;

function preload(){
    //musica = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";
    
    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(725,580,200,30);
    bloco4.shapeColor = "green";

    

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = 7;
    bola.velocityY = 7;


}

function draw() {
    background(rgb(169,169,169));
    bordas=createEdgeSprites();
    bola.bounceOff(bordas);

 
    
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        //musica.play();
    }


    if(bloco2.isTouching(bola)&& bola.bounceOff(bloco2)){
        bola.shapeColor = "orange";
        bola.velocityX = 0;
        bola.velocityY = 0;
    }
    if(bloco3.isTouching(bola)&& bola.bounceOff(bloco3)){
        bola.shapeColor = "red";
    }
    
    if(bloco4.isTouching(bola)&& bola.bounceOff(bloco4)){
        bola.shapeColor = "green";
    }
    drawSprites();
}