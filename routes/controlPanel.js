var express = require('express');
var router = express.Router();
var path = require('path');
var password = ["meow", "beep", "wang", "woof", "oops"];

router.get('/:pwd', function(req, res) { //id = req.query.id
  if (req.params.pwd != password[req.query.id]) {
	res.send("Wrong id or password!");
  }
  // console.log(model.stars.list_from_type("unknown"));
  // console.log("--------------------------------------");
  // console.log(model.players[req.query.id].skill)
  // console.log("--------------------------------------");
  var ship_status = shipStatus(model.players[req.query.id].ships, req.query.id, model.stars, skillid); //todo
  var not_free = 0;
  for (var i = 0; i < 5; i++) {
  	if (ship_status[i] != "free") {
		not_free += 1;
	}
  }
  res.render('second_index.ejs', {
    player_id: req.query.id,
    player: model.players[req.query.id],
    ships: model.players[req.query.id].ships,
    stars: model.stars,
    mines: model.stars.list_from_type("mine", model.players[req.query.id].ships),
    unknowns: model.stars.list_from_type("unknown", model.players[req.query.id].ships),
    computers: model.stars.list_from_type("computer", model.players[req.query.id].ships),
    abandons: model.stars.list_from_type("abandon", model.players[req.query.id].ships),
    skill: model.players[req.query.id].skill,
    ship_status: ship_status,
    available_ship: model.players[req.query.id].skill['Legacy-of-Ancient-God'].method() - not_free,
  })
});

function shipStatus(ships, id, stars, skillid) {
	var status_array = [], list = [], day = [0, 0, 0, 0, 0];
	if (skillid.length && !skillid.includes(Number(id))) {
		list = [true, true, true, true, true];
	} else {
		list = [false, false, false, false, false];
		for (var i = 0; i < 5; i++) {
			if (stars["c"+i].dayLeft[id] != null && stars["c"+i].dayLeft[id] > 0) {
				list[ stars["c"+i].player_here[id] ] = true;
				day[ stars["c"+i].player_here[id] ] = stars["c"+i].dayLeft[id];
			}
		}
	}
	if (stars["a13"].cannotback[id] != null && stars["a13"].cannotback[id] > 0) {
		list[ stars["a13"].player_here[id] ] = true;
		day[ stars["a13"].player_here[id] ] = stars["a13"].cannotback[id];
	}
	for (var i = 0; i < 5; i++) {
		if (ships[i].targetId == null) {
			status_array.push("free");
		} else if (ships[i].dayLeft != 0) {
			status_array.push("going");
		} else {
			if (list[i]) {
				if (day[i] != 0) {
					status_array.push("suspend "+day[i]+"d");
				} else {
					status_array.push("suspend");
				}
			} else {
				status_array.push("arrive");
			}
		}
	}
	return status_array;
}

module.exports = router;
