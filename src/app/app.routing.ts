import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

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
  path: 'player/:id',
  component: PlayerDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
