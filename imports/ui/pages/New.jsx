import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { Players } from '../../api/players/players';

export default class New extends Component {
  submitPlayer(e) {
    e.preventDefault();

    let player = {
      name: this.refs.name.value,
      team: this.refs.team.value,
      ballManipulation: this.refs.ballManipulation.value,
      kickingAbilities: this.refs.kickingAbilities.value,
      passingAbilities: this.refs.passingAbilities.value,
      duelTacklingAbilities: this.refs.duelTacklingAbilities.value,
      fieldSpeedCoverage: this.refs.fieldSpeedCoverage.value,
      blockingAbilities: this.refs.blockingAbilities.value,
      gameStrategy: this.refs.gameStrategy.value,
      playmakingRisks: this.refs.playmakingRisks.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    };

    Meteor.call('players.insert', player, (err) => {
      if (err) {
        Materialize.toast('Uh oh, something went wrong!', 4000);
      } else {
        Materialize.toast('Player added!', 4000);
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={ this.submitPlayer.bind(this) } className="col s12">
          <h3>Add a new player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input type="text" placeholder="Name" ref="name" className="validate" />
            </div>
            <div className="input-field col s6">
              <input type="text" placeholder="Team" ref="team" className="validate" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select className="browser-default" ref="ballManipulation">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select className="browser-default" ref="kickingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <h5>Passing Abilities</h5>
              <select className="browser-default" ref="passingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Duel/tackling abilities</h5>
              <select className="browser-default" ref="duelTacklingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <h5>Field speed coverage</h5>
              <select className="browser-default" ref="fieldSpeedCoverage">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking Abilities</h5>
              <select className="browser-default" ref="blockingAbilities">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <h5>Game Strategy</h5>
              <select className="browser-default" ref="gameStrategy">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking risks</h5>
              <select className="browser-default" ref="playmakingRisks">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <textarea type="text" placeholder="Notes" ref="notes" className="materialize-textarea" />
            </div>
            <div className="input-field col s6">
              <span>Click or Drag a File Here to Upload</span>
              <input type="file" />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">
                <i className="material-icons right">send</i>Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
