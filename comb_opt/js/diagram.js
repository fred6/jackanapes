var sg = document.getElementById("simple_graph").getContext("2d");
var csg = document.getElementById("complete_simple_graph").getContext("2d");
var wcsg = document.getElementById("weighted_complete_simple_graph").getContext("2d");
var PI = Math.PI;

function drawDot ( c, x, y, r ) {
    c.beginPath();
    c.arc(x, y, r, 0, 2 * PI);
    c.fill();
}
        
function draw ( canvas, pts ) {
    for ( var i = 0; i < pts.length; i++ ) {
        console.log(pts[i]);
        drawDot ( canvas, pts[i][0], pts[i][1], 5 );
    }
}


var exgraph = [{x: 50, y: 50},
               {x: 120, y: 80},
               {x: 200, y: 30}];
draw (sg, exgraph);


