export class Joke {

  setup: string;
  punchline: string;
  hide: boolean;
  msgText: string;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
    this.msgText = 'Show Me!';
  }

  toggle() {
    this.hide = !this.hide;

    // this.msgText = this.hide ? 'Show Me!' : 'Hide'

    if (this.hide) {
      this.msgText = 'Show Me!';
    } else {
      this.msgText = 'Hide';
    }
  }
}
