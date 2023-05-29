/*
 * [FILE] time_util.js
 *
 * [DESCRIPTION]
 *  時間に関わる関数を定義するファイル
 * 
 * [NOTE]
 */

/*
 * [FUNCTION] timestampToDatetime()
 *
 * [DESCRIPTION]
 *  タイムスタンプを年月日時刻に変換する
 * 
 * [INPUTS]
 *  timestamp - 変換するタイムスタンプ（単位はミリ秒とする）
 * 
 * [OUTPUTS]
 *  YYYY-MM-DD HH:mm:ss
 * 
 * [NOTE]
 */
export function timestampToDatetime(timestamp) {
    const date = new Date(timestamp);
    const yyyy = `${date.getFullYear()}`;
    // .slice(-2)で文字列中の末尾の2文字を取得する
    // `0${date.getHoge()}`.slice(-2) と書くことで０埋めをする
    const MM = `0${date.getMonth() + 1}`.slice(-2); // getMonth()の返り値は0が基点
    const dd = `0${date.getDate()}`.slice(-2);
    const HH = `0${date.getHours()}`.slice(-2);
    const mm = `0${date.getMinutes()}`.slice(-2);
    const ss = `0${date.getSeconds()}`.slice(-2);
  
    return `${yyyy}/${MM}/${dd} ${HH}:${mm}:${ss}`;
}
/*
 * HISTORY
 * [1] 2023/05/29 - First release
 */
