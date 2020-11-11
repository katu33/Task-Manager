import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-create-task-group',
  templateUrl: './popup-create-task-group.component.html',
  styleUrls: ['./popup-create-task-group.component.scss']
})
export class PopupCreateTaskGroupComponent implements OnInit {
  formTask: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formTask = this.formBuilder.group({
      title: ['', Validators.required],
      perform: ['', Validators.required],
      follow: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

}
