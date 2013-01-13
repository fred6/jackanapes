var c1 = document.getElementById("c1").getContext("2d");
var c2 = document.getElementById("c2").getContext("2d");
var PI = Math.PI;

function drawDot ( c, x, y, r, color ) {
    color = color || "#000000";
    c.beginPath();
    c.arc(x, y, r, 0, 2 * PI);
    c.fillStyle = color;
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

// color_config is an object with properties 'number' and 'color'
//   number -- number of the vertices to color differently
//   color -- the fill color of the dots
function draw ( canvas, fs, cx, cy, s, color_config) {
    var N = fs[0];
    var dotrad = 2*s / (N + 2.5); // empirically adjusted, no real good reason
    var coords = ngon_coords ( N, cx, cy, s, dotrad );

    var cc; //current coord
    var next_N = fs.slice(1,2);
    for ( var p = 0; p < coords.length; p++ ) {

        cc = coords[p];
        if ( color_config && p < color_config.number ) {
            if ( fs.length > 1 ) {
                draw ( canvas, fs.slice(1), cc[0], cc[1], dotrad,
                        {number: next_N, 
                         color: color_config.color} );
            } else {
                drawDot ( canvas, cc[0], cc[1], dotrad, 
                          color_config.color );
            }
        } else {
            if ( fs.length > 1 ) {
                draw ( canvas, fs.slice(1), cc[0], cc[1], dotrad );
            } else {
                drawDot ( canvas, cc[0], cc[1], dotrad );
            }
        }

    }
}


draw (c1, [5, 3], 150, 300, 115, {number: 5, color: '#d3121c'} );
draw (c1, [7, 3], 450, 315, 115, {number: 5, color: '#d3121c'} );
//draw (c1, [7, 2, 3], 300, 300, 270 );
//kdraw (c2, [5, 4, 3], 300, 300, 270 );


