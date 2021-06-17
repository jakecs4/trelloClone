import { compileClassMetadata } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [ 
  { path: '', component: MainViewComponent },

  // catch all, redirect to home 
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
