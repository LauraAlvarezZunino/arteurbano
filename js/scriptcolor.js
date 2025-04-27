
document.getElementById('color').addEventListener('input', (e) => {
  document.querySelector('form').style.backgroundColor = `${e.target.value}80`;

});
//e Representa el evento(en este caso es input) y e.target es el input de color
//80 en hexadecimal = 128 en decimal (de 255, donde 255 es totalmente opaco).


let colores = ['#BA2D0B', '#D5F2E3', '#73BA9B', '#003E1F', '#01110A'];
document.querySelector('h1').onclick = function() {
  const indiceAleatorio = Math.floor(Math.random() * colores.length);/**floor redondeo hacia abajo */
  this.style.color = colores[indiceAleatorio];
};