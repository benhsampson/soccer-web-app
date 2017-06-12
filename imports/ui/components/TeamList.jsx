import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red700 } from 'material-ui/styles/colors';

export default class TeamList extends Component {
  updateCurrentPlayer(player) {
    this.props.updateCurrentPlayer(player);
  }

  deletePlayer(playerId) {
    Meteor.call('players.delete', playerId, (err) => {
      if (err) {
        Materialize.toast('Uh oh, something went wrong!', 4000);
      } else {
        Materialize.toast('Player deleted!', 4000);
      }
    });
  }

  render() {
    return (
      <ListItem
        primaryText={ this.props.player.name }
        leftAvatar={ <Avatar src="player.jpg" /> }
        rightIcon={ <ActionDeleteForever hoverColor={ red700 }
          onClick={ this.deletePlayer.bind(this, this.props.player._id) }/> }
        onClick={ this.updateCurrentPlayer.bind(this, this.props.player) }
      />
    );
  }
}
