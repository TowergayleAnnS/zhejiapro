var appkey = '25071738'
var secret = '27064c3eaa84dc614b9359303a09b989'
var pageSize = 20
var adzone_id = '23993850341'
var client = new TopClient({
	'appkey': appkey,
	'appsecret': secret,
	'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

module.exports = client