import { Component } from '@angular/core';
import { ApisService } from './services/apis.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: any;

  constructor(private readonly apisServices: ApisService,
    private readonly swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      swUpdate.activateUpdate().then(() => document.location.reload())
    });
  }



  ngOnInit() {
    this.apisServices.getQuote().subscribe(res => {
      this.quote = res;
    })
  }
}
