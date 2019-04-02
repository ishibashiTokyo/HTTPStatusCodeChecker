module.exports = class RQWrapper {
    constructor(){
        this.request = require('sync-request');
    }

    getStatus(url_str) {
        var req =  this.request('GET', url_str, {
            timeout: 1500,
            headers: {
                'User-Agent': 'HTTPStatusCodeChecker/robot',
            },
            followRedirects: false,
        });
        return {'url':url_str, 'code':req.statusCode, 'location':req.headers.location};
    }

    auth(user, passwd) {
        return 'Authorization:Basic ' + Buffer(user + ':' + passwd).toString('base64');
    }

}
