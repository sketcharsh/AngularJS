import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App';
  arrayNumbers = [11,12,13,14,15,16,17,18,19]
  odd=false;
  onClick()
  {
    if(this.odd == false)
    {
      this.odd = true;
    }
    else if(this.odd == true)
    {
      this.odd = false;
    }
  }
}
