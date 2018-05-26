const { User } = require('../../db/models/userWordsModel');

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
