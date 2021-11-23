//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(10, 34, 189); //Blue
  stroke(26, 17, 19);//Black
  fill(222, 18, 53); //Red
  ellipse(mouseX,mouseY,200,200,110,110);
  strokeWeight(3);

fill(44, 201, 205); //Aquablue
ellipse(200,200,400,400);
stroke(30,20,10);
strokeWeight(2);
}
