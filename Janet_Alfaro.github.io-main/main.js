let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#B16A9A;">Y Actualmente acabo de culminar mis Estudios en Ingeniería en Gestion y Desarrollo de Software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
