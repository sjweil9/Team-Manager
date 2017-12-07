import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  players = [];
  game: string;
  constructor(
    private _playerService: PlayerService,
    private _route: ActivatedRoute
  ) { }

  setPlayerStatus(player, status) {
    this._playerService.setPlayerStatus(player, status, this.game);
  }

  ngOnInit() {
    this._route.paramMap.subscribe(
      (params) => {
        this.game = params.get('id');
      }
    );
    this._playerService.getPlayers((players) => {
      this.players = players;
    });
  }

}
