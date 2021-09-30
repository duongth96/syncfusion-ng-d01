import { Component, OnInit } from '@angular/core';
import { MenuItem, GroupMenu } from './types';

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

  groups:Array<GroupMenu>|undefined;

  ngOnInit(): void {
    console.log(this.groups);
    

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
