const RQWrapper = require('./functions');
const max_redirect = 10;
const redirect_code = [300, 301, 302, 303, 304, 305, 306, 307, 308];
var rq = new RQWrapper();

var url = ['http://saku.fun'];

url.forEach( function(value) {
    for (let i=0; i < max_redirect; i++){
        var res = rq.getStatus(value);
        console.log(res);
        if ( !redirect_code.includes(res.code) ) {
            break;
        }
        value = res.location;
    }
}

);

console.log(rq.auth('test', 'test'));
