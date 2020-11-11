import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  convertImageToBase64(files: FileList): Promise<any>[] {
    const newFiles = this.convertFileListToArrar(files);
    
    const base64 = newFiles.map(async (file) => {

      const newFile = await this.getBase64ToImage(file);

      const drafFile = {
        file: file, 
        base64: newFile
      }
      
      return drafFile;
    });

    return base64;
  }

  getBase64ToImage(file):Promise<any> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = event => {
        resolve(event.target.result);
      }
      fileReader.readAsDataURL(file);
    });
  }

  convertFileListToArrar(files: FileList): any[] {
    const newFiles = [];
    for(let i = 0; i < files.length; i++) {
      newFiles.push(files[i]);
    }
    return newFiles;
  }

  formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
