import { LayoutComponent } from '../layout/layout.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LoginComponent } from './pages/login/login.component';
import { LockComponent } from './pages/lock/lock.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
        ]
    },
    // 单页不包裹Layout
    { path: 'login', component: LoginComponent, data: { title: 'login' } },
    { path: 'lock', component: LockComponent, data: { title: 'lock' } },
    { path: '**', redirectTo: 'dashboard' }
];
