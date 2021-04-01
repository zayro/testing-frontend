import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { WelcomeComponent } from './components/welcome/welcome.component'

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "home", component: HomeComponent, 	pathMatch: "full", },
  {
		path: "**",
		redirectTo: "home",
		pathMatch: "full",
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
