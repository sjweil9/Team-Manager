import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class PlayerService {

  players: any[];

  constructor(private _http: Http, private _router: Router) { 
    this.players = [];
  }

  getPlayers(callback) {
    this._http.get('/player').subscribe(
      (response) => {
        console.log(response);
        this.players = response.json();
        console.log(this.players);
        callback(this.players);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletePlayer(player) {
    this._http.delete('/player/' + player._id).subscribe(
      (response) => {
        let idx = this.players.indexOf(player);
        this.players.splice(idx, 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addPlayer(player) {
    this._http.post('/player', player).subscribe(
      (response) => {
        this.players.push(response.json());
        this._router.navigateByUrl('/players');
      },
      (error) => {
        console.log(error);
        this._router.navigateByUrl('/players');
      }
    );
  }

  setPlayerStatus(player, status, game) {
    const url = '/player/' + player._id;
    this._http.put(url, {status: status, game: game}).subscribe(
      (response) => {
        const idx = this.players.indexOf(player);
        this.players[idx] = response.json();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
