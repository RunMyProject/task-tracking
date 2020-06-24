import { Injectable } from '@angular/core';
import { QueueColor } from '../app/queue-color';
import { ApiDataInterface } from './api-data-interface';
import { Observable} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ButtonsService {

  // URL to API AZURE .NET CORE
  //
  public url = 'http://localhost:8081/api/MyAPI';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  colors : QueueColor<string> = new QueueColor<string>();

  initColors() {
    this.colors.enqueue('#33a8a5');
    this.colors.enqueue('#b03532');
    this.colors.enqueue('#3d8bb1');
    this.colors.enqueue('#da6f2b');
    this.colors.enqueue('#a4b4a1');
    /*
    ....more colors....
    this.colors.enqueue('#30997a');
    this.colors.enqueue('#6a478f');
    this.colors.enqueue('#4464a1');
    */
  }
  
  tasks : Array<ApiDataInterface> = [    
    //  ....
    // a kind of ApiDataInterface is:
    //  {id: 1, text: 'Task 1', color: '#33a8a5', dayStart:0, dayEnd:1},
    //  ....
  ];

  add() {
    var task = (document.getElementById("taskInput") as HTMLInputElement).value;
    if(task==null || task.trim().length==0) return;
    var color : string = this.colors.next().data;
    var dayStart = (document.getElementById("dayStart") as HTMLInputElement).value;
    if(dayStart==null || dayStart.trim().length==0) return;
    var dayEnd =  (document.getElementById("dayEnd") as HTMLInputElement).value;
    if(dayEnd==null || dayEnd.trim().length==0) return;
    
    this.tasks.push({
        id: this.tasks.length,
        task: task,
        color: color, 
        dayStart: Number(dayStart),
        dayEnd: Number(dayEnd)
    });
  }

  clear() {
    this.tasks = [];
  }

  constructor(private httpClient: HttpClient) {
    this.initColors();
  }

  load() {
    this.get().subscribe((data: []) => {
      this.tasks = data;
    })    
  }
 
  get(): Observable<ApiDataInterface[]> {
   return this.httpClient.get<ApiDataInterface[]>(this.url + '/')
  }

  save() {
    this.put().subscribe(
        val => {
            console.log("PUT call successful value returned in body", val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
    })
  }

  put() {
    return this.httpClient.put(this.url + "/", this.tasks, this.httpOptions)
  }
}