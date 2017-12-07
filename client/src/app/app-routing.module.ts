import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerNewComponent } from './player-new/player-new.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'players'},
    {path: 'players', children: [
        {path: '', component: PlayerListComponent},
        {path: 'addplayer', component: PlayerNewComponent}
    ]},
    {path: 'status/game/:id', component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
