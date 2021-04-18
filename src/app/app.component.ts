import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeApp';
  classUser = new User("Krupali",23,12,"Female","MscIT",true);
  customData=[{type : 'Server1' , name : 'TypeS1'},{type : 'Server2' , name : 'TypeS2'}];
  showMsg:String="Test";

  onNotifyClicked(message:String){
    this.showMsg=message;
  }
}
