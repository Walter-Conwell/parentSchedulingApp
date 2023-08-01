const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const childSeeds = require('./childSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    for (let i = 0; i < childSeeds.length; i++) {
      for (let j = 0; j < childSeeds[i].parents.length; j++) {
        await Profile.findOneAndUpdate(
          { name: childSeeds[i].parents[j] },
          { $addToSet: { children: childSeeds[i] }}
        );
      }
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
