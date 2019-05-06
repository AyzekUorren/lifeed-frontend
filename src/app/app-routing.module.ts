import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', component: TweetsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
