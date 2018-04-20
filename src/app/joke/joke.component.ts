
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;
  @Output() doDeleteJoke = new EventEmitter<Joke>()

  constructor() {

  }

  ngOnInit() {
  }

  deleteJoke() {
    this.doDeleteJoke.emit(this.joke);
  }

}
