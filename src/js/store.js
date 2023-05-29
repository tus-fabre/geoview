/*
 * [FILE] store.js
 *
 * [DESCRIPTION]
 *  Framework7において状態を管理する「ストア」を定義する。
 *  本アプリでは目的地の候補を列挙する
 * 
 * [NOTE]
 *  参考：https://framework7.jp/docs/store.html
 * 
 *  県庁所在地の緯度経度：https://www.benricho.org/chimei/latlng_data.html
 */
import { createStore } from 'framework7';

const store = createStore({
  state: {
    destinations: [
      {
        id: '0',
        name: 'なし',
        location: "none"
      },
      {
        id: '1',
        name: 'さいたま市',
        location: "35.85694,139.64889"
      },
      {
        id: '2',
        name: '千葉市',
        location: "35.60472,140.12333"
      },
      {
        id: '3',
        name: '新宿区',
        location: "35.68944,139.69167"
      },
      {
        id: '4',
        name: '横浜市',
        location: "35.44778,139.6425"
      },
      // 必要に応じて目的地を追加する
    ]
  },
  getters: {
    destinations({ state }) {
      return state.destinations;
    }
  },
  actions: {
    addDestination({ state }, destination) {
      state.destinations = [...state.destinations, destination];
    },
  },
})

export default store;

/*
 * HISTORY
 * [1] 2023/05/29 - First version
 */