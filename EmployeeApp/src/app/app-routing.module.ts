import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './employees/details/details.component';
import { CreateComponent } from './employees/create/create.component';
import { UpdateComponent } from './employees/update/update.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
  { path: 'employees/create', component: CreateComponent},
  { path: 'employees/update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
