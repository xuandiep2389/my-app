import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoggerService} from '../logger.service';

let nextId = 1;

export class PeekABoo implements OnInit{
  constructor(private logger: LoggerService) {}


  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt(`OnInit`);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

}

@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see my Hero, {{name}}</p>',
  styles: ['p {background: LightYellow; padding: 8px;}']
})
// dont have to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent extends PeekABoo implements OnChanges{

  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    let is = this.name? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }


  ngOnChanges(changes: SimpleChanges): void {

    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`)
      }
    }
  }
}
