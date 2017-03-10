import api from 'api/config'

//-----------------------------------------------------------
//  首页话题列表
//  请求路径：/shequ/index
//  请求方式：POST
//  请求参数： int page     (require=false)  不传默认为 1
//  返回值类型：json
//-----------------------------------------------------------
export const getTopicList = (body) => {
    return api.post('/api/shequ/getIndexTopicList', body);
}

//-----------------------------------------------------------
//  首页获取杂谈/二手数量
//  请求路径：/topic/getTopicNumByGroup
//  请求方式：POST
//  返回值类型：json
//-----------------------------------------------------------
export const getIndexBasicInfo = (body) => {
    return api.post('/api/shequ/getIndexBasicInfo', body);
}


