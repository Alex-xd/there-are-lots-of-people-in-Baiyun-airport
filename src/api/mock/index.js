import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import apiList from '../apiList';
const mock = new MockAdapter(axios);

export default function () {
    mock.onPost(apiList.match_vehicle).reply(200, {
        status: 1
    });
    mock.onGet(apiList.list_vechileinfos).reply(200, {
        numCode: 1,
        startTime: 1440000000,
        endTime: 213,
        quantity: 40,
        isCar: '有',
        state: 0,
        matchPairs: ['zz', 'aa', 'qq']
    });
}
