//pendiente modificacion 
const colorInput = document.getElementById("color");

colorInput.addEventListener("input", function () {
  const selectedColor = this.value;
  const form = document.querySelector("form");

  //esto lo tengo que modificar para seguir usando hexa!  
  function hexToRGBA(hex, alpha = 0.5) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const color1 = hexToRGBA(selectedColor, 0.7);
  const color2 = hexToRGBA(selectedColor, 0.1);

  // Aplicar gradiente como fondo al form
  form.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;

});