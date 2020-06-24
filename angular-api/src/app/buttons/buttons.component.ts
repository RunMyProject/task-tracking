import { Component, OnInit } from '@angular/core';
import { ButtonsService } from '../buttons.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent implements OnInit {

  weeks : Array<string> = [
    'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
  ];

  constructor(public buttonsService: ButtonsService) { }

  ngOnInit(): void {    
  }
}
