const { User } = require('../../db/models/userWordsModel');
// const request = require('request');
const requestPromise = require('request-promise');
// add http
// const http = require('http');
//add clientId and apikey
const api = require('../../apiKey');

const userCtrl = {
  get: function(req, res) {
    User.find({}, function(err, data) {
      if (err) {
        console.log('error in GET');
        res.status(404);
      } else {
        console.log(data);
        res.status(200).send(data);
      }
    })
  },
  post: function(req, res) {
    var clientId = api.clientId;
    var clientSecret = api.clientSecret;

    var options = {
      method: "POST",
      url: "http://api.whatsmate.net/v1/translation/translate",
      headers: {
        "Content-Type": "application/json",
        "X-WM-CLIENT-ID": clientId,
        "X-WM-CLIENT-SECRET": clientSecret,
        "Content-Length": Buffer.byteLength(JSON.stringify(req.body))
      },
      body: {
        fromLang: "en",
        toLang: "tl",
        text: req.body.text
      },
      json: true
    };

    requestPromise(options)
      .then(res => {
        req.body.text = res;
        var fetchedData = req.body
        var newUser = new User(fetchedData);

        newUser.save(err => {
          if (err) {
            console.log('error saving to db ', err);
          } else {
            console.log('saved to db');
          }
        })
      })
      .catch(err => {
        console.log('error posting ',err);
      });

    res.send(req.body).status(201);
  }
}
// const newUser = new User(req.body);
// newUser.save(err => {
//   if (err) {
//     console.log('error in POST');
//   } else {
//     console.log('POST successful');
//     res.send(newUser).status(201);
//   }
// });
module.exports.userCtrl = userCtrl;

// app.post('/user', (req, res) => {
//   console.log(req.body.word);
//   var clientId = "gonzales_pao@yahoo.com";
//   var clientSecret = "bc678796c7d24c859dd9a670268a397e";
//
//
//   var options = {
//     hostname: "api.whatsmate.net",
//     port: 80,
//     path: "/v1/translation/translate",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-WM-CLIENT-ID": clientId,
//       "X-WM-CLIENT-SECRET": clientSecret,
//       "Content-Length": Buffer.byteLength(JSON.stringify(req.body))
//     }
//   };
//
//   var request = new http.ClientRequest(options);
//   request.end(JSON.stringify(req.body));
//
//   request.on('response', function (response) {
//     console.log('Status code: ' + response.statusCode);
//     response.setEncoding('utf8');
//     response.on('data', function (chunk) {
//       console.log('Translated text:');
//       console.log(chunk);
//     });
//   })
// })

// var clientId = "FREE_TRIAL_ACCOUNT";
// var clientSecret = "PUBLIC_SECRET";
//
// var fromLang = "en";
// var toLang = "tl";
// var text = "Let's have some fun!";
//
// var jsonPayload = JSON.stringify({
//     fromLang: fromLang,
//     toLang: toLang,
//     text: text
// });
//
// var options = {
//     hostname: "api.whatsmate.net",
//     port: 80,
//     path: "/v1/translation/translate",
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "X-WM-CLIENT-ID": clientId,
//         "X-WM-CLIENT-SECRET": clientSecret,
//         "Content-Length": Buffer.byteLength(jsonPayload)
//     }
// };
//
// var request = new http.ClientRequest(options);
// request.end(jsonPayload);
//
// request.on('response', function (response) {
//     console.log('Status code: ' + response.statusCode);
//     response.setEncoding('utf8');
//     response.on('data', function (chunk) {
//         console.log('Translated text:');
//         console.log(chunk);
//     });
// });
