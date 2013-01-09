var c = document.getElementById("c").getContext("2d");
var PI = Math.PI;

function drawDot ( x, y, r ) {
    c.beginPath();
    c.arc(x, y, r, 0, 2 * PI);
    c.fill();
}
        
function ngon_coords(N, cx, cy, s) {
    var ang = 2*PI/N;
    var phi = (PI - ang)/2;

    var coords = [];
    for ( var i = 0; i < N; i++ ) {
        coords.push([cx + s*Math.cos(phi - i*ang), cy + s*Math.sin(phi - i*ang)]);
    }
    return coords;
}

function draw ( N, cx, cy, s) {
    var coords = ngon_coords ( N, cx, cy, s );
    for ( var p = 0; p < coords.length; p++ ) {
        drawDot ( coords[p][0], coords[p][1], 20 );
    }
}


draw ( 3, 300, 300, 270 );


