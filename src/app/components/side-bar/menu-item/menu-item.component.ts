import { Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MenuItem } from '../types';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  constructor() { }
  @Input() data?:MenuItem;
  hasChild=false
  expanded= false

  ngOnInit(): void {
    console.log(this.data);
    
    if(this.data?.children && this.data?.children.length > 0)
      this.hasChild = true;
  }

  onItemSelected = ()=>{
    this.expanded = !this.expanded;
  }

}
