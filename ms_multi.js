/*
drawCircle(x, y, r, w, f)
drawSpellCircle(t, num, x, y, r, sx, sy, w, flag)
drawHexagram(x, y, r, w, omega, flag)
drawHexagon(x, y, r, w, flag)
drawPentagram(x, y, r, w, flag)
drawPentagon(x, y, r, w, flag)
drawTriangle(x, y, r, w, omega, flag)
drawSquare(x, y, r, w, omega, flag)
drawCross(x, y, r, w, omega, flag)
drawSpellLine(startx, starty, endx, endy, r, sx, sy, w)
drawNStar(x, y, r, n, w, omega, d, flag)
*/
function drawCircle(x, y, r, w, flag) {
	// x: cirlcle-x, y: circle-y, r: circle-radius, w: lineWidth, flag: fill-flag
	flag = flag === undefined ? false : flag;
	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	//テキストの描画
	ctx.globalAlpha = 1;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2, false); //arc(x, y, r, start-radian, end-radian, anticclockwise);
	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.lineWidth = w;
	ctx.stroke();
	ctx.closePath();
	ctx.lineWidth = 1;

	// image object generate
	//var img = new Array();
/*
	var imgs = new Array();
	function loadImgs() {
		var imgobj = new Image();
		imgobj.src = arr[imgs.length];
		imgobj.addEventListener('load', function() {
			count++;
			imgs.push(imgobj);
			if(count == arr.length) {
				display();
			} else {
				loadImgs();
			}
		}, false);
		DebugPrint(imgs[1].src);
	}
	function display() {
		for(var i in imgs) {
			ctx.save();
			ctx.translate(cx, cy);
			ctx.rotate((120*j +  i)*5*Math.PI/180);
			ctx.drawImage(imgs[i], 145, 145, 14, 14);
			ctx.restore();
		}
	}
*/
}

function drawSpellCircle(t, num, x, y, r, sx, sy, w, flag) {
	// t: times, num: arr size, x: circle-x, y: circle-y, r: radius, sx: image-x-size, sy: image-y-size, flag: source || destination
	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	for(var j = 0; j < t; j++) {
		for(var i = 0; i < num; i++) {
			//eval("img" + i + ".onload = function() { ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI*" + w + "+ (" + 360 / t * j + " + " + i + "*" + 360 / t / num + " )*Math.PI/180); ctx.drawImage(img" + i + ", " + r + ", " + r + ", " + sx + ", " + sy + "); ctx.restore(); }");
			if(flag) {
				ctx.globalCompositeOperation = "source-over";
			} else {
				ctx.globalCompositeOperation = "source-over";
			}
			ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.PI * w + ( 360 / t * j  +  i * 360 / t / num )*Math.PI/180);
                eval("ctx.drawImage(img" + i + ", " + r + ", " + r + ", " + sx + ", " + sy + ")");
                ctx.restore();
		}
	}
}

function drawHexagram(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;

	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	//ctx.rotate(omega*Math.PI/180);
	ctx.rotate(omega);

	//パス描画
	ctx.beginPath();
	ctx.lineWidth = w;
	// triangle
	ctx.moveTo(-r*Math.sqrt(3)/2, r/2);
	ctx.lineTo(r*Math.sqrt(3)/2, r/2);
	ctx.lineTo(0, -r);
	ctx.lineTo(-r*Math.sqrt(3)/2, r/2);
	//ctx.fill();
	// reverse-triangle
	ctx.moveTo(-r*Math.sqrt(3)/2, -r/2);
	ctx.lineTo(r*Math.sqrt(3)/2, -r/2);
	ctx.lineTo(0, r);
	ctx.lineTo(-r*Math.sqrt(3)/2, -r/2);
	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawHexagon(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	//パス描画
	ctx.beginPath();
	ctx.lineWidth = w;
	// Pentagon
	ctx.moveTo(-r*Math.sqrt(3)/2, r/2);
	ctx.lineTo(-r*Math.sqrt(3)/2, -r/2);
	ctx.lineTo(0, -r);
	ctx.lineTo(r*Math.sqrt(3)/2, -r/2);
	ctx.lineTo(r*Math.sqrt(3)/2, r/2);
	ctx.lineTo(0, y+r);
	ctx.lineTo(-r*Math.sqrt(3)/2, r/2);
	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawPentagram(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.lineWidth = w;
	//パス描画
	ctx.beginPath();
	// pentagram path
	ctx.moveTo(Math.cos(0-Math.PI/10)*r, Math.sin(0-Math.PI/10)*r);
	ctx.lineTo(Math.cos(4*Math.PI/5-Math.PI/10)*r, Math.sin(4*Math.PI/5-Math.PI/10)*r);
	ctx.lineTo(Math.cos(8*Math.PI/5-Math.PI/10)*r, Math.sin(8*Math.PI/5-Math.PI/10)*r);
	ctx.lineTo(Math.cos(2*Math.PI/5-Math.PI/10)*r, Math.sin(2*Math.PI/5-Math.PI/10)*r)
	ctx.lineTo(Math.cos(6*Math.PI/5-Math.PI/10)*r, Math.sin(6*Math.PI/5-Math.PI/10)*r);
	ctx.lineTo(Math.cos(0-Math.PI/10)*r, Math.sin(0-Math.PI/10)*r);
	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawPentagon(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.lineWidth = w;
	//パス描画
	ctx.beginPath();
	// pentagram path
	ctx.moveTo(Math.cos(0-Math.PI/10)*r, Math.sin(0-Math.PI/10)*r);
	ctx.lineTo(Math.cos(8*Math.PI/5-Math.PI/10)*r, Math.sin(8*Math.PI/5-Math.PI/10)*r);
	ctx.lineTo(Math.cos(6*Math.PI/5-Math.PI/10)*r, Math.sin(6*Math.PI/5-Math.PI/10)*r);
	ctx.lineTo(Math.cos(4*Math.PI/5-Math.PI/10)*r, Math.sin(4*Math.PI/5-Math.PI/10)*r);
	ctx.lineTo(Math.cos(2*Math.PI/5-Math.PI/10)*r, Math.sin(2*Math.PI/5-Math.PI/10)*r)
	ctx.lineTo(Math.cos(0-Math.PI/10)*r, Math.sin(0-Math.PI/10)*r);
	ctx.lineTo(Math.cos(0-Math.PI/10)*r, Math.sin(0-Math.PI/10)*r);

	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawTriangle(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.lineWidth = w;
	//パス描画
	ctx.beginPath();
	// pentagram path
	ctx.moveTo(-r*Math.cos(Math.PI/6), r*Math.sin(Math.PI/6));
	ctx.lineTo(0, -r*2*Math.sin(Math.PI/6));
	ctx.lineTo(r*Math.cos(Math.PI/6), r*Math.sin(Math.PI/6));
	ctx.lineTo(-r*Math.cos(Math.PI/6), r*Math.sin(Math.PI/6));

	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawSquare(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 45 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.lineWidth = w;
	//パス描画
	ctx.beginPath();
	// pentagram path
	ctx.moveTo(-r*Math.sin(Math.PI/4), r*Math.sin(Math.PI/4));
	ctx.lineTo(-r*Math.sin(Math.PI/4), -r*Math.sin(Math.PI/4));
	ctx.lineTo(r*Math.sin(Math.PI/4), -r*Math.sin(Math.PI/4));
	ctx.lineTo(r*Math.sin(Math.PI/4), r*Math.sin(Math.PI/4));
	ctx.lineTo(-r*Math.sin(Math.PI/4), r*Math.sin(Math.PI/4));

	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawCross(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.lineWidth = w;

	if(flag) {
		ctx.beginPath();
		ctx.moveTo(-r*Math.cos(Math.PI/9), r*Math.sin(Math.PI/9));
		ctx.lineTo(-4/5*r*Math.cos(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.cos(Math.PI/18));
		ctx.lineTo(-r*Math.sin(Math.PI/9), r*Math.cos(Math.PI/9));

		ctx.arc(0, 0, r, Math.PI/2 + Math.PI/9, Math.PI/2 - Math.PI/9, true);
		//ctx.lineTo(r*Math.sin(Math.PI/9), r*Math.cos(Math.PI/9));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.cos(Math.PI/18));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(4/5*r*Math.cos(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(r*Math.cos(Math.PI/9), r*Math.sin(Math.PI/9));

		ctx.arc(0, 0, r, Math.PI/9, -Math.PI/9, true);
		ctx.lineTo(4/5*r*Math.cos(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.cos(Math.PI/18));
		ctx.lineTo(r*Math.sin(Math.PI/9), -r*Math.cos(Math.PI/9));

		ctx.arc(0, 0, r, 3/2*Math.PI + Math.PI/9, 3/2*Math.PI - Math.PI/9, true);
		//ctx.lineTo(-r*Math.sin(Math.PI/9), -r*Math.cos(Math.PI/9));
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.cos(Math.PI/18));
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(-4/5*r*Math.cos(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(-r*Math.cos(Math.PI/9), -r*Math.sin(Math.PI/9));

		ctx.arc(0, 0, r, Math.PI + Math.PI/9, Math.PI - Math.PI/9, true);
		//ctx.lineTo(-r*Math.cos(Math.PI/9), r*Math.sin(Math.PI/9));
		
		ctx.fillStyle= "#fff";
		ctx.fill();
		ctx.closePath();
	}
	//パス描画
	ctx.beginPath();
	// cross path
	ctx.moveTo(-r*Math.cos(Math.PI/9), r*Math.sin(Math.PI/9));
	ctx.lineTo(-4/5*r*Math.cos(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.cos(Math.PI/18));
	ctx.lineTo(-r*Math.sin(Math.PI/9), r*Math.cos(Math.PI/9));

	ctx.moveTo(r*Math.cos(Math.PI/9), r*Math.sin(Math.PI/9));
	ctx.lineTo(4/5*r*Math.cos(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(4/5*r*Math.sin(Math.PI/18), 4/5*r*Math.cos(Math.PI/18));
	ctx.lineTo(r*Math.sin(Math.PI/9), r*Math.cos(Math.PI/9));

	ctx.moveTo(r*Math.cos(Math.PI/9), -r*Math.sin(Math.PI/9));
	ctx.lineTo(4/5*r*Math.cos(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.cos(Math.PI/18));
	ctx.lineTo(r*Math.sin(Math.PI/9), -r*Math.cos(Math.PI/9));

	ctx.moveTo(-r*Math.cos(Math.PI/9), -r*Math.sin(Math.PI/9));
	ctx.lineTo(-4/5*r*Math.cos(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.sin(Math.PI/18));
	ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.cos(Math.PI/18));
	ctx.lineTo(-r*Math.sin(Math.PI/9), -r*Math.cos(Math.PI/9));

	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawTrident(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	//ctx.rotate(omega*Math.PI/180);
	ctx.rotate(omega);

		ctx.beginPath();
		ctx.moveTo(-r*Math.sin(Math.PI/3-Math.PI/9), r*Math.cos(Math.PI/3-Math.PI/9)); // 1
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/3-Math.PI/18), 4/5*r*Math.cos(Math.PI/3-Math.PI/18));
		ctx.lineTo(0, Math.sqrt(3)*2/3*4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/3-Math.PI/18), 4/5*r*Math.cos(Math.PI/3-Math.PI/18));
		ctx.lineTo(r*Math.sin(Math.PI/3-Math.PI/9), r*Math.cos(Math.PI/3-Math.PI/9)); // 2
		//ctx.arc(0, 0, r, -(330 - 20) * Math.PI / 180, -(330 + 20) * Math.PI / 180, true);
		ctx.lineTo(r*Math.sin(Math.PI/3+Math.PI/9), r*Math.cos(Math.PI/3+Math.PI/9)); // 3

		ctx.lineTo(4/5*r*Math.sin(Math.PI/3+Math.PI/18), 4/5*r*Math.cos(Math.PI/3+Math.PI/18));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/18), -Math.sqrt(3)*1/3*4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.cos(Math.PI/18));
		ctx.lineTo(r*Math.sin(Math.PI/9), -r*Math.cos(Math.PI/9)); // 4
		//ctx.arc(0, 0, r, -(90 - 20) * Math.PI / 180, -(90 + 20) * Math.PI / 180, true);
		ctx.lineTo(-r*Math.sin(Math.PI/9), -r*Math.cos(Math.PI/9)); // 5

		ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), -4/5*r*Math.cos(Math.PI/18));
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/18), -Math.sqrt(3)*1/3*4/5*r*Math.sin(Math.PI/18));
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/3+Math.PI/18), 4/5*r*Math.cos(Math.PI/3+Math.PI/18));
		ctx.lineTo(-r*Math.sin(Math.PI/3+Math.PI/9), r*Math.cos(Math.PI/3+Math.PI/9)); // 6
		//ctx.arc(0, 0, r, -(210 - 20) * Math.PI / 180, -(210 + 20) * Math.PI / 180, true);
		ctx.lineTo(-r*Math.sin(Math.PI/3-Math.PI/9), r*Math.cos(Math.PI/3-Math.PI/9)); // 1
		ctx.lineTo(-4/5*r*Math.sin(Math.PI/3-Math.PI/18), 4/5*r*Math.cos(Math.PI/3-Math.PI/18));

	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.lineWidth = w;
	ctx.stroke();
		
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
}

function drawSpellLine(startx, starty, endx, endy, r, sx, sy, w) {
	// t: times, num: arr size, x: circle-x, y: circle-y, r: radius, sx: image-x-size, sy: image-y-size, flag: source || destination
	len = Math.sqrt(Math.pow(startx - endx, 2) + Math.pow(starty - endy, 2));
	w = (endy - starty) / (endx - startx);
	w = Math.atan(w);
	if(startx > endx) {
		w += Math.PI;
	}
	t = Math.floor(len / (sx * 2/3 * arr.length));
	num = Math.floor(len - t * 2 / 3 *arr.length * sx) / (2/3*sx);
	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
    ctx.translate(startx, starty);
    ctx.rotate(w);
    ctx.translate(0, -3*sx/5);
	ctx.fillStyle = "rgb(200, 200, 200)";
	//ctx.fillRect(0, sx/5, t*2/3*sx*arr.length+sx*2/3*num, 4*sx/5);
	ctx.fillRect(0, 0, t*2/3*sx*arr.length+sx*2/3*num, 6*sx/5);
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(t*2/3*sx*arr.length+num*2/3*sx,0);
	ctx.moveTo(0,sx/5);
	ctx.lineTo(t*2/3*sx*arr.length+num*2/3*sx,sx/5);

	ctx.moveTo(0,sx);
	ctx.lineTo(t*2/3*sx*arr.length+num*2/3*sx,sx);
	ctx.moveTo(0,sx+sx/5);
	ctx.lineTo(t*2/3*sx*arr.length+num*2/3*sx,sx+sx/5);
	ctx.stroke();
	ctx.closePath();

    ctx.translate(0, sx/10);
	for(var j = 0; j < t; j++) {
		for(var i = 0; i < arr.length; i++) {
            eval("ctx.drawImage(img" + i + ", " + j*16*sx + " + " + i*2*sx/3 + ", " + 0 + ", " + sx + ", " + sy + ")");
		}
	}
		for(var i = 0; i < Math.floor(num); i++) {
            eval("ctx.drawImage(img" + i + ", " + t*16*sx + " + " + i*2*sx/3 + ", " + 0 + ", " + sx + ", " + sy + ")");
		}
    ctx.restore();
}

function drawNStar(x, y, r, n, w, omega, d, flag) {
	// [[ a few Bug are here ... ]]
	// n > 5
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.lineWidth = w;
	//パス描画
	ctx.beginPath();
	var angle = (-1*Math.PI / 2);
	ctx.moveTo(r*Math.cos(angle), r*Math.sin(angle));
	if (n % 4 == 0)
		var mu = n - 2;
	else if (n % 2 == 0)
		var mu = n + 4;
	else if (n >= 2*Math.floor(d) + 3 && Math.floor(d) > 0)
		var mu = 4 * Math.floor(d);
	else
		var mu = 4;
	DebugPrint(mu);
	for (var i = 0; i <= n; i++) {
		angle = angle + mu*Math.PI/n;
		ctx.lineTo(r*Math.cos(angle), r*Math.sin(angle));
	}
	if(flag) {
		ctx.fillStyle= "#fff";
		ctx.fill();
	}
	ctx.stroke();
	ctx.restore();
	ctx.closePath();
	ctx.lineWidth = 1;
};


function drawSpellTriangle(x, y, r, w, omega, flag) {
	flag = flag === undefined ? false : flag;
	omega = omega === undefined ? 0 : omega;
	var canvas = document.getElementById('header_wave');
	if( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(omega*Math.PI/180);
	ctx.closePath();
	ctx.restore();
}

function rec5Star(x, y, r, w, omega, t) {
    if(t > 3) {
        DebugPrint("test");
        return;
    }
    DebugPrint(t);
    drawPentagram(x, y, r, w, omega);
    r = Math.sin(Math.PI/5) * r * 2; // 五角形1辺
    r = r / (3 + Math.sqrt(5)) * 2; // 五芒星内五角形1辺
    r = r / 2 / Math.sin(Math.PI / 5); // 五芒星内五角形の外接円半径
    //r = r / 2 / Math.tan(Math.PI/5); // 五芒星内五角形の内接円半径
    omega += 180 / 5; // 五芒星内に五芒星を交点に合わせて描画するための回転度計算
    rec5Star(x, y, r, w, omega, ++t);
}

function rec6Star(x, y, r, w, omega, t) {
    if(t > 8) {
        DebugPrint("test");
        return;
    }
    drawHexagram(x, y, r, w, omega);
    r = r * Math.sqrt(3) / 3; // 六芒星内六角形の外接円半径
    //r = r / 2; // 六芒星内六角形の内接円半径
    omega += Math.PI / 6;
    rec6Star(x, y, r, w, omega, ++t);
}


function DebugPrint(str) {
	var out = document.getElementById("debug");
	if(!out) return;
	out.value += str + "\n";
}
function PrintClear() {
	var out = document.getElementById("debug");
	if(!out) return;
	out.value = "";
}

function sleep(time) {
	var d1 = new Date().getTime();
	var d2 = new Date().getTime();
	while (d2 < d1 + time) {
		d2 = new Date().getTime();
	}
	return;
}
