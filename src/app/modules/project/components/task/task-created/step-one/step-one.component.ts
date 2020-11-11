import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { UploadService } from 'src/app/core/services/upload.service';
import { TaskService } from '../../task.service';

export interface FileBase64 { 
  file: File;
  base64: string;
}

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  formStepOne: FormGroup;
  fileUploadBase64: FileBase64[] = [];

  @Output() onClose = new EventEmitter();
  @Output() onProceed = new EventEmitter();
  constructor(
    private uploadService: UploadService, 
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.formStepOne = this.formBuilder.group({
      title: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      create_at: ['', Validators.required],
      end_at: ['', Validators.required],
      attachs: [[]]
    });
  }

  selectFileDrop(event): void {
    const promiseBase64 = this.uploadService.convertImageToBase64(event);
    console.log(event, promiseBase64);
    
    Promise.all(promiseBase64).then((res : FileBase64[]) => {
      const fileUpload: File[] = [...res].map(item => item.file);
      this.formStepOne.get('attachs').setValue([fileUpload]);
      this.fileUploadBase64 = res;
      this.taskService.fileBase64.next([...res]);
    });
  }

  handleClose(): void {
    this.onClose.next(true);
  }

  handleProceed(): void {
    this.taskService.setStepOne(this.formStepOne.value);
    this.onProceed.next(true);
  }
}
