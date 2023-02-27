let ImagemDaEstrada;
let imagemDoAtor;
let ImagemCarro;
let ImagemCarro2;
let ImagemCarro3;
//sons
let somDaTrilha;
let somColisao;
let somPontos;

function preload(){
    ImagemDaEstrada = loadImage("imagens/estrada.png")
    ImagemDoAtor = loadImage("imagens/capi.png")
    ImagemCarro = loadImage("imagens/carro-1.png")
    ImagemCarro2 = loadImage("imagens/carro-2.png")
    ImagemCarro3 = loadImage("imagens/carro-3.png")
    ImagemCarros=[ImagemCarro,ImagemCarro2,ImagemCarro3,ImagemCarro,ImagemCarro2,ImagemCarro3]
  //sons
  somDaTrilha=loadSound("sons/trilha2.wav")
  somColisao=loadSound("sons/colidiu.mp3")
  somPontos=loadSound("sons/pontos.wav")
}

