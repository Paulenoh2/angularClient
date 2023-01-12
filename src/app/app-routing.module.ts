import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './students/edit/edit.component';
import { ListComponent } from './students/list/list.component';

const routes: Routes = [
{path: 'student-create', component: EditComponent},
{path: 'student-edit/:id', component: EditComponent},
{path: 'student-list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
