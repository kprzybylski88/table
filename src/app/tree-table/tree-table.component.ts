import { Component, OnInit, Input } from '@angular/core';
import { Observable, isObservable } from 'rxjs';

interface ITreeStructure {
  id: number;
  name: string;
  open: boolean;
  parentId: number;
  table: any;
  originalNode: any;
}

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

  @Input() data: any | Observable<any>;
  keys: string[] = [];
  flatData: any;
  treeStructure: ITreeStructure[] = [];
  constructor() { }

  ngOnInit() {
    if (isObservable(this.data)) {
      this.data.subscribe({
        next: input => {
          this.flatData = (this.converter())([input]);
          // console.log(this.realData);
        }
      });
    } else {
      this.flatData = (this.converter())([this.data]);
      this.flatData[0].isVisible = true;
      console.log(this.flatData);
    }
      // console.log(this.realData);
      // console.log(this.nameSelector);
  }

  converter() {
    const retVal = [];
    let counter = 1;
    function recursive(data: any) {
      console.log(counter);
      counter++;
      data.forEach(piece => {
        piece.isOpen = false;
        piece.isVisible = false;
        retVal.push(piece);
        if (piece.childrens) {
          recursive(piece.childrens);
        }
      });
      return retVal;
    }
    return recursive.bind(this);
  }
  toggleChildren(parent: any, first: boolean, second?: boolean) {
    console.log('boop');
    if (first) {
      parent.isOpen = !parent.isOpen;
    }

    this.flatData.filter( item => item.parentClientId === parent.clientId ).forEach(itemFound => {

      itemFound.isVisible = first || second ? parent.isOpen : !itemFound.isVisible;
    });
    if (parent.childrens) {
      this.flatData.filter(item => item.parentClientId === parent.clientId).forEach(child => {
        if (parent.isOpen || first) {
          if (first) {
            this.toggleChildren(child, false, true);
          } else {
            this.toggleChildren(child, false, false);
          }
          console.log(parent.clientId);
        }
      });
    }
  }
}
