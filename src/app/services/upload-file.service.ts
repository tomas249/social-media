import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  getProgress(event) {
    switch (event.type) {

      case HttpEventType.Sent:
        event.completedUpload = false;
        event.progress = 0;
        event.uploading = 'files';
        return event;

      case HttpEventType.UploadProgress:
        const progress = Math.round(event.loaded / event.total * 100);
        event.completedUpload = false;
        event.progress = progress;
        event.uploading = 'files';
        return event;

      case HttpEventType.ResponseHeader:
        event.uploading = 'files';
        return event;

      case HttpEventType.DownloadProgress:
        event.uploading = 'body';
        return event;

      case HttpEventType.Response:
        event.body.completedUpload = true;
        event.uploading = null;
        return event.body;

      default:
        return new Error(event);
    }
  }

  getOptions() {
    return {
      reportProgress: true,
      // responseType: 'json'
      observe: 'events'
    };
  }

}