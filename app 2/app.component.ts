import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exam Tasks';
  classUser = new User('Krupali','k@g.c',12,'Female','MCA',true);
  customData = [{type : 'Server1' , name : 'TypeServer1'},
                {type : 'Server2' , name : 'TypeServer2'}]
  showMsg:String = 'Test';

  onNotifyClicked(message:String){
    this.showMsg=message;
  }
}
