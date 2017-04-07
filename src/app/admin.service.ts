import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AdminService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }

  getPlayerById(playerId: string) {
    return this.angularFire.database.object('players/' + playerId);
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  updatePlayer(currentPlayer) {
    var playerEntryInFirebase = this.getPlayerById(currentPlayer.$key);
    playerEntryInFirebase.update({
      name: currentPlayer.name,
      imgUrl: currentPlayer.imgUrl,
      position: currentPlayer.position,
      country: currentPlayer.country
    })
  }

}
