//CORDS FOR MAZE
var cord = [
  [2, 2, 226, 2], [242, 2, 482, 2], [66, 18, 82, 18], [146, 18, 162, 18], [194, 18, 210, 18], [242, 18, 258, 18], [274, 18, 306, 18], [322, 18, 354, 18], [370, 18, 402, 18], [418, 18, 466, 18],
  [2, 34, 66, 34], [114, 34, 130, 34], [162, 34, 210, 34], [226, 34, 242, 34], [258, 34, 290, 34], [306, 34, 338, 34], [354, 34, 386, 34], [418, 34, 482, 34], [34, 50, 50, 50], [82, 50, 114, 50],
  [130, 50, 146, 50], [178, 50, 226, 50], [242, 50, 258, 50], [370, 50, 386, 50], [402, 50, 418, 50], [434, 50, 482, 50], [18, 66, 34, 66], [66, 66, 82, 66], [162, 66, 178, 66], [194, 66, 210, 66],
  [226, 66, 242, 66], [258, 66, 290, 66], [322, 66, 370, 66], [402, 66, 450, 66], [82, 82, 130, 82], [146, 82, 162, 82], [178, 82, 194, 82], [210, 82, 226, 82], [242, 82, 338, 82], [370, 82, 402, 82],
  [418, 82, 434, 82], [2, 98, 34, 98], [66, 98, 98, 98], [146, 98, 210, 98], [242, 98, 258, 98], [354, 98, 370, 98], [402, 98, 482, 98], [34, 114, 66, 114], [98, 114, 114, 114], [162, 114, 274, 114],
  [306, 114, 322, 114], [338, 114, 354, 114], [370, 114, 386, 114], [402, 114, 418, 114], [18, 130, 34, 130], [66, 130, 98, 130], [146, 130, 194, 130], [226, 130, 274, 130], [290, 130, 306, 130],
  [322, 130, 338, 130], [354, 130, 370, 130], [386, 130, 402, 130], [434, 130, 450, 130], [34, 146, 50, 146], [66, 146, 82, 146], [114, 146, 162, 146], [194, 146, 226, 146], [242, 146, 258, 146],
  [274, 146, 290, 146], [306, 146, 354, 146], [370, 146, 386, 146], [402, 146, 418, 146], [434, 146, 466, 146], [50, 162, 66, 162], [82, 162, 114, 162], [130, 162, 146, 162], [194, 162, 210, 162],
  [258, 162, 290, 162], [322, 162, 370, 162], [386, 162, 402, 162], [418, 162, 434, 162], [450, 162, 482, 162], [2, 178, 34, 178], [66, 178, 82, 178], [114, 178, 130, 178], [146, 178, 194, 178],
  [210, 178, 226, 178], [290, 178, 306, 178], [338, 178, 354, 178], [386, 178, 402, 178], [418, 178, 434, 178], [50, 194, 114, 194], [130, 194, 178, 194], [194, 194, 322, 194], [354, 194, 386, 194],
  [402, 194, 418, 194], [466, 194, 482, 194], [18, 210, 34, 210], [66, 210, 98, 210], [114, 210, 178, 210], [210, 210, 258, 210], [290, 210, 338, 210], [354, 210, 402, 210], [450, 210, 466, 210],
  [34, 226, 82, 226], [130, 226, 146, 226], [194, 226, 226, 226], [258, 226, 274, 226], [306, 226, 322, 226], [338, 226, 370, 226], [402, 226, 466, 226], [2, 242, 18, 242], [50, 242, 98, 242],
  [114, 242, 146, 242], [178, 242, 194, 242], [210, 242, 242, 242], [274, 242, 290, 242], [322, 242, 338, 242], [370, 242, 402, 242], [418, 242, 450, 242], [18, 258, 50, 258], [82, 258, 114, 258],
  [146, 258, 162, 258], [194, 258, 258, 258], [290, 258, 338, 258], [354, 258, 482, 258], [2, 274, 34, 274], [50, 274, 82, 274], [98, 274, 162, 274], [178, 274, 210, 274], [226, 274, 242, 274],
  [258, 274, 274, 274], [290, 274, 322, 274], [386, 274, 402, 274], [434, 274, 466, 274], [34, 290, 146, 290], [194, 290, 226, 290], [242, 290, 258, 290], [274, 290, 306, 290], [338, 290, 386, 290],
  [450, 290, 482, 290], [18, 306, 34, 306], [50, 306, 82, 306], [98, 306, 130, 306], [162, 306, 210, 306], [242, 306, 274, 306], [306, 306, 338, 306], [370, 306, 402, 306], [434, 306, 482, 306],
  [2, 322, 18, 322], [34, 322, 50, 322], [98, 322, 114, 322], [130, 322, 146, 322], [194, 322, 210, 322], [226, 322, 242, 322], [274, 322, 322, 322], [338, 322, 354, 322], [370, 322, 386, 322],
  [402, 322, 434, 322], [450, 322, 466, 322], [18, 338, 34, 338], [50, 338, 66, 338], [82, 338, 98, 338], [114, 338, 130, 338], [146, 338, 162, 338], [210, 338, 226, 338], [290, 338, 306, 338],
  [322, 338, 338, 338], [354, 338, 418, 338], [466, 338, 482, 338], [2, 354, 34, 354], [66, 354, 82, 354], [130, 354, 194, 354], [210, 354, 290, 354], [306, 354, 354, 354], [370, 354, 418, 354],
  [2, 370, 18, 370], [82, 370, 98, 370], [114, 370, 130, 370], [146, 370, 194, 370], [226, 370, 242, 370], [274, 370, 306, 370], [354, 370, 370, 370], [418, 370, 434, 370], [34, 386, 50, 386],
  [66, 386, 82, 386], [114, 386, 162, 386], [210, 386, 226, 386], [258, 386, 274, 386], [290, 386, 322, 386], [354, 386, 402, 386], [434, 386, 450, 386], [18, 402, 66, 402], [82, 402, 114, 402],
  [130, 402, 146, 402], [162, 402, 226, 402], [242, 402, 258, 402], [274, 402, 306, 402], [338, 402, 434, 402], [466, 402, 482, 402], [34, 418, 50, 418], [66, 418, 82, 418], [114, 418, 130, 418],
  [146, 418, 178, 418], [210, 418, 242, 418], [258, 418, 290, 418], [338, 418, 386, 418], [402, 418, 434, 418], [450, 418, 466, 418], [50, 434, 82, 434], [98, 434, 114, 434], [130, 434, 162, 434],
  [242, 434, 274, 434], [290, 434, 306, 434], [322, 434, 338, 434], [354, 434, 370, 434], [386, 434, 418, 434], [2, 450, 34, 450], [98, 450, 114, 450], [146, 450, 210, 450], [242, 450, 322, 450],
  [338, 450, 386, 450], [402, 450, 450, 450], [34, 466, 50, 466], [66, 466, 98, 466], [114, 466, 130, 466], [194, 466, 258, 466], [306, 466, 338, 466], [370, 466, 402, 466], [418, 466, 434, 466],
  [466, 466, 482, 466], [2, 482, 242, 482], [258, 482, 482, 482], [2, 2, 2, 482], [18, 2, 18, 18], [18, 50, 18, 82], [18, 98, 18, 114], [18, 130, 18, 162], [18, 194, 18, 242], [18, 290, 18, 306],
  [18, 322, 18, 338], [18, 386, 18, 434], [18, 466, 18, 482], [34, 18, 34, 34], [34, 66, 34, 98], [34, 114, 34, 130], [34, 146, 34, 194], [34, 226, 34, 258], [34, 274, 34, 290], [34, 306, 34, 322],
  [34, 354, 34, 386], [34, 418, 34, 450], [50, 2, 50, 18], [50, 34, 50, 98], [50, 114, 50, 146], [50, 178, 50, 226], [50, 258, 50, 274], [50, 306, 50, 322], [50, 338, 50, 386], [50, 434, 50, 466],
  [66, 18, 66, 34], [66, 50, 66, 98], [66, 146, 66, 162], [66, 242, 66, 258], [66, 322, 66, 338], [66, 354, 66, 434], [66, 450, 66, 466], [82, 34, 82, 50], [82, 98, 82, 146], [82, 162, 82, 178],
  [82, 210, 82, 226], [82, 258, 82, 274], [82, 290, 82, 338], [82, 386, 82, 402], [82, 434, 82, 450], [98, 2, 98, 34], [98, 50, 98, 98], [98, 146, 98, 194], [98, 226, 98, 258], [98, 274, 98, 290],
  [98, 322, 98, 386], [98, 402, 98, 434], [98, 450, 98, 482], [114, 2, 114, 18], [114, 34, 114, 66], [114, 98, 114, 162], [114, 194, 114, 242], [114, 306, 114, 322], [114, 338, 114, 354],
  [114, 386, 114, 402], [114, 434, 114, 450], [130, 18, 130, 34], [130, 66, 130, 146], [130, 162, 130, 194], [130, 258, 130, 274], [130, 322, 130, 338], [130, 354, 130, 386], [130, 402, 130, 466],
  [146, 2, 146, 130], [146, 162, 146, 178], [146, 226, 146, 242], [146, 290, 146, 322], [146, 402, 146, 418], [146, 450, 146, 466], [162, 34, 162, 66], [162, 146, 162, 162], [162, 226, 162, 290],
  [162, 306, 162, 338], [162, 386, 162, 402], [162, 466, 162, 482], [178, 2, 178, 34], [178, 66, 178, 82], [178, 130, 178, 162], [178, 210, 178, 242], [178, 258, 178, 338], [178, 370, 178, 386],
  [178, 418, 178, 482], [194, 146, 194, 162], [194, 178, 194, 226], [194, 242, 194, 258], [194, 322, 194, 354], [194, 370, 194, 434], [210, 2, 210, 18], [210, 50, 210, 98], [210, 114, 210, 146],
  [210, 226, 210, 242], [210, 258, 210, 274], [210, 306, 210, 322], [210, 338, 210, 354], [210, 370, 210, 386], [210, 434, 210, 450], [226, 18, 226, 50], [226, 82, 226, 114], [226, 146, 226, 178],
  [226, 274, 226, 338], [226, 386, 226, 402], [226, 418, 226, 466], [242, 66, 242, 82], [242, 130, 242, 194], [242, 210, 242, 242], [242, 290, 242, 306], [242, 322, 242, 338], [242, 370, 242, 418],
  [242, 434, 242, 450], [242, 466, 242, 482], [258, 2, 258, 34], [258, 50, 258, 66], [258, 82, 258, 98], [258, 162, 258, 178], [258, 226, 258, 290], [258, 322, 258, 386], [258, 418, 258, 434],
  [274, 34, 274, 50], [274, 98, 274, 114], [274, 130, 274, 146], [274, 162, 274, 226], [274, 242, 274, 258], [274, 306, 274, 338], [274, 386, 274, 418], [274, 450, 274, 482], [290, 34, 290, 66],
  [290, 82, 290, 130], [290, 210, 290, 242], [290, 290, 290, 322], [290, 338, 290, 370], [290, 466, 290, 482], [306, 18, 306, 82], [306, 98, 306, 114], [306, 130, 306, 194], [306, 226, 306, 258],
  [306, 402, 306, 434], [322, 50, 322, 66], [322, 98, 322, 130], [322, 162, 322, 178], [322, 274, 322, 306], [322, 322, 322, 338], [322, 354, 322, 434], [338, 34, 338, 66], [338, 82, 338, 98],
  [338, 114, 338, 130], [338, 178, 338, 242], [338, 258, 338, 306], [338, 322, 338, 338], [338, 370, 338, 418], [338, 434, 338, 466], [354, 18, 354, 50], [354, 66, 354, 114], [354, 194, 354, 210],
  [354, 226, 354, 274], [354, 306, 354, 322], [354, 338, 354, 370], [354, 418, 354, 434], [354, 466, 354, 482], [370, 2, 370, 18], [370, 114, 370, 194], [370, 258, 370, 290], [370, 450, 370, 466],
  [386, 34, 386, 114], [386, 130, 386, 146], [386, 210, 386, 242], [386, 322, 386, 338], [386, 370, 386, 386], [386, 434, 386, 450], [402, 18, 402, 50], [402, 98, 402, 114], [402, 146, 402, 194],
  [402, 226, 402, 242], [402, 274, 402, 322], [402, 354, 402, 386], [402, 402, 402, 418], [402, 450, 402, 466], [418, 2, 418, 18], [418, 82, 418, 98], [418, 114, 418, 146], [418, 162, 418, 178],
  [418, 194, 418, 210], [418, 242, 418, 306], [418, 338, 418, 354], [418, 370, 418, 402], [418, 466, 418, 482], [434, 114, 434, 130], [434, 146, 434, 162], [434, 178, 434, 226], [434, 274, 434, 370],
  [434, 418, 434, 434], [450, 50, 450, 82], [450, 98, 450, 130], [450, 162, 450, 210], [450, 322, 450, 482], [466, 66, 466, 98], [466, 114, 466, 146], [466, 178, 466, 194], [466, 210, 466, 242],
  [466, 338, 466, 386], [466, 418, 466, 450], [482, 2, 482, 482]
];

//CORDS FOR SOLUTION
var path = [
  [234, 2], [234, 26], [250, 26], [250, 42], [234, 42], [234, 58], [250, 58], [250, 74], [298, 74], [298, 26], [266, 26], [266, 10], [314, 10], [314, 26], [346, 26], [346, 58], [378, 58],
  [378, 74], [362, 74], [362, 90], [378, 90], [378, 106], [362, 106], [362, 122], [346, 122], [346, 138], [362, 138], [362, 154], [314, 154], [314, 186], [330, 186], [330, 202], [282, 202],
  [282, 234], [266, 234], [266, 266], [282, 266], [282, 282], [314, 282], [314, 298], [298, 298], [298, 314], [346, 314], [346, 298], [362, 298], [362, 330], [346, 330], [346, 346], [314, 346],
  [314, 330], [282, 330], [282, 346], [266, 346], [266, 314], [234, 314], [234, 282], [250, 282], [250, 266], [218, 266], [218, 282], [186, 282], [186, 298], [218, 298], [218, 330], [202, 330],
  [202, 362], [250, 362], [250, 394], [266, 394], [266, 410], [250, 410], [250, 426], [234, 426], [234, 458], [266, 458], [266, 474], [250, 474], [250, 482]
];




document.addEventListener("click", (event) => {
  sound.play();
  //endMenu();
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const character = document.getElementById("canvas2");
const ctx2 = character.getContext("2d");
const knight = document.getElementById("canvas3");
const ctx3 = knight.getContext("2d");



//DRAWUNG MAZE
function drawMaze() {
  scale = 1.32;
  
  canvas.width=484*scale;
  canvas.height=484*scale;
  ctx.scale(scale,scale);

  ctx.beginPath();
  ctx.strokeStyle="#898989";
  for (i = 0; i < cord.length; i++) {
    ctx.moveTo(cord[i][0], cord[i][1]);
    ctx.lineTo(cord[i][2], cord[i][3]);
  }
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}
drawMaze();


//DRAWING-REMOVING SOLUTION
function drawSolution() {
  gameend=true;
  removeSolution();
  document.getElementById("play").setAttribute("disabled",true);
  document.getElementById("sol").setAttribute("disabled",true);
  //character.style.display= "none";
  knight.style.display="none";
  
  const drawLinesWithDelay = (ctx, path, delay, style) => {

    ctx.beginPath();
    ctx.strokeStyle = "rgb(55 99 143)";
    
    ctx.lineWidth = 4;

    const drawLineSegment = (i) => {
      const point = path[i];
      const x = point[0];
      const y = point[1];

      if (i === 0) {
        ctx.moveTo(x, y);
        
      } else {
        ctx2.clearRect(0,0, canvas.width, canvas.height);
        ctx.lineTo(x, y);
        ctx2.drawImage(img, 167, 97, 62, 90, x-5, y-7, chW, chH);
      }

      ctx.stroke();
      
      if (i < path.length - 1) {
        setTimeout(() => {
          drawLineSegment(i + 1);
        }, delay);
      } else {
        ctx.closePath();
        document.getElementById("sol").removeAttribute("disabled");
        document.getElementById("play").removeAttribute("disabled");

      }
    };

    drawLineSegment(0);
    
  };
  const delayBetweenLines = 200;
  
  drawLinesWithDelay(ctx, path, delayBetweenLines);
  
}
function removeSolution() {
  document.getElementById("play").setAttribute("disabled",true);
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawMaze();
}

//DRAWING CH
chW=12;
chH=15;

function drawCh(){
  character.width=484*scale;
  character.height=484*scale;
  ctx2.scale(scale,scale);
  
  url = "img/character.gif";
  img = document.createElement("img");
  img.setAttribute('src', url);
  img.onload = function() {
    ctx2.drawImage(img, 167, 97, 62, 90, 228, 2, chW, chH);
  };

}

//DRAW KNIGHT
function drawKn(){
  knight.width=484*scale;
  knight.height=484*scale;
  ctx3.scale(scale,scale);

  url = "img/enemy1.png";
  img2 = document.createElement("img");
  img2.setAttribute('src', url);
  img2.onload = function() {
    ctx3.drawImage(img2, KN[0].spr.list[KN[0].spr.ind].x, KN[0].spr.list[KN[0].spr.ind].y, 80, 87, KN[0].pos.x, KN[0].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[1].spr.list[KN[1].spr.ind].x, KN[1].spr.list[KN[1].spr.ind].y, 80, 87, KN[1].pos.x, KN[1].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[2].spr.list[KN[2].spr.ind].x, KN[2].spr.list[KN[2].spr.ind].y, 80, 87, KN[2].pos.x, KN[2].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[3].spr.list[KN[3].spr.ind].x, KN[3].spr.list[KN[3].spr.ind].y, 80, 87, KN[3].pos.x, KN[3].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[4].spr.list[KN[4].spr.ind].x, KN[4].spr.list[KN[4].spr.ind].y, 80, 87, KN[4].pos.x, KN[4].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[5].spr.list[KN[5].spr.ind].x, KN[5].spr.list[KN[5].spr.ind].y, 80, 87, KN[5].pos.x, KN[5].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[6].spr.list[KN[6].spr.ind].x, KN[6].spr.list[KN[6].spr.ind].y, 80, 87, KN[6].pos.x, KN[6].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[7].spr.list[KN[7].spr.ind].x, KN[7].spr.list[KN[7].spr.ind].y, 80, 87, KN[7].pos.x, KN[7].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[8].spr.list[KN[8].spr.ind].x, KN[8].spr.list[KN[8].spr.ind].y, 80, 87, KN[8].pos.x, KN[8].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[9].spr.list[KN[9].spr.ind].x, KN[9].spr.list[KN[9].spr.ind].y, 80, 87, KN[9].pos.x, KN[9].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[10].spr.list[KN[10].spr.ind].x, KN[10].spr.list[KN[10].spr.ind].y, 80, 87, KN[10].pos.x, KN[10].pos.y, knW, chH);
    ctx3.drawImage(img2, KN[11].spr.list[KN[11].spr.ind].x, KN[11].spr.list[KN[11].spr.ind].y, 80, 87, KN[11].pos.x, KN[11].pos.y, knW, chH);
  };
}
document.addEventListener("DOMContentLoaded", (event) => {
  drawCh();
  drawKn();
});

//MOVING CH
me=true;
function moveCh(){
    me=false;
    removeSolution();
    ctx2.clearRect(0,0, canvas.width, canvas.height);
    character.style.display= "block";
    y=2;
    x=228;
    m=16;
    ctx2.drawImage(img, 167, 97, 62, 90, x, y, chW, chH);
}

document.addEventListener("keydown", (e) => {
  //var p = ctx.getImageData(200, g, 1, 1).data[0]; 
  //console.log(p);
  
    if(me) return;
    const key=e.key;
    //IZPIS LOKACIJE CH
    j=(x-4)/m*2+1;
    k=(y-2)/m*2+1;
    //console.log((x-4)/m*2+1+"  "+(y-2)/m*2+1);
    switch(key){
        case "w":
        case "W":
        case "ArrowUp":
          if(y>2){
            if(arr[(x-4)/m*2+1][(y-2)/m*2+1-1]==0){
              ctx2.clearRect(0,0, canvas.width, canvas.height);
              y=y-m;
                //img, tocka, velikost slike ki jo uzimasod tocke , pozicija na canvasu, velikost slike(ch)
                ctx2.drawImage(img, 167, 97, 62, 90, x, y, chW, chH);
                //console.log(x+" "+y);
              }
          }
            break;


        case "s":
        case "S":
        case "ArrowDown":  
            if(arr[(x-4)/m*2+1][(y-2)/m*2+1+1]==0){
              ctx2.clearRect(0,0, canvas.width, canvas.height);
              y=y+m;
                ctx2.drawImage(img, 167, 97, 62, 90, x, y, chW, chH);
                //console.log(x+" "+y);
              }
            if(x==244 && y==482){
              endMenu();
              ctx2.clearRect(0,0, canvas.width, canvas.height);
              drawCh();
              y=2;
              x=228;
              me=true;
              document.getElementById("play").removeAttribute("disabled");
            }
          break;

        case "a":
        case "A":
        case "ArrowLeft":
            if(arr[(x-4)/m*2+1-1][(y-2)/m*2+1]==0){
              ctx2.clearRect(0,0, canvas.width, canvas.height);
              x=x-m;
                ctx2.drawImage(img, 266, 97, 60, 90, x, y, chW, chH);
                console.log(x+" "+y);
              }
            break;

        case "d":
        case "D":
        case "ArrowRight":
            if(arr[(x-4)/m*2+1+1][(y-2)/m*2+1]==0){
              ctx2.clearRect(0,0, canvas.width, canvas.height);
              x=x+m;
                ctx2.drawImage(img, 266, 97, 60, 90, x, y, chW, chH);
                console.log(x+" "+y);
              }
            break;
    }

    for(var i=0;i<KN.length;i++){
      if(x==KN[i].pos.x && y==KN[i].pos.y){
        endGame();
      }
    }

});


get_px = (ctx, x, y)=>{
  return ctx.getImageData(x,y, 1, 1).data;
};

gameend=false;

km=16;
knW=16;

//KNIGHT SPRITE
sprD={x:0, y:17, w:249, h:479};
sprA={x:0, y:17, w:249, h:479};
sprW={x:0, y:17, w:249, h:479};
sprS={x:0, y:17, w:249, h:479};

sprA2={x:0, y:17, w:249, h:479};
sprD2={x:0, y:17, w:249, h:479};
sprS2={x:0, y:17, w:249, h:479};
sprW2={x:0, y:17, w:249, h:479};


//Knights
KN = [
  {pos:{x:260,y:2,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]}, dir:"d"},
  {pos:{x:308,y:66,end:false}, spr:{ind:0,list:[sprD2,sprA2,sprS2,sprW2]}, dir:"d"},
  {pos:{x:244,y:354,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]}, dir:"d"},
  {pos:{x:356,y:290,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]}, dir:"s"},
  {pos:{x:452,y:322,end:false}, spr:{ind:0,list:[sprD2,sprA2,sprS2,sprW2]}, dir:"s"},
  {pos:{x:180,y:466,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]}, dir:"d"},
  {pos:{x:68,y:306,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]},dir:"s"},
  {pos:{x:100,y:242,end:false}, spr:{ind:0,list:[sprD2,sprA2,sprS2,sprW2]}, dir:"s"},
  {pos:{x:132,y:50,end:false}, spr:{ind:0,list:[sprD2,sprA2,sprS2,sprW2]}, dir:"s"},
  {pos:{x:276,y:242,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]}, dir:"s"},
  {pos:{x:196,y:194,end:false}, spr:{ind:0,list:[sprD,sprA,sprS,sprW]}, dir:"d"},
  {pos:{x:372,y:178,end:false}, spr:{ind:0,list:[sprD2,sprA2,sprS2,sprW2]}, dir:"s"},
];


timeout=0;

function moveKn(start){
  
  if(gameend && !start) return;
  ctx3.canvas.style.display="block";
  gameend=false;
  for(var i=0;i<KN.length;i++){

//knight moving
moveTh(ctx3,arr,16,img2,knW,chH,KN[i].spr.list[KN[i].spr.ind], KN[i].dir ,KN[i].pos,i==0);
    if(KN[i].pos.end){
      KN[i].pos.end=false;
      if(KN[i].dir=="w"){
        KN[i].spr.ind=2;
        KN[i].dir="s";
      }else if(KN[i].dir=="s"){
        KN[i].spr.ind=3;
        KN[i].dir="w";
      }else if(KN[i].dir=="a"){
        KN[i].spr.ind=0;
        KN[i].dir="d";
      }else{
        KN[i].spr.ind=1;
        KN[i].dir="a";
      }
      moveTh(ctx3,arr,16,img2,knW,chH,KN[i].spr.list[KN[i].spr.ind], KN[i].dir ,KN[i].pos, i==0);
    }
    //console.log(KN[i].pos.x+" "+KN[i].pos.y+" "+KN[i].pos.end);
    if(x==KN[i].pos.x && y==KN[i].pos.y){
      endGame();
    }
  }

  timeout=setTimeout(() => {
    moveKn(false);
  }, 500);
}




function moveTh(ctx2,arr,m,img,chW,chH,spr, key, pos, clear){
    
  //var p = ctx.getImageData(200, g, 1, 1).data[0]; 
  //console.log(p);
    var x= pos.x;
    var y= pos.y;
    //IZPIS LOKACIJE CH
    
    //console.log((x-4)/m*2+1+"  "+(y-2)/m*2+1);
    switch(key){
        case "w":
        case "W":
        case "ArrowUp":
            if(arr[(x-4)/m*2+1][(y-2)/m*2+1-1]==0){
              if(clear) ctx2.clearRect(0,0, ctx2.canvas.width, ctx2.canvas.height);
              y=y-m;
                //img, tocka, velikost slike ki jo uzimasod tocke , pozicija na ctx2.canvasu, velikost slike(ch)
                ctx2.drawImage(img, spr.x, spr.y, spr.w, spr.h, x, y, chW, chH);
                //console.log(x+" "+y);
              }else{pos.end=true;}
            break;


        case "s":
        case "S":
        case "ArrowDown":  
            if(arr[(x-4)/m*2+1][(y-2)/m*2+1+1]==0){
              if(clear) ctx2.clearRect(0,0, ctx2.canvas.width, ctx2.canvas.height);
              y=y+m;
                ctx2.drawImage(img, spr.x, spr.y, spr.w, spr.h, x, y, chW, chH);
                //console.log(x+" "+y);
              }else{pos.end=true;}
          break;


        case "a":
        case "A":
        case "ArrowLeft":
            if(arr[(x-4)/m*2+1-1][(y-2)/m*2+1]==0){
              if(clear) ctx2.clearRect(0,0, ctx2.canvas.width, ctx2.canvas.height);
              x=x-m;
                ctx2.drawImage(img, spr.x, spr.y, spr.w, spr.h, x, y, chW, chH);
                //console.log(x+" "+y);
              }else{pos.end=true;}
            
            break;


        case "d":
        case "D":
        case "ArrowRight":
            if(arr[(x-4)/m*2+1+1][(y-2)/m*2+1]==0){
              if(clear) ctx2.clearRect(0,0, ctx2.canvas.width, ctx2.canvas.height);
              x=x+m;
                ctx2.drawImage(img, spr.x, spr.y, spr.w, spr.h, x, y, chW, chH);
                //console.log(x+" "+y);
              }else{pos.end=true;}
            
            break;

    }
    pos.x=x;
    pos.y=y;
}



//END GAME


//CODE FOR 1 AND 0 MAZE
    var w=30;
    var h=30;
    arr = new Array(w*2+1);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(h*2+1);
        arr[i].fill(0);
    }
var xStart=2*scale;
var yStart=2*scale;
var xSize=16*scale;

for(var i=0;i<w*2+1;i++){
        for(var j=0;j<h*2+1;j++){
            var wi=xStart+xSize/2*i;
            var hj=yStart+xSize/2*j;
            var cl=get_px(ctx,wi,hj);
            if(cl[3]!=0){
                arr[i][j]=1;
                //console.log(i+"  "+j);
                //console.log(cl);
            }
        }
    }
//ARRAY OF MAZE MADE OUT OF 1 AND 0, 90deg to left cuz of js
//console.log(arr);


//SWEET ALERT

function sweet(){
  Swal.fire({
    title: 'RULES',
    html: `
      <div>
        Press play and<br>
         solve the maze.<br>
        Use W, A, S, D keys <br
        >to move the character.<br>
        If you need help,<br> 
        press the solve button, <br>
        but be warned,<br>
         your progress<br>
          will be reset!
      </div>
    `,
    confirmButtonText: 'OK',
    customClass: {
      popup: 'sweet', 
      title: 'tit',
      confirmButton: 'butt'
    }
  });
}

function endMenu(){
  Swal.fire({
    title: 'SUCCES',
    html: "You have escaped the maze! <br> GOOD JOB",
    confirmButtonText: 'OK',
    customClass: {
      popup: 'sweet end', 
      confirmButton: 'butt2'
    }
  });
}

function endGame(){
  gameend=true;
  window.clearTimeout(timeout);
  Swal.fire({
    title: 'Game over',
    html: "YOU HAVE BEEN CAUGHT! <br> <br>",
    confirmButtonText: 'OK',
    customClass: {
      popup: 'sweet end', 
      confirmButton: 'butt2'
    }
  }).then(function(){window.location.reload();});
}
