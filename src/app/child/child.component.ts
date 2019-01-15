import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() sendToChild: number = 675787;
@Output() sendToParent: EventEmitter<string>;
  constructor() { }

  ngOnInit() {
    console.log(this.sendToChild);
  }

  eventEmit_sendToParent() {
    this.sendToParent.emit('blah');
  }

}
