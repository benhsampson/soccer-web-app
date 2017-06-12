import { Meteor } from 'meteor/meteor';

import { Players } from './players';

Meteor.methods({
  'players.insert'(player) {
    Players.insert(player);
  },

  'players.update'(player) {
    Players.update(player._id, { $set: player });
  },

  'players.delete'(playerId) {
    if (Meteor.userId()) {
      Players.remove(playerId);
    }
  },
});
