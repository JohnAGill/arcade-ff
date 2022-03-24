const functions = require("firebase-functions");
// const superagent = require("superagent");

exports.sendScoreToStakester = functions.https.onCall((data, context) => {
  console.log("username: " + data.username);
  console.log("game_id: " + data.game_id);
  console.log("score: " + data.score);
  // const apiKey = "longest_time"; // key goes here
  /* superagent
      .post(
          "https://stakester-arcade-sandbox.herokuapp.com/papi/v1/submit_result"
      ) // replace with papi
      .type("form")
      .send({username: data.username})
      .send({game_id: data.game_id})
      .send({score: data.score})
      .set("X-API-Key", apiKey)
      .end((err, res) => {
        if (err) {
          console.log(err);
          return {
            success: false,
          };
        }
        return {
          success: false,
        };
      });*/
});
