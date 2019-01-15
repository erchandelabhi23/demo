import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abhishek',
  templateUrl: './abhishek.component.html',
  styleUrls: ['./abhishek.component.css']
})
export class AbhishekComponent implements OnInit {
  //56656: number ;
  @Input() tilmilna: number = 987456;
  constructor() { }

  ngOnInit() {
  
    
  }

}
