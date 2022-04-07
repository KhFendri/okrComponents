import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

const routes: Routes = [
  // {path: '', component: HomeComponent}
  // {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
