import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { Players } from '../../api/players/players';

export default class TeamStats extends Component {
  render() {
    const players = this.props.players;
    const numPlayers = players.length;

    const ballManipulation = Math.round((players.reduce((ballManipulation, player) => {
      return ballManipulation + player.ballManipulation;
    }, 0) / (3 * numPlayers)) * 100);

    const kickingAbilities = Math.round((players.reduce((kickingAbilities, player) => {
      return kickingAbilities + player.kickingAbilities;
    }, 0) / (3 * numPlayers)) * 100);

    const passingAbilities = Math.round((players.reduce((passingAbilities, player) => {
      return passingAbilities + player.passingAbilities;
    }, 0) / (3 * numPlayers)) * 100);

    const duelTacklingAbilities = Math.round((players.reduce((duelTacklingAbilities, player) => {
      return duelTacklingAbilities + player.duelTacklingAbilities;
    }, 0) / (3 * numPlayers)) * 100);

    const fieldSpeedCoverage = Math.round((players.reduce((fieldSpeedCoverage, player) => {
      return fieldSpeedCoverage + player.fieldSpeedCoverage;
    }, 0) / (3 * numPlayers)) * 100);

    const blockingAbilities = Math.round((players.reduce((blockingAbilities, player) => {
      return blockingAbilities + player.blockingAbilities;
    }, 0) / (3 * numPlayers)) * 100);

    const gameStrategy = Math.round((players.reduce((gameStrategy, player) => {
      return gameStrategy + player.gameStrategy;
    }, 0) / (3 * numPlayers)) * 100);

    const playmakingRisks = Math.round((players.reduce((playmakingRisks, player) => {
      return playmakingRisks + player.playmakingRisks;
    }, 0) / (3 * numPlayers)) * 100);

    const defense = Math.round((duelTacklingAbilities + fieldSpeedCoverage +
      blockingAbilities + gameStrategy + playmakingRisks) / 5);
    const offense = Math.round((kickingAbilities + gameStrategy +
      ballManipulation + passingAbilities + fieldSpeedCoverage + playmakingRisks) / 6);
    const total = Math.round((kickingAbilities + gameStrategy +
      ballManipulation + passingAbilities + playmakingRisks +
      duelTacklingAbilities + fieldSpeedCoverage + blockingAbilities) / 8);

    const radarData = {
      labels: [
        'Ball manipulation',
        'Kicking abilities',
        'Passing abilities',
        'Duel/tackling abilities',
        'Field speed coverage',
        'Blocking abilities',
        'Game Strategy',
        'Playmaking risks'
      ],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(143, 202, 249, 0.2)',
          borderColor: 'rgba(12, 71, 161, 1)',
          pointBackgroundColor: 'rgba(12, 71, 161, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12, 71, 161, 1)',
          data: [
            ballManipulation,
            kickingAbilities,
            passingAbilities,
            duelTacklingAbilities,
            fieldSpeedCoverage,
            blockingAbilities,
            gameStrategy,
            playmakingRisks
          ]
        }
      ]
    };

    const tableData = Players.find().fetch();

    return (
      <div>
        <h3>Team Stats</h3>
        <div className="row">
          <div className="col s12 m7">
            <Radar data={ radarData } width={ 500 } height={ 500 } options={{
              maintainAspectRatio: false
            }}/>
          </div>
          <div className="col s12 m5">
            <h4>Overall Skills of Team</h4>
            <Divider/>
            <h5>Team's offense: { offense }%</h5>
            <h5>Team's defense: { defense }%</h5>
            <h5>Team's total: { total }%</h5>
            <Divider/>
            <h5>Number of players: { numPlayers }</h5>
          </div>
        </div>
        <Table selectable={ false }>
            <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Offense</TableHeaderColumn>
                <TableHeaderColumn>Defense</TableHeaderColumn>
                <TableHeaderColumn>Total</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={ false }>
              { tableData.map((player, index) => {
                const defense = player.duelTacklingAbilities +
                player.fieldSpeedCoverage + player.blockingAbilities +
                player.gameStrategy + player.playmakingRisks;
                const offense = player.kickingAbilities + player.gameStrategy +
                player.ballManipulation + player.passingAbilities +
                player.playmakingRisks;
                const total = player.kickingAbilities + player.gameStrategy +
                player.ballManipulation + player.passingAbilities +
                player.playmakingRisks + player.duelTacklingAbilities +
                player.fieldSpeedCoverage + player.blockingAbilities;
                return (<TableRow key={ index }>
                  <TableRowColumn>{ player.name }</TableRowColumn>
                  <TableRowColumn>{ offense }</TableRowColumn>
                  <TableRowColumn>{ defense }</TableRowColumn>
                  <TableRowColumn>{ total }</TableRowColumn>
                </TableRow>);
              }) }
            </TableBody>
          </Table>
      </div>
    );
  }
}
