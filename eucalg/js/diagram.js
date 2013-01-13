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

// takes an array of 'segment endpoints', like [2,3,4], and checks whether:
//   i < 2
//   i >= 2 and i < 5
//   i >= 5 and i < 7
// returns the segment number (starting from 0) if we can locate where i should be
// and false otherwise
function get_segment ( arr, i ) {
    var sum = 0, temp;
    for ( var j = 0; j < arr.length; j++ ) {
        temp = sum + arr[j];
        if ( i >= sum && i < temp ) {
            return j;
        }
        sum = temp;
    }

    return false;
}

// color_config is an array of objects with properties 'number' and 'color'
//   number -- number of the vertices to color differently
//   color -- the fill color of the dots
function draw ( canvas, fs, cx, cy, s, color_config) {
    var N = fs[0];
    console.log('\n############\ndraw for N = '+N);
    console.log('############');
    var dotrad = 2*s / (N + 2.5); // empirically adjusted, no real good reason
    var coords = ngon_coords ( N, cx, cy, s, dotrad );

    var cc; //current coord
    var next_N = fs.slice(1,2);

    var check_color_cfg = function( p ) {
        if ( color_config ) {
            var arr = [];
            for ( var j = 0; j < color_config.length; j++ ) {
                arr.push ( color_config[j].number );
            }

            console.log('inside cc, before get');
            console.log(arr);
            console.log(p);
            var get = get_segment ( arr, p );
            console.log('inside ccc, after get for N = '+N+', p = '+p);
            console.log('   get = '+get);
            if ( get !== false ) {
                return color_config[get].color;
            }
        }

        return false;
    };

    var check;
    for ( var p = 0; p < coords.length; p++ ) {
        cc = coords[p];
        check = check_color_cfg ( p );
        console.log('checked for N = '+N+', p = '+p);
        console.log ('  -- '+check);

        if ( check !== false) {
            if ( fs.length > 1 ) {
                draw ( canvas, fs.slice(1), cc[0], cc[1], dotrad,
                        [{number: next_N, 
                         color: check}] );
            } else {
                drawDot ( canvas, cc[0], cc[1], dotrad, 
                          check );
            }
        } else {
            if ( fs.length > 1 ) {
                draw ( canvas, fs.slice(1), cc[0], cc[1], dotrad );
            } else {
                drawDot ( canvas, cc[0], cc[1], dotrad );
            }
        }

        console.log('.....');
    }
}


// seven
//draw (c1, [7], 300, 300, 80, {number: 7, color: '#4bd312'});

// 21_15_rem1
//draw (c1, [5, 3], 150, 300, 115, {number: 5, color: '#d3121c'} );
//draw (c1, [7, 3], 450, 315, 115, {number: 5, color: '#d3121c'} );

// 21_15_rem2
draw (c1, [5, 3], 150, 300, 115, [{number: 2, color: '#4bd312'},
                                   {number: 2, color: '#d75312'}] );
draw (c1, [2, 3], 450, 315, 115, [{number: 2, color: '#d7cc12'}] );

//draw (c1, [7, 2, 3], 300, 300, 270 );
//draw (c2, [5, 4, 3], 300, 300, 270 );


