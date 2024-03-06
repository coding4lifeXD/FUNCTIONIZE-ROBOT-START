// DRAW ROBOT FACE

// CIRCLE FUNCTION
function circle(x, y, r, type, color) {
  type == "fill" ? ctx.fillStyle = `rgb(${color}, ${color}, ${color})` : ctx.strokeStyle = `rgb(${color}, ${color}, ${color})` 
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type!="fill") {
    ctx.stroke()
    return;
  } 
  ctx.fill()
}

// RECTANGLE FUNCTION 
function rect(x, y, w, h, type, color) {
  type == "fill" ? ctx.fillStyle = `rgb(${color}, ${color}, ${color})` : ctx.strokeStyle = `rgb(${color}, ${color}, ${color})`
  ctx.fillRect(x, y, w, h);
}

// LINE FUNCTION
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// TRIANGLE FUNCTION 
function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (type == "fill") {
    ctx.fill()
  }
  else {
    ctx.closePath()
    ctx.stroke()
  }
  
  type == "fill" ? ctx.fill(): ctx.closePath()  
}

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
rect(80, 260, 460, 80, "fill", 100)
// HAIR 
  // Circle for Hair
  circle(180, 100, 40, "fill", 100)
  circle(180, 100, 40, "stroke")
  // Circle for Hair
  circle(260, 100, 40, "fill", 100)
  // Circle for Hair
  circle(260, 100, 40, "stroke")
  
  // Circle for Hair
  circle(340, 100, 40, "fill", 100)
  circle(340, 100, 40, "stroke")

  // Circle for Hair
  circle(420, 100, 40, "fill", 100)
  circle(420, 100, 40, "stroke")

// Filled Triangle for Neck

triangle(300, 200, 220, 600, 380, 600, "fill")

// Rectangle Head
rect(100, 100, 400, 400, "fill", 180)

// Filled Circle for Left Eye Socket
circle(200, 250, 50, "fill", 235)

// Filled Circle for Right Eye Socket
circle(400, 250, 50, "fill", 235)

// Rectangle for Mouth
rect(200, 350, 200, 60, "stroke", 235)

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380)

// First Vertical Line for Teeth
line(250, 350, 250, 410)

// Second Vertical Line for Teeth
line(300, 350, 300, 410)

// Third Vertical Line for Teeth
line(350, 350, 350, 410)

// Filled Circle for Left Eye
circle(200, 250, 30, "fill", 100)

// Filled Circle for Right Eye
circle(400, 250, 10, "fill", 100)

// Outlined Circle for Left Eye Socket
circle(200, 250, 50, "stroke", 100)

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke", 100)

// Line for Left Eyebrow
ctx.lineWidth = 2;
line(150, 180, 250, 180)

// Line for Right Eyebrow
line(350, 160, 450, 180)

// Outlined Triangle for Nose
triangle(300, 280, 320, 320, 280, 320)