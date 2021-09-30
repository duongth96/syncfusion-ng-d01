import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem, GroupMenu } from './types';
import { SidebarComponent, SidebarType } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})


export class SideBarComponent implements OnInit {

  constructor() { 

    let menuList :Array<MenuItem> = menuDemo.list01

    this.groups = [
      {
        name:'Group 01',
        menu:menuList
      },
      {
        name:'Group 02',
        menu:menuList
      }
    ]
  }

  @ViewChild('sidebar') sidebar?: SidebarComponent;
  public showBackdrop: boolean = true;
  public type: SidebarType = 'Auto';
  public width: string ='280px';
  public closeOnDocumentClick: boolean = false;

  groups:Array<GroupMenu>|undefined;

  ngOnInit(): void {
    this.sidebar!.type = this.type;

  }
  
  public onCreated(args: any) {
      this.sidebar!.element.style.visibility = '';
  }
  closeClick(): void {
      this.sidebar!.hide();
  };

  toggleClick():void{
    this.sidebar!.show();
  }

}

const menuDemo = {
    list01:[
      {
        route:'',
        label:'Chó',
        icon:'cho',
        children:[
          {
            route:'',
            label:'Chó nhà',
            icon:'cho',
            children:[]
          },
          {
            route:'',
            label:'Sói',
            icon:'cho',
            children:[]
          },
          {
            route:'',
            label:'Cáo',
            icon:'cho',
            children:[]
          }
        ]
      },
      {
        route:'',
        label:'Mèo',
        icon:'cho',
        children:[
          {
            route:'',
            label:'Mèo nhà',
            icon:'cho',
            children:[
              {
                route:'',
                label:'Mèo mum',
                icon:'cho',
                children:[]
              }
            ]
          },
          {
            route:'',
            label:'Mèo từng',
            icon:'cho',
            children:[]
          },
          {
            route:'',
            label:'Mèo cảnh',
            icon:'cho',
            children:[]
          }
        ]
      }
    ]
}
