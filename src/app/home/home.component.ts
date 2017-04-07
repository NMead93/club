import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AdminService]
})
export class HomeComponent implements OnInit {
  players = this.adminService.players;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedPlayerId) {
    this.router.navigate(['players', clickedPlayerId]);
  }

}
