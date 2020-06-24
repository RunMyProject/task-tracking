import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'task-color',
  templateUrl: './task-color.component.html',
  styleUrls: ['./task-color.component.scss']
})

export class TaskColorComponent implements OnInit {

  constructor() { }
  
  @Input() task: string;
  @Input() color: string;
  @Input() dayStart: number;
  @Input() dayEnd: number;

  left:string;
  width:string;

  ngOnInit(): void {
    var maxSize = 1050;
    var unit = (maxSize / 7)-3;
    this.left= (this.dayStart*unit)+"px";
    this.width=((this.dayEnd-this.dayStart+1)*(unit))+"px";
  }

}
