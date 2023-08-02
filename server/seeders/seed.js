const db = require("../config/connection");
const { Profile } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const childSeeds = require("./childSeeds.json");
const commentSeeds = require("./commentSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    for (let i = 0; i < childSeeds.length; i++) {
      for (let j = 0; j < childSeeds[i].parents.length; j++) {
        await Profile.findOneAndUpdate(
          { name: childSeeds[i].parents[j] },
          { $addToSet: { children: childSeeds[i] } }
        );
      }
    }

    for (let i = 0; i < commentSeeds.length; i++) {
      await Profile.findOneAndUpdate(
        { name: commentSeeds[i].commentAuthor },
        {
          $addToSet: {
            comments: {
              commentAuthor: this._id,
              commentText: commentSeeds[i].commentText,
            },
          },
        }
      );
    }

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
