import { Routes } from '@angular/router';
import { MainPageComponent } from "./pages/main/main-page.component";

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main-page.component').then((m) => m.MainPageComponent),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
