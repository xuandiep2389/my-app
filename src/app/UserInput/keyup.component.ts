import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up',
  template:`
      <input (keyup)="onKey($event)">
      {{values}}
  `
})
export class KeyupComponent {
  values = '';

  // onKey(event: any) {
  //   this.values += event.target.value + ' | '
  //
  // }


  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

@Component({
  selector: 'app-key-up2',
  template:`
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent_2 {// dung #box thi sex de hon dung $event o vi du tren
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }
}


@Component({
  selector: 'app-loop-back',
  template:`
      <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopBackComponent {


}

@Component({
  selector: 'app-key-up3',
  template:`
      //Khi nhan enter se hien thi noi dung nhap
      <input #box (keyup.enter)="onEnter(box.value)">
      <p>{{value}}</p>
  `
})
export class KeyupComponent3 {
  value: string;

  onEnter(value: string) {
    this.value = value;
  }
}

@Component({
  selector: 'app-key-up4',
  template:`
    <input #box 
           (keyup.enter)="update(box.value)"
            (blur)="update(box.value)"
    >
    
    <p>{{value}}</p>
  `
})
export class KeyupComponent4 {

  value='';

  update(value: string) {
    this.value = value;
  }
}
