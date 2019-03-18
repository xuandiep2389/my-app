import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-click-me2',
    template:`
      <button (mousewheel)="onClickMe2($event)"> Click me !!!</button>{{msg}}
    `
  }
)
export class ClickMe2Component {
  msg='';

  clicks = 1;

  onClickMe2(event: any) {
    let evtMsg = event? ' Event target is ' + event.target.tagName : '';
    this.msg = (` Click #${this.clicks++}. ${evtMsg}`)
  }
}
