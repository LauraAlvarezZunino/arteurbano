document.getElementById('color').addEventListener('input', (e) => {
  document.querySelector('form').style.backgroundColor = `${e.target.value}80`;
});
//e Representa el evento(en este caso es input) y e.target es el input de color