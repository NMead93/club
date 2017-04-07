import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [AdminService]
})
export class PlayerListComponent implements OnInit {
  @Input() selectedPosition

  players = this.adminService.players;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedPlayerId) {
    this.router.navigate(['players', clickedPlayerId]);
  }

  matchedPlayer(player) {
    if (player.position === this.selectedPosition || this.selectedPosition === "all") {
      return true;
    } else {
      return false;
    }
  }

}
