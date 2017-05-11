/**
 * 开发环境和线上环境分别配置
 *
 * domain: 域名
 * baseUrl: url
 *
 */
let domain;

if (process.env.NODE_ENV === 'development') {
    domain = '';
} else {
    domain = 'baiyun.alexxd.com';
}

let baseUrl = `https://${domain}`;

export {
    domain,
    baseUrl
};
