import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { Players } from '../../api/players/players';

export default class Edit extends Component {
  updateCurrentPlayer(player) {
    this.props.updateCurrentPlayer(player);
  }

  editPlayer(e) {
    e.preventDefault();

    let player = {
      _id: this.props.currentPlayer._id,
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
      createdAt: this.props.currentPlayer.createdAt,
      owner: Meteor.userId(),
    };

    Meteor.call('players.update', player, (err) => {
      if (err) {
        Materialize.toast('Uh oh, something went wrong!', 4000);
      } else {
        Materialize.toast('Player updated!', 4000);
        this.updateCurrentPlayer(player);
      }
    });
  }

  render() {
    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form onSubmit={ this.editPlayer.bind(this) } className="col s12">
          <h3>Update player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input type="text" placeholder="Name" ref="name" className="validate" defaultValue={ currentPlayer.name } />
            </div>
            <div className="input-field col s6">
              <input type="text" placeholder="Team" ref="team" className="validate" defaultValue={ currentPlayer.team } />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Ball Manipulation</h5>
              <select className="browser-default" ref="ballManipulation" defaultValue={ currentPlayer.ballManipulation }>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Kicking Abilities</h5>
              <select className="browser-default" ref="kickingAbilities" defaultValue={ currentPlayer.kickingAbilities }>
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
              <select className="browser-default" ref="passingAbilities" defaultValue={ currentPlayer.passingAbilities }>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Duel/tackling abilities</h5>
              <select className="browser-default" ref="duelTacklingAbilities" defaultValue={ currentPlayer.duelTacklingAbilities }>
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
              <select className="browser-default" ref="fieldSpeedCoverage" defaultValue={ currentPlayer.fieldSpeedCoverage }>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Blocking Abilities</h5>
              <select className="browser-default" ref="blockingAbilities" defaultValue={ currentPlayer.blockingAbilities }>
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
              <select className="browser-default" ref="gameStrategy" defaultValue={ currentPlayer.team }>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Playmaking risks</h5>
              <select className="browser-default" ref="playmakingRisks" defaultValue={ currentPlayer.team }>
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
