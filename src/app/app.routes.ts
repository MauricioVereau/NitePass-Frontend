import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/website/website.route').then(m => m.WEBSITE_ROUTES)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
