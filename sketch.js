//adding matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//object variables
var b,p;
var gb1,gb2,gb3,gb4,gb5;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);
 
//making world
	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
	b = new Blueb(200,600,50,50);
	p = new Pinkb(1300,600,50,50);
	gb1 = new Gb(200,700,200,20,"black");
	gb2 = new Gb(1300,700,200,20,"black");
	gb3 = new Gb(550,450,200,20,"black");
	gb4 = new Gb(950,450,200,20,"black");
	gb5 = new Gb(750,250,200,20,"black");


}

function draw() {
  
  background("white");
  Engine.update(engine)
 b.display();
 p.display();
 gb1.display();
 gb2.display();
 gb3.display();
 gb4.display();
 gb5.display();

	var bbody = b.body.position;
	var pbody = p.body.position;
	var gbbody1 = gb1.body.position;
	var gbbody2 = gb2.body.position;
	var gbbody3 = gb3.body.position;
	var gbbody4 = gb4.body.position;
	var gbbody5 = gb5.body.position;
	

	
	if(gbbody2.y - bbody.y < b.height/2 + gb2.height/2 && bbody.y - gbbody2.y < b.height/2 + gb2.height/2 &&
		gbbody2.x - bbody.x < b.width/2 + gb2.width/2 && bbody.x - gbbody2.x < b.width/2 + gb2.width/2  && flag2===0)
	{
		gb2.color = "cyan";
		flag2 = 1;
	}


	if(gbbody1.y - bbody.y < b.height/2 + gb1.height/2 && bbody.y - gbbody1.y < b.height/2 + gb1.height/2 &&
		gbbody1.x - bbody.x < b.width/2 + gb1.width/2 && bbody.x - gbbody1.x < b.width/2 + gb1.width/2 && flag1===0)
	{
		gb1.color = "cyan";
		flag1 = 1;
	}

	
	if(gbbody3.y - bbody.y < b.height/2 + gb3.height/2 && bbody.y - gbbody3.y < b.height/2 + gb3.height/2 &&
		gbbody3.x - bbody.x < b.width/2 + gb3.width/2 && bbody.x - gbbody3.x < b.width/2 + gb3.width/2  && flag3===0)
	{
		gb3.color = "cyan";
		flag3 = 1;
	}

	if(gbbody4.y - bbody.y < b.height/2 + gb4.height/2 && bbody.y - gbbody4.y < b.height/2 + gb4.height/2 &&
		gbbody4.x - bbody.x < b.width/2 + gb4.width/2 && bbody.x - gbbody4.x < b.width/2 + gb4.width/2  && flag4===0)
	{
		gb4.color = "cyan";
		flag4 = 1;
	}

	if(gbbody5.y - bbody.y < b.height/2 + gb5.height/2 && bbody.y - gbbody5.y < b.height/2 + gb5.height/2 &&
		gbbody5.x - bbody.x < b.width/2 + gb5.width/2 && bbody.x - gbbody5.x < b.width/2 + gb5.width/2  && flag5 ===0)
	{
		gb5.color = "cyan";
		flag5 = 1;
	}




//   coloring for p 
//    |
//    V

	


	if(gbbody1.y - pbody.y < p.height/2 + gb1.height/2 && pbody.y - gbbody1.y < p.height/2 + gb1.height/2 &&
		gbbody1.x - pbody.x < p.width/2 + gb1.width/2 && pbody.x - gbbody1.x < p.width/2 + gb1.width/2 && flag1 === 0 )
	{
		gb1.color = "pink";
		flag1 = 1;
	}

	if(gbbody2.y - pbody.y < p.height/2 + gb2.height/2 && pbody.y - gbbody2.y < p.height/2 + gb2.height/2 &&
		gbbody2.x - pbody.x < p.width/2 + gb2.width/2 && pbody.x - gbbody2.x < p.width/2 + gb2.width/2 && flag2 === 0)
	{
		gb2.color = "pink";
		flag2 = 1;
	}
	
	if(gbbody3.y - pbody.y < p.height/2 + gb3.height/2 && pbody.y - gbbody3.y < p.height/2 + gb3.height/2 &&
		gbbody3.x - pbody.x < p.width/2 + gb3.width/2 && pbody.x - gbbody3.x < p.width/2 + gb3.width/2 && flag3 === 0)
	{
		gb3.color = "pink";
		flag3 = 1;
	}

	if(gbbody4.y - pbody.y < p.height/2 + gb4.height/2 && pbody.y - gbbody4.y < p.height/2 + gb4.height/2 &&
		gbbody4.x - pbody.x < p.width/2 + gb4.width/2 && pbody.x - gbbody4.x < p.width/2 + gb4.width/2 && flag4 === 0)
	{
		gb4.color = "pink";
		flag4 = 1;
	}

	if(gbbody5.y - pbody.y < p.height/2 + gb5.height/2 && pbody.y - gbbody5.y < p.height/2 + gb5.height/2 &&
		gbbody5.x - pbody.x < p.width/2 + gb5.width/2 && pbody.x - gbbody5.x < p.width/2 + gb5.width/2 && flag5 === 0)
	{
		gb5.color = "pink";
		flag5 = 1;
	}
	/*if(b.body.position.y-25 === gb1.body.position.y+10)
	{
		gb1.shapeColor = "blue"
	}
	*/


 if(keyWentDown(UP_ARROW)&&(b.body.speed <= 1))
 {
	Body.applyForce(b.body,b.body.position,{x:0,y:-0.13});
 }

 if(keyWentDown(RIGHT_ARROW))
 {
	Body.applyForce(b.body,b.body.position,{x:0.10,y:0});
 }

 if(keyWentDown(LEFT_ARROW))
 {
	Body.applyForce(b.body,b.body.position,{x:-0.10,y:0});
 }

 if(keyWentDown("W")&&(p.body.speed <= 1))
 {
	Body.applyForce(p.body,p.body.position,{x:0,y:-0.13});
 }

 if(keyWentDown("D"))
 {
	Body.applyForce(p.body,p.body.position,{x:0.10,y:0});
 }

 if(keyWentDown("A"))
 {
	Body.applyForce(p.body,p.body.position,{x:-0.10,y:0});
 }

  drawSprites();
 
}







