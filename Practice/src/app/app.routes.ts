import { Routes } from '@angular/router';
import { ServiceExComponent } from './service-ex/service-ex.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AuthGuard } from './services/auth-guard.service';
import { AsyncComponent } from './async/async.component';

export const routes: Routes = [
  { path: '', component: DataBindingComponent },
  { path: 'services', component: ServiceExComponent, canActivate:[AuthGuard] }, //  canActivate:[AuthGuard]
  {path:'async', component:AsyncComponent}
];
