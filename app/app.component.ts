import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SApp';
  userModule = new User('Harsh','h@gmail.co',123,'male','MSCIT',true);
  childArray = [{type : 'server1' ,name : 'TypeServer1'},
  {type : 'server2' ,name : 'TypeServer2'}]
  ShowMsg : string = 'Test';

  onNotifyClicked(message:string){
    this.ShowMsg = message;
  }
}
