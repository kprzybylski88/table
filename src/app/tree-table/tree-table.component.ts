import { Component, OnInit, Input } from '@angular/core';
import { Observable, isObservable } from 'rxjs';

interface ITreeStructure {
  name: string;
  open: boolean;
  children: ITreeStructure[];
  originalNode: any;
  table: {[header: string]: string};
}

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent implements OnInit {

  @Input() data: any | Observable<any>;
  @Input() childrenSelector: string;
  @Input() nameSelector: string;
  @Input() tableDataSelector: string;
  @Input() tableHeadersDictionary: {[key: string]: string}[];
  realData: any;
  treeStructure: ITreeStructure[] = [];
  constructor() { }

  ngOnInit() {
    if (isObservable(this.data)) {
      this.data.subscribe({
        next: input => {
          this.realData = input;
          (this.parseData())([this.realData], null);
          // console.log(this.realData);
        }
      });
    } else {
      this.realData = this.data;
      // console.log(this.realData);
      // console.log(this.nameSelector);
      (this.parseData())([this.realData], null);
    }
  }

  parseData() {
    const tree: ITreeStructure[] = [];
    const recursive = function(children: any, currentLevel: ITreeStructure[]) {
      const isFirst = !currentLevel;
      children.forEach(child => {
        console.log(child);
        console.log(this.nameSelector);
        currentLevel.push ({
          name: child[this.nameSelector],
          open: false,
          children: [],
          table: child[this.tableDataSelector],
          originalNode: child
        });
        if (isFirst) {
          this.tree = currentLevel;
        } else {

        }
        console.log(currentLevel);
        if (child[this.childrenSelector]) {
          recursive.bind(this)(child[this.childrenSelector]);
        }
      });
      this.treeStructure.push(currentLevel);
    };
    return recursive.bind(this);
  }

}
