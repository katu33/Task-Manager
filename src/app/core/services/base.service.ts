import { Injectable } from '@angular/core';
import { ColorStatusTaskType, StatusTaskType } from 'src/app/interface/task';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  getColorStatus(status: StatusTaskType, type: 'class' | 'color') {
    if(status === StatusTaskType.FINISH) return type === 'color' ? ColorStatusTaskType.FINISH : 'color-green';
    if(status === StatusTaskType.HAS_NOT_YET_START) return type === 'color' ? ColorStatusTaskType.HAS_NOT_YET_START : 'color-orange';
    if(status === StatusTaskType.IN_PROCESS) return type === 'color' ? ColorStatusTaskType.IN_PROCESS : 'color-yellow';
    if(status === StatusTaskType.PAUSED) return (type === 'color' ? ColorStatusTaskType.PAUSED : 'color-black');
  }
}
