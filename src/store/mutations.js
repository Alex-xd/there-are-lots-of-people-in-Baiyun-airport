/**
 *  存放根mutation
 */
import * as types from './mutation-types';

export default {
    [types.UPDATE_DATA](state, payload){
        state.data = payload.data;
        state.dataIndex = payload.dataIndex;
    },
    [types.MAP_ZOOM_IN](state) {
        state.mapZoomed = true;
    },
    [types.MAP_ZOOM_OUT](state) {
        state.mapZoomed = false;
    },
};
