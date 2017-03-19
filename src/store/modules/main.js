import * as types from '../mutation-types';

export default {
    state: {
        mapZoomed: false
    },
    mutations: {
        [types.MAP_ZOOM_IN] (state) {
            state.mapZoomed = true;
        },
        [types.MAP_ZOOM_OUT] (state) {
            state.mapZoomed = false;
        }
    }
}