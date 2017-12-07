import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {
  player = {};
  constructor(private _playerService: PlayerService) {
    this.player = {
      name: '',
      position: ''
    };
  }

  onSubmit() {
    this._playerService.addPlayer(this.player);
  }

  ngOnInit() {
  }

}
