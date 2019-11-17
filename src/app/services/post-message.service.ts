import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostMessageService {

  constructor() {
  }

  sendMessage(messageAction: any) {
    const iframeElement: HTMLFrameElement = document.getElementById('iframe-nclex') as HTMLFrameElement;
    const iframeWindow = iframeElement ? iframeElement.contentWindow : null; // tslint:disable-line
    if (iframeWindow) {
      iframeWindow.postMessage({
        messageSecret: environment.messageSecret,
        action: messageAction
      }, window.origin);
    }
  }

  observableSendMessage(messageAction: any) {
    return new Observable((subscriber) => {
      this.sendMessage(messageAction);
      subscriber.next(messageAction);
    });
  }
}
