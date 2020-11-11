import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from 'src/app/core/services/upload.service';

interface TypeFiles {
  file: File,
  base64: string
}

@Component({
  selector: 'app-popup-file',
  templateUrl: './popup-file.component.html',
  styleUrls: ['./popup-file.component.scss']
})
export class PopupFileComponent implements OnInit {
  files: TypeFiles[];
  constructor(public dialogRef: MatDialogRef<PopupFileComponent>, private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  async selectFile(fileList: FileList) {
    const fileBase64Promise = this.uploadService.convertImageToBase64(fileList);
    const result = await Promise.all(fileBase64Promise);
    console.log(result);
    this.files = result;
  }

  onAccept() {
    this.dialogRef.close(this.files);
  }

  onRemoveAll() {
    this.files = null;
  }

  onClosePopup() {
    this.dialogRef.close();
  }
}
