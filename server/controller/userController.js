const { User } = require('../../db/models/userWordsModel');
const request = require('request');

const userCtrl = {
  get: function(req, res) {
    User.find({}, function(err, data) {
      if (err) {
        console.log('error in GET');
        res.status(404);
      } else {
        console.log('GET successful');
        res.status(200).send(data);
      }
    })
  },
  post: function(req, res) {
    const newUser = new User(req.body);
    newUser.save(err => {
      if (err) {
        console.log('error in POST');
      } else {
        console.log('POST successful');
        res.send(newUser).status(201);
      }
    });
  }
}

module.exports.userCtrl = userCtrl;

var clientId = "FREE_TRIAL_ACCOUNT";
var clientSecret = "PUBLIC_SECRET";

var fromLang = "en";
var toLang = "tl";
var text = "Let's have some fun!";

var jsonPayload = JSON.stringify({
    fromLang: fromLang,
    toLang: toLang,
    text: text
});

var options = {
    hostname: "api.whatsmate.net",
    port: 80,
    path: "/v1/translation/translate",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-WM-CLIENT-ID": clientId,
        "X-WM-CLIENT-SECRET": clientSecret,
        "Content-Length": Buffer.byteLength(jsonPayload)
    }
};

var request = new http.ClientRequest(options);
request.end(jsonPayload);

request.on('response', function (response) {
    console.log('Status code: ' + response.statusCode);
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log('Translated text:');
        console.log(chunk);
    });
});
