import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: string

  constructor() {
    this.joke = 'what did the cheese say?';
  }

  ngOnInit() {
  }

}
