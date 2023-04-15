var app = document.getElementById('type');


var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });


  typewriter.pauseFor(200)
  .typeString('<strong>Chief Design Officer</strong> of Paradise Solution ')
  .pauseFor(1200)
  .deleteChars(42)
  .typeString('a <strong>Graphic Designer</strong>')
  .pauseFor(1200)
  .deleteChars(18)
  .typeString(' <strong>Professional Photographer</strong>')
  .pauseFor(1000)
  .deleteChars(27)
  .typeString('a <strong>Digital Marketar</strong> ')
  .pauseFor(1000)
  .deleteChars(28)
  .typeString('an <strong>Electrical Engineer</strong>')
  .pauseFor(5000)
  .start();  

