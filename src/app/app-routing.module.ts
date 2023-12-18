import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { TestapiComponent } from './components/testapi/testapi.component';

const routes: Routes = [ 
  { path:'', component:TestComponent },
  { path:'testapi', component:TestapiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
