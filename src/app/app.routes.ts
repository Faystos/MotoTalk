import { Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main/main-page.component";
import { DeviceSearchComponent } from "./pages/device-search/device-search.component";

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main-page.component').then((m) => m.MainPageComponent),
  },
  {
    path: 'device-search',
    loadComponent: () => import('./pages/device-search/device-search.component').then((m) => m.DeviceSearchComponent),

  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
