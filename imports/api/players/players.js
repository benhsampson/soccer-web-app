import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

Players.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Players.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});


const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  ballManipulation: { type: Number, defaultValue: 0 },
  kickingAbilities: { type: Number, defaultValue: 0 },
  passingAbilities: { type: Number, defaultValue: 0 },
  duelTacklingAbilities: { type: Number, defaultValue: 0 },
  fieldSpeedCoverage: { type: Number, defaultValue: 0 },
  blockingAbilities: { type: Number, defaultValue: 0 },
  gameStrategy: { type: Number, defaultValue: 0 },
  playmakingRisks: { type: Number, defaultValue: 0 },
  notes: { type: String, optional: true },
  owner: { type: String },
});

Players.attachSchema(PlayerSchema);
