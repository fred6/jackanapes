var c1 = document.getElementById("c1").getContext("2d");
var c2 = document.getElementById("c2").getContext("2d");
var PI = Math.PI;

function drawDot ( c, x, y, r ) {
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

function draw ( canvas, fs, cx, cy, s) {
    var N = fs[0];
    var dotrad = 2*s / (N + 2.5);
    var coords = ngon_coords ( N, cx, cy, s, dotrad );

    var cc; //current coord
    for ( var p = 0; p < coords.length; p++ ) {
        cc = coords[p];
        if ( fs.length > 1 ) {
            draw ( canvas, fs.slice(1), cc[0], cc[1], dotrad );
        } else {
            drawDot ( canvas, cc[0], cc[1], dotrad );
        }
    }
}


draw (c1, [4, 3], 150, 300, 120 );
draw (c1, [3, 4], 450, 315, 120 );
//draw (c1, [7, 2, 3], 300, 300, 270 );
//draw (c2, [5, 4, 3], 300, 300, 270 );


