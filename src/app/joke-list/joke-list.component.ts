import { Component, OnInit } from '@angular/core';
import { Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke( 'Joke 1', 'Answer 1'),
      new Joke('Joke 2', 'Answer 2'),
      new Joke('Joke 2', 'Answer 3')
      ];
  }

  ngOnInit() {
  }

  addJoke(joke: Joke) {
    this.jokes.unshift(joke);
  }

  deleteJoke(joke: Joke) {
    const index =  this.jokes.indexOf(joke);
    this.jokes.splice(index, 1);
  }


}
