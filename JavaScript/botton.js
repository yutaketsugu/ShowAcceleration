var aX = 0, aY = 0, aZ = 0;                     // 加速度の値を入れる変数を3個用意
var flag = true;
var cnt = 0;
var arrX = new Array(40);
var arrY = new Array(40);
var arrZ = new Array(40);
 
// 加速度センサの値が変化したら実行される devicemotion イベント
window.addEventListener("devicemotion", (dat) => {
    aX = dat.accelerationIncludingGravity.x;    // x軸の重力加速度（Android と iOSでは正負が逆）
    aY = dat.accelerationIncludingGravity.y;    // y軸の重力加速度（Android と iOSでは正負が逆）
    aZ = dat.accelerationIncludingGravity.z;    // z軸の重力加速度（Android と iOSでは正負が逆）
});
 
// 指定時間ごとに繰り返し実行される setInterval(実行する内容, 間隔[ms]) タイマーを設定
var timer = window.setInterval(() => {
    if(flag) {
        displayData();      // displayData 関数を実行
        arrX[i] = aX;
        arrY[i] = aY;
        arrZ[i] = aZ;
        cnt++;
    }
}, 20); // 33msごとに（1秒間に約20回）
 
// データを表示する displayData 関数
function displayData() {
    var txt = document.getElementById("txt");   // データを表示するdiv要素の取得
    txt.innerHTML = "x: " + aX + "<br>"         // x軸の値
                  + "y: " + aY + "<br>"         // y軸の値
                  + "z: " + aZ;                 // z軸の値
}

for(var i = 0; i < arrX.length; i++) {
    document.getElementById('list').appendChild(arrX[i]);
}

function OnOffButton(){
    if(flag) {
        flag = false;
    }
}
