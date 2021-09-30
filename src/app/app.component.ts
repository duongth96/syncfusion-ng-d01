import { Component, ViewChild} from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syncfusion-ng-d01';

  @ViewChild('SideBarComponent') sidebar?: SideBarComponent;

  toggleClick=()=>{
    this.sidebar!.toggleClick();
  }
}
