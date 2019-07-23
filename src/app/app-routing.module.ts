import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // 1 actin
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // ДЛЯ ОТОБРАЖЕНИЯ ДЕТАЛЕЙ

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent }, // ДЛЯ ОТОБРАЖЕНИЯ ДЕТАЛЕЙ
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }, // To make the app navigate to the dashboard automatically
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent }  // 2 action
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // !!!!!
  exports: [RouterModule]
})
export class AppRoutingModule {


}
