import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'players/:id',
  component: PlayerDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
