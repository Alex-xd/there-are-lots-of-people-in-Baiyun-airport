/**
 * 开发环境和线上环境分别配置
 *
 * baseUrl: 域名地址
 * imgBaseUrl: 图片所在域名地址
 *
 */
let domain;
let baseUrl;

if (process.env.NODE_ENV === 'development') {
    domain = '';
} else {
    domain = 'exp-solver.alexxd.com';
}

baseUrl = `http://${domain}`;

export {
    domain,
    baseUrl
};
