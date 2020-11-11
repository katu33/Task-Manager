import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { StatusTaskType } from 'src/app/interface/task';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-progress-circle',
  template: `
    <svg>
      <circle [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r"></circle>
      <circle 
        [attr.cx]="cx" 
        [attr.cy]="cy" 
        [attr.r]="r" 
        style="stroke-dashoffset: {{calcPercent}}; stroke: {{getColorStatus}}"
      ></circle>
    </svg>
  `,
})
export class ProgressCircleComponent implements OnInit {
  @Input() cx: number = 15;
  @Input() cy: number = 15;
  @Input() r: number = 15;

  @Input() status: StatusTaskType = StatusTaskType.HAS_NOT_YET_START;
  @Input() percent: number = 100;
  constructor(private baseService: BaseService) { }

  ngOnInit(): void {

  }

  get calcPercent(): number {
    return this.cx * 6 - ((this.cx * 6) * this.percent)/ 100;
  }

  get getColorStatus(): string {
    return this.baseService.getColorStatus(this.status, "color");
  }

  
}
