/**
 *  存放根mutation
 */
import * as types from './mutation-types';
import constants from '@/utils/constants';

export default {
    [types.LOG_IN](state){
        if (!state.hasLogin) {
            state.hasLogin = !state.hasLogin;
        }
    },
    [types.LOG_OUT](state){
        if (state.hasLogin) {
            state.hasLogin = !state.hasLogin;
        }
    },
};


