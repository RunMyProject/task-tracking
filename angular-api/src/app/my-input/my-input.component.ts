import { Component, OnInit } from '@angular/core';
import { ApiDataInterface } from '../api-data-interface';

@Component({
  selector: 'my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})

export class MyInputComponent implements OnInit {

 apiData : ApiDataInterface = {
    id: 0,
    task: null,
    color: null,
    dayStart: null,
    dayEnd: null
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}