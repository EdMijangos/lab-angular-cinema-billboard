import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

import { MovieListService } from './movie-list.service';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movie/:id', component:MyMovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
