let osc;  // Oscilador para generar sonido
let playing = false;

function setup() {
  createCanvas(600, 600);
  osc = new p5.Oscillator('sine');  // Crear un oscilador de onda seno
  osc.start();  // Iniciar el oscilador
  osc.amp(0);  // Comenzar con volumen cero
}

function draw() {
  background(0);
  
  // Mapear la posición del mouse a la frecuencia del oscilador
  let freq = map(mouseX, 0, width, 100, 1000);  // El ratón horizontal controla la frecuencia
  let amp = map(mouseY, 0, height, 0, 1);  // El ratón vertical controla el volumen
  
  osc.freq(freq);  // Ajustar la frecuencia del oscilador
  osc.amp(amp, 0.1);  // Ajustar el volumen del oscilador, con un tiempo de suavizado
  
  // Dibujar algo visual para mostrar el control
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);  // Dibujar un círculo en la posición del mouse
  textSize(16);
  textAlign(CENTER, CENTER);
  text('Frecuencia: ${int(freq)} Hz', width / 2, 30);
  text('Volumen: ${int(amp * 100)}%', width / 2, 50);
}

function mousePressed() {
  // Cuando presionas el ratón, comienzas a reproducir sonido
  osc.amp(0.5, 0.1);  // Configurar volumen a un valor predeterminado
}

function mouseReleased() {
  // Cuando sueltas el ratón, apagas el sonido
  osc.amp(0, 0.5);  // Reducir volumen a cero con suavizado
}