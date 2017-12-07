import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players = [];
  constructor(private _playerService: PlayerService) {
  }

  delete(player) {
    const confirmation = confirm('Are you sure you want to remove ' + player.name + '?');
    if (confirmation) {
      this._playerService.deletePlayer(player);
    }
  }

  ngOnInit() {
    this._playerService.getPlayers((players) => {
      this.players = players;
    });
  }

}
