import { Pipe, PipeTransform } from '@angular/core';

/*
 * Usage:
 *   taskName | myPipeTransform
 * Example:
 *   {{ "Task 1" | myPipeTransform }}
 *   formats to: "[ Task 1 ]"
*/

@Pipe({
  name: 'MyPipe',
  pure: false
})
export class MyPipe implements PipeTransform {

  private openChar  = "[ ";
  private closeChar = " ]";

  constructor() { }

  transform(taskName: string): any {
      return(this.openChar + taskName + this.closeChar);
  }  
}