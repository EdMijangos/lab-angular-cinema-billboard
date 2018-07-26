import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie: Object = {};
  id: number = 0;

  constructor(private movieService: MovieListService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params
    .subscribe(movieFound=>{
      this.id = movieFound.id
      this.movie = this.movieService.getMovie(this.id)
      console.log(this.movie)
    })
  }

}
