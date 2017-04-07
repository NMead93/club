import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [AdminService]
})
export class PlayerDetailComponent implements OnInit {
  playerId: string = null;
  player = null;

  constructor(private route: ActivatedRoute, private location: Location, private adminService: AdminService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.player = this.adminService.getPlayerById(this.playerId);
  }

}
