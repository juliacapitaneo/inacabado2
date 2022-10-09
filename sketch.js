const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//Crie as variáveis das partículas 1 a 5
var particle1, particle2, particle3, particle4, particle5;

//crie as variáveis dos rotadores 1 a 3
var rotate1, rotate2, rotate3;

//Crie as variáveis dos blocos 1 e 2
var block1, block2;

//Crie a variável angle1 e atribua o valor de 60
var angle1 = 60;

//Crie a variável angle2 e atribua o valor de 60
var angle2 = 60;

//Crie a variável angle3 e atribua o valor de 60
var angle3 = 60;

var plane = Bodies.rectangle(100, 580, 100, 50, plane_options);
World.add(world, plane);

var plane_options = {
  isStatic: true,
};

function setup() {
  var canvas = createCanvas(550, 600);
  engine = Engine.create();
  world = engine.world;
  //crie corpos planos e adicione ao mundo

  //crie corpo block1 e adicione ao mundo
  block1 = Bodies.rectangle(100, 400, 400, 20, plane_options);
  World.add(world, block1);

  //crie corpo block2 e adicione ao mundo
  block2 = Bodies.rectangle(100, 400, 400, 20, plane_options);
  World.add(world, block2);

  //crie particle_options
  var particle_options = {
    restitution: 0.4,
    friction: 0.02,
  };
  //crie o corpo particle1 e adicione ao mundo
  particle1 = Bodies.circle(220, 10, 10, particle_options);
  World.add(world, particle1);

  //crie o corpo particle2 e adicione ao mundo
  particle2 = Bodies.circle(210, 10, 10, particle_options);
  World.add(world, particle2);

  //crie o corpo particle3 e adicione ao mundo
  particle3 = Bodies.circle(230, 10, 10, particle_options);
  World.add(world, particle3);

  //crie o corpo particle4 e adicione ao mundo
  particle4 = Bodies.circle(210, 10, 10, particle_options);
  World.add(world, particle4);

  //crie o corpo particle5 e adicione ao mundo
  particle5 = Bodies.circle(210, 10, 10, particle_options);
  World.add(world, particle5);

  //crie rotator_options
  var rotator_options = {
    isStatic: true,
  };

  //crie rotator1 e adicione ao mundo
  rotate1 = Bodies.rectangle(200, 400, 400, 20, rotator_options);
  World.add(world, rotate1);

  //crie rotator2 e adicione ao mundo
  rotate2 = Bodies.rectangle(200, 400, 400, 20, rotator_options);
  World.add(world, rotate2);

  //crie rotator3 e adicione ao mundo
  rotate3 = Bodies.rectangle(100, 400, 400, 20, rotator_options);
  World.add(world, rotate3);

  //estilizando os corpos aqui
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("lightblue");
  Engine.update(engine);

  //Exibir plane e block1 e block2
  rect(plane.position.x, plane.position.y, 550, 100);
  rect(block1.position.x, block1.position.y, 500, 150);
  rect(block2.position.x, block2.position.y, 450, 120);

  //Exibir forma para todas as partículas
  ellipse(particle1.position.x, particle1.position.y, 20);
  ellipse(particle2.position.x, particle2.position.y, 20);
  ellipse(particle3.position.x, particle3.position.y, 20);
  ellipse(particle4.position.x, particle4.position.y, 20);
  ellipse(particle5.position.x, particle5.position.y, 20);

  //crie forma para todos os rotate1
  Matter.Body.rotate(rotate1, angle1);
  push();
  translate(rotate1.position.x, rotate1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 0.2;

  //crie forma para todos os rotate2
  Matter.Body.rotate(rotate2, angle2);
  push();
  translate(rotate2.position.x, rotate2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 0.2;

  //crie forma para todos os rotate3
  Matter.Body.rotate(rotate3, angle3);
  push();
  translate(rotate3.position.x, rotate3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 0.2;
}
