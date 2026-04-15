import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { HomeComponent } from './home/home.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  //{path:'',component:EmpListComponent},
  //{ path: 'emp/:id', component: EmpDetailComponent },
  {path:'',component:HomeComponent},
  {path:'pipes',component:PipeExampleComponent},
  {path:'binding',component:BindingExampleComponent},
  {path:'animals',component:AnimalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
