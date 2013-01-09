var c = document.getElementById("c").getContext("2d");
var PI = Math.PI;

function drawDot ( x, y, r ) {
    c.beginPath();
    c.arc(x, y, r, 0, 2 * PI);
    c.fill();
}
        
function ngon_coords(N, cx, cy, s, dotrad) {
    var ang = 2*PI/N;
    var phi = (PI - ang)/2;

    var coords = [],
        xoff,
        yoff;
    for ( var i = 0; i < N; i++ ) {
        xoff = (s - dotrad) * Math.cos(phi - i*ang);
        yoff = (s - dotrad) * Math.sin(phi - i*ang);
        coords.push([cx + xoff, cy + yoff]);
    }
    return coords;
}

function draw ( N, cx, cy, s) {
    var dotrad = 2*s / (N + 3);
    var coords = ngon_coords ( N, cx, cy, s, dotrad );
    for ( var p = 0; p < coords.length; p++ ) {
        drawDot ( coords[p][0], coords[p][1], dotrad );
    }
}


draw ( 5, 300, 300, 270 );


