var $canvas = $('#canvasTEST');
    var ctx = $canvas[0].getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(10,50,100,100);
 $canvas.mousedown(function (e) {
        ctx.beginPath();
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 10;
        ctx.moveTo(10,10);
     ctx.lineTo(50,200);
        ctx.stroke();
    });