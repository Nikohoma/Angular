import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncpipeexComponent } from './asyncpipeex/asyncpipeex.component';
import { Cust1Component } from './cust1/cust1.component';
import { Cust2Component } from './cust2/cust2.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {path:'',component:Cust1Component},
  {path:'cust2',component:Cust2Component},
  { path: 'apipe', component:AsyncpipeexComponent },
  { path: 'srv', component: ServiceExampleComponent },
  { path: 'exc', component: ExerciseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
