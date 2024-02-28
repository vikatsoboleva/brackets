function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(110, 60, 610, 610);
    fill(0, 0, 255);
	strokeWeight(15);
	rect(150, 300, 100, 100);
	
	fill(0, 255, 0);
	strokeWeight(2);
	rect(150, 450, 140, 180);
	fill(99, 0, 176);
	strokeWeight(1);
	rect(500, 164, 200, 160);
	fill(0, 0, 0);
	strokeWeight(10);
	rect(350, 600, 299, 40);
	fill(210, 105, 30);
	strokeWeight(3);
	rect(370, 490, 270, 80);
	fill(128, 0, 0);
	strokeWeight(3);
	rect(200, 110, 250, 150);
	fill(128, 0, 0);
	strokeWeight(4);
	rect(360, 330, 23, 145);
	fill(255, 255, 0);
	strokeWeight(9);
	rect(460, 340, 234, 105);
}