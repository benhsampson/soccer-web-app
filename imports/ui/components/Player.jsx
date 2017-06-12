import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue100, lightBlue700, lightBlue50 } from 'material-ui/styles/colors';

import { Players } from '../../api/players/players';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class Player extends Component {
  showEditForm() {
    this.props.showEditForm();
  }
  render() {
    const player = this.props.player;
    const defense = player.duelTacklingAbilities + player.fieldSpeedCoverage +
    player.blockingAbilities + player.gameStrategy + player.playmakingRisks;
    const offense = player.kickingAbilities + player.gameStrategy +
    player.ballManipulation + player.passingAbilities + player.playmakingRisks;
    const total = player.kickingAbilities + player.gameStrategy +
    player.ballManipulation + player.passingAbilities + player.playmakingRisks +
    player.duelTacklingAbilities + player.fieldSpeedCoverage + player.blockingAbilities;

    return (
      <div className="mt-12">
        { player._id ? (
        <Card>
          <CardMedia
            overlay={ <CardTitle
                        title={ player.name }
                        subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}` }
                      /> }>
            <img src="player.jpg" />
          </CardMedia>
          <CardText>
            <div style={ styles.wrapper }>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.ballManipulation }
                </Avatar>
                Ball manipulation
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.kickingAbilities }
                </Avatar>
                Kicking abilities
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.passingAbilities }
                </Avatar>
                Passing abilities
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.duelTacklingAbilities }
                </Avatar>
                Duel/tackling abilities
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.fieldSpeedCoverage }
                </Avatar>
                Field speed coverage
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.blockingAbilities }
                </Avatar>
                Blocking abilities
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.gameStrategy }
                </Avatar>
                Game Strategy
              </Chip>
              <Chip backgroundColor={ blue100 } style={ styles.chip }>
                <Avatar size={ 32 } color={ lightBlue50 } backgroundColor={ lightBlue700 }>
                  { player.playmakingRisks }
                </Avatar>
                Playmaking risks
              </Chip>
            </div>
          </CardText>
          <CardActions>
            {/* <RaisedButton
              label="Edit player stats"
              labelPosition="before"
              style={{ background: '#0277bd', color: '#fff', margin: 12 }}
              onClick={ this.showEditForm.bind(this) }
            /> */}
            <button className="btn waves-effect waves-light light-blue darken-3 m-12" onClick={ this.showEditForm.bind(this) }>
              Edit player stats
            </button>
          </CardActions>
        </Card>
      ) : <h3 className="text-center">{ Players.find().fetch().length > 0 ? 'Select' : 'Add' } a player to get started.</h3>}
      </div>
    );
  }
}
