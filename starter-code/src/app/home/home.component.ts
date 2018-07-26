import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Array<any> = [];

  constructor(private movieService: MovieListService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
