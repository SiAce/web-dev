const request = require('request');

request('http://www.baidu.com', (err, res, body) => {
  if (!err && res.statusCode === 200) {
    console.log(body);
  }
});
