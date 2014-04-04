var cW = 600;	// キャンバス横サイズ
var cH = 600;	// キャンバス縦サイズ
var cx = 300;	// 円の中心x座標
var cy = 300;	// 円の中心y座標
var cr = 270;	// 円の半径
var count = 0;
var t = 0;
var eflag = false;
var omega = 0;
var romega = 0;
var arr = new Array();
arr = ['d1', 'g1', 'h1', 'i1', 'ing1', 'j1', 'k1', 'l1', 'm1', 'n1', 'o1', 'p1', 'r1', 's1', 't1', 'th1', 'u1', 'w1', 'y1', 'z1', 'a1', 'b1', 'e1', 'f1'];
for(var i = 0; i < arr.length; i++) {
	eval("var img" + i + " = new Image();");
	eval("img" + i + ".src = " + '"img/runic/' + arr[i] + '.png";');
	eval("img" + i + ".onload = function() { count++; }");
}
window.onload = function() {
	DebugPrint(count);
	if(count < arr.length) {
		sleep(100);
	}
	draw();
	DebugPrint(count);
};
function draw() {
        // キャンバスの初期処理
        var container = document.getElementById('container');
        var canvas = document.getElementById('header_wave');
        // キャンバス定義失敗
        if ( ! canvas || ! canvas.getContext ) return false;
        // 2Dコンテキスト
        var ctx = canvas.getContext('2d');
        // 表示クリア
        //ctx.clearRect(0, 0, cW, cH);
        ctx.fillStyle= "#ffffff";
        ctx.shadowBlur = 0;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

        // event
        if(count == arr.length) {
			if(eflag) {
				timer1 = setInterval("test()", 100);
			} else {
				omega -= Math.PI / 180;
				romega -= Math.PI / 180;
				test();
			}
        }
}




function test() {
	var canvas = document.getElementById('header_wave');
	if ( ! canvas || ! canvas.getContext ) return false;
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, cW, cH);
	//t++;
	omega = omega + Math.PI / 180;
	romega = romega -  Math.PI / 180;


                drawSpellCircle(3, arr.length, cx, cy, 189, 15, 15, romega, 1);
                drawSpellCircle(5, arr.length, cx, cy, 183, 10, 10, omega, 1);
                drawSpellCircle(3, arr.length, cx, cy, 173, 15, 15, romega, 1);
                drawCircle(cx, cy, cr+15, 5, false);
                drawCircle(cx, cy, cr, 3, false);
                drawCircle(cx, cy, cr-10, 3, false);
                drawCircle(cx, cy, cr-20, 3, false);
                drawCircle(cx, cy, cr-55, 3, false);
                drawCircle(cx, cy, cr-75, 2, 0);
                drawSpellCircle(3, arr.length, cx, cy, cr-135, 20, 20, omega, 1);
                drawSpellCircle(1, 3, cx, cy, cr-255, 80, 80, 0.25+omega, 1);

                drawHexagram(cx, cy, cr-20, 5, romega);
				drawTrident(cx, cy, cr-147, 5, Math.PI*omega, true);

                // center-upper
                drawCircle(cx+(cr-60)*Math.cos(Math.PI/2+omega), cy-(cr-60)*Math.sin(Math.PI/2+omega), 40, 2, true);
                drawCircle(cx+(cr-60)*Math.cos(Math.PI/2+omega), cy-(cr-60)*Math.sin(Math.PI/2+omega), 36, 1, false);
                drawHexagram(cx+(cr-60)*Math.cos(Math.PI/2+omega), cy-(cr-60)*Math.sin(Math.PI/2+omega), 36, 2, 6*omega);
                // center-bottom
                drawCircle(cx+(cr-60)*Math.cos(-Math.PI/2+omega), cy-(cr-60)*Math.sin(-Math.PI/2+omega), 40, 2, true);
                drawCircle(cx+(cr-60)*Math.cos(-Math.PI/2+omega), cy-(cr-60)*Math.sin(-Math.PI/2+omega), 36, 1, false);
                drawHexagram(cx+(cr-60)*Math.cos(-Math.PI/2+omega), cy-(cr-60)*Math.sin(-Math.PI/2+omega), 36, 2, 6*omega);

                 // left-upper
                drawCircle(cx+(cr-60)*Math.cos(Math.PI-Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI-Math.PI/6+omega), 40, 2, true);
                drawCircle(cx+(cr-60)*Math.cos(Math.PI-Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI-Math.PI/6+omega), 36, 1, false);
                drawHexagram(cx+(cr-60)*Math.cos(Math.PI-Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI-Math.PI/6+omega), 36, 2, 6*omega);
                // left-bottom
                drawCircle(cx+(cr-60)*Math.cos(Math.PI+Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI+Math.PI/6+omega), 40, 2, true);
                drawCircle(cx+(cr-60)*Math.cos(Math.PI+Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI+Math.PI/6+omega), 36, 1, false);
                drawHexagram(cx+(cr-60)*Math.cos(Math.PI+Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI+Math.PI/6+omega), 36, 2, 6*omega);

                // right-upper
                drawCircle(cx+(cr-60)*Math.cos(Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI/6+omega), 40, 2, true);
                drawCircle(cx+(cr-60)*Math.cos(Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI/6+omega), 36, 1, false);
                drawHexagram(cx+(cr-60)*Math.cos(Math.PI/6+omega), cy-(cr-60)*Math.sin(Math.PI/6+omega), 36, 2, 6*omega);
                // right-bottom
                drawCircle(cx+(cr-60)*Math.cos(-Math.PI/6+omega), cy-(cr-60)*Math.sin(-Math.PI/6+omega), 40, 2, true);
                drawCircle(cx+(cr-60)*Math.cos(-Math.PI/6+omega), cy-(cr-60)*Math.sin(-Math.PI/6+omega), 36, 1, false);
                drawHexagram(cx+(cr-60)*Math.cos(-Math.PI/6+omega), cy-(cr-60)*Math.sin(-Math.PI/6+omega), 36, 2, 6*omega);

}

function EvolutionPicture() {
	if(!eflag) {
		eflag = true;
		draw();
	}
}
function StopPicture() {
	clearTimeout(timer1);
	eflag = false;
}
