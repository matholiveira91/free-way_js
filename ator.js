//ator
let yAtor=366;
let xAtor=85;
let colisao = false;
let pontos = 0;
function mostraAtor(){
  image(ImagemDoAtor,xAtor, yAtor, 30, 30);
  movimentaAtor();
  //print(yAtor);
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-=3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
  if (yAtor<366){
    yAtor+=3;
  }
  }
}
function PosicaoInicial(){   
   yAtor = 366;   
 } 

function Colidiu(){
  for (let i = 0; i < ImagemCarros.length; i++) {
          colisao = collideRectCircle(xCarros[i], yCarros[i], CumprimentoCarro, AlturaCarro, xAtor, yAtor, 15)
    if (colisao) {      
      somColisao.play()
      PosicaoInicial();      
      PerdePonto();
    }  
  }
}

function IncluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,255));
  text(pontos,width/5,25);
}
function MarcaPonto(){
  if (yAtor<=9){
    somPontos.play();
    pontos+=1;
    IncluiPontos();
    PosicaoInicial();
  }
  
}
function PerdePonto(){
  if(pontos>0){
    pontos-=1;
  }
}