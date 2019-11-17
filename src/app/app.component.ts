import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'NCLEX-RN';

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscribeToPostMessage();
  }

  isTrustedSource({ origin, data }): boolean {
    return origin === window.origin && data && data.messageSecret === environment.messageSecret;
  }

  subscribeToPostMessage(): void {
    window.addEventListener('message', (event) => {
      if (this.isTrustedSource(event)) {
        console.log('@message', event.data);
        this.store.dispatch(event.data.action);
      }
    });
  }
}
