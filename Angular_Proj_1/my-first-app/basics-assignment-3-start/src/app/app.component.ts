import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHidden = true;
  clicks = 0;
  logs = [];

  onPress() {
    this.clicks ++;
    this.logs.push([this.clicks, new Date()]);
    this.isHidden = !this.isHidden;
  }
}
