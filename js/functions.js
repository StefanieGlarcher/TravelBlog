function canvasHelloWorld() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("Hello World", 10, 50);
}
canvasHelloWorld();

function canvasColor() {
  var c = document.getElementById("canvasVerlauf");
  var ctx = c.getContext("2d");
  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");
  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 150, 80);
}
canvasColor();
