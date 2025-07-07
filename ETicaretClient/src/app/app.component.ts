import { Component } from '@angular/core';
declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
}

$(document).ready(() => {
  alert('Document is ready!');
});
