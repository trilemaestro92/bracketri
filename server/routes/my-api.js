const db = require('../models/index');

module.exports = function (app) {

  app.post("/my-api/submit", function (req, res) {
    db.Bracket.create(req.body)
      .then(function (user) {
        res.json(user)
        console.log(user)
        console.log(user.email)
        return db.User.findOneAndUpdate({ email: user.creator }, { $push: { tournaments: user._id } }, { new: true });
      })
  })

  app.get("/my-api/populated", function (req, res) {
    db.User.find({})
      .populate("tournaments")
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.delete('/my-api/delete/:itemID', function (req, res) {
    // console.log("The userId is: " + req.params.itemID)
    db.Bracket.deleteOne({ _id: req.params.itemID })
      .then(function (deletedItem) {
        // console.log(deletedItem)
        res.json(deletedItem)
      })
      .catch(function (err) {
        res.json(err);
      });
  })

  app.put('/my-api/edit-round/:index', function (req, res) {
    console.log("The userId is: " + req.params.index)
    db.Bracket.findOneAndUpdate({ _id: req.params.index }, {
      $set:
      {
        round: req.body.round,
      }
    }).then(function (newBracket) {
      console.log(newBracket)
      res.json(newBracket)
    }).catch(function (err) {
      res.json(err);
    });
  });

  app.put('/my-api/edit-brackets/:index', function (req, res) {
    // console.log("The userId is: " + req.params.index)
    db.Bracket.findOneAndUpdate({ _id: req.params.index }, {
      $set: {
        [req.body.bracket]: req.body.column,
        [req.body.team1category]: req.body.team1stats,
        [req.body.team2category]: req.body.team2stats
      }
    }).then(function (newBracket) {
      console.log(newBracket)
      res.json(newBracket)
    }).catch(function (err) {
      res.json(err);
    });
  });
}

