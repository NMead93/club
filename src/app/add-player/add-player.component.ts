import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [AdminService]
})
export class AddPlayerComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addPlayer(name, url, position, country, average, hr) {
    let stats: number[] = [average, hr];
    var newPlayer: Player = new Player(url, name, position, country, stats);
    this.adminService.
  }

}
