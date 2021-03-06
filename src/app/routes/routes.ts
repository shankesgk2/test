import { LayoutComponent } from '../layout/layout.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LoginComponent } from './pages/login/login.component';
import { LockComponent } from './pages/lock/lock.component';
import { ForgetComponent } from './pages/forget/forget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../core/net/token/login.guard';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
            { path: 'admins', loadChildren: './admins/admins.module#AdminsModule', data: { title: '仪表盘' } }
        ]
    },
    // 单页不包裹Layout
    { path: 'login', component: LoginComponent, data: { title: '登录' } },
    { path: 'lock', component: LockComponent, data: { title: '锁定' } },
    { path: 'forget', component: ForgetComponent, data: { title: '找回密码' } },
    { path: '**', redirectTo: 'dashboard' }
];
