import { Pipe, PipeTransform } from '@angular/core';
import { ColorStatusTaskType, StatusTaskType } from 'src/app/interface/task';
import { BaseService } from '../services/base.service';

@Pipe({
  name: 'colorStatus'
})
export class ColorStatusPipe implements PipeTransform {
  constructor(private baseService: BaseService) {}
  transform(value: StatusTaskType, ...args: unknown[]): unknown {
    console.log(this.baseService.getColorStatus(value, 'class'));
    
    return `<span class="${this.baseService.getColorStatus(value, 'class')}">${value}</span>`;
  }
}
