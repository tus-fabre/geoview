/*
 * [FILE] distance.js
 *
 * [DESCRIPTION]
 *  緯度経度と距離の計算に係る関数
 * 
 * [NOTE]
 *  
 */

const pole_radius = 6356752.314245;  // 極半径
const equator_radius = 6378137.0;    // 赤道半径

/*
 * [FUNCTION] calcDistance()
 *
 * [DESCRIPTION]
 *  起点となる緯度経度から目的の緯度経度までの距離を求める
 * 
 * [INPUTS]
 *  fromLat - 起点となる緯度
 *  fromLon - 起点となる経度
 *  toLat   - 終点の緯度
 *  toLon   - 終点の経度
 * 
 * [OUTPUTS]
 *  距離（メートル）
 * 
 * [NOTE]
 */
export function calcDistance(fromLat, fromLon, toLat, toLon) {

    // 緯度経度をラジアンに変換
    let lat_1 = convertDeg2Rad(fromLat);
    let lon_1 = convertDeg2Rad(fromLon);
    let lat_2 = convertDeg2Rad(toLat);
    let lon_2 = convertDeg2Rad(toLon);

    let lat_difference = lat_1 - lat_2; // 緯度差
    let lon_difference = lon_1 - lon_2; // 経度差
    let lat_average = (lat_1 + lat_2) / 2; // 平均緯度

    // 第一離心率^2第一離心率^2
    let e2 = (Math.pow(equator_radius, 2) - Math.pow(pole_radius, 2)) / Math.pow(equator_radius, 2);

    let w = Math.sqrt(1- e2 * Math.pow(Math.sin(lat_average), 2));

    // 子午線曲率半径
    let m = equator_radius * (1 - e2) / Math.pow(w, 3); 
    // 卯酉線曲半径
    let n = equator_radius / w;

    // 距離計測
    let distance = Math.sqrt(Math.pow(m * lat_difference, 2) + Math.pow(n * lon_difference * Math.cos(lat_average), 2));

    return distance;
}
/*
 * HISTORY
 * [1] 2023/05/29 - First release
 */

/*
 * [FUNCTION] convertDeg2Rad()
 *
 * [DESCRIPTION]
 *  角度をラジアン値に変換する
 * 
 * [INPUTS]
 *  degrees - 角度
 * 
 * [OUTPUTS]
 *  ラジアン値
 * 
 * [NOTE]
 */
function convertDeg2Rad(degrees) {
    return degrees * (Math.PI / 180);
}
/*
 * HISTORY
 * [1] 2023/05/29 - First release
 */
