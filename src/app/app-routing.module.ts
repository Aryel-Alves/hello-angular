import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBraboComponent } from './shared/components/form-brabo/form-brabo.component';

const routes: Routes = [
  {
    path: '',
    component: FormBraboComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
