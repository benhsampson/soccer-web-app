import { Meteor } from 'meteor/meteor';

import { Players } from '../../api/players/players';
import '../../api/players/methods';

Meteor.startup(() => {
  Meteor.publish('players', () => {
    return Players.find();
  });
});
