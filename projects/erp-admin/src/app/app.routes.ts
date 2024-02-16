import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'not-found',
        loadChildren: () => import('../pages/not-found/not-found.module').then((m) => m.NotFoundModule),
    },
    {
        path: '**',
        redirectTo: '/not-found',
    },
];
