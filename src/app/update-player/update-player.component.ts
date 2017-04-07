import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css'],
  providers: [AdminService]
})
export class UpdatePlayerComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  updatePlayer(playerToUpdate) {
    this.adminService.updatePlayer(playerToUpdate);
  }

}
