import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'react-meteor-data';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import { Players } from '../../api/players/players';

import TeamList from '../components/TeamList';
import TeamStats from '../components/TeamStats';
import Player from '../components/Player';
import Edit from '../components/EditPlayer';
import AccountsWrapper from '../components/AccountsWrapper';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: {},
      showEditPlayer: false,
    };
  }

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={ player._id } player={ player } updateCurrentPlayer={ this.updateCurrentPlayer.bind(this) }/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
      showEditPlayer: false,
    });
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showForm() {
    if (this.state.showEditPlayer === true) {
      return (
        <div>
          <Edit
            currentPlayer={ this.state.currentPlayer }
            updateCurrentPlayer={ this.updateCurrentPlayer.bind(this) }
          />
        </div>
      );
    } else {
      return (
        <div>
          <TeamStats players={ this.props.players } />
        </div>
      );
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Soccer App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={ false }
            style={{ background: '#0277bd', padding: '0 7.5%' }}
          >
            <AccountsWrapper />
          </AppBar>
          <div className="container">
            <div className="row">
              <div className="col s12 m7">
                <Player player={ this.state.currentPlayer } showEditForm={ this.showEditForm.bind(this) } />
              </div>
              <div className="col s12 m5">
                <h3>Team List</h3>
                <Link to="/new" className="waves-effect waves-light btn light-blue darken-3 mb-12">Add Player</Link>
                <Divider />
                <List>
                  { this.renderPlayers() }
                </List>
                <Divider />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <br />
                <Divider />
                { this.showForm() }
                <Divider />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('players');
  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, { sort: { name: 1 }}).fetch(),
  };
}, App);
