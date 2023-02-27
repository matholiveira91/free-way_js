let yCarros = [40,96,150,210,270,318];
let xCarros = [600,600,600,600,600,600];
let VelocidadeCarros = [2,3,3.2,5,3.3,2.3];
let CumprimentoCarro=50;
let AlturaCarro=40

function mostraCarro(){
  for (let i=0;i<ImagemCarros.length;i++ ){image(ImagemCarros[i],xCarros[i], yCarros[i], 50, 40);}
}
function movimentaCarro(){
 for(let i=0;i<ImagemCarros.length;i++) {xCarros[i]-=VelocidadeCarros[i];}
    
}
function respawn(){
  for(let i=0;i<ImagemCarros.length;i++) {if (xCarros[i] < -50){xCarros[i]=600;}
} 
   
}
