import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  selectedPlayer = null;
  players = this.adminService.players;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  selectPlayer(selectedPlayer) {
    this.selectedPlayer = selectedPlayer
  }

  deletePlayer(player) {
    this.adminService.deletePlayer(player)
  }

}
