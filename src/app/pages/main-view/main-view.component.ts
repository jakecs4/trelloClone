import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/columns.model';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor(public router: Router, 
    private modalService: NgbModal) 
  { }

  board: Board = new Board("Board Name", [ ] )
  ngOnInit(): void {
  }

  addBoard() {
    const modalRef = this.modalService.open(AddModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass'
      });

    let data = {
      attr: 'Board',
      action: 'Add'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
      if(result) {
        console.log('hello adding board');
        this.board.columns.push(new Column(result, []));
    }else{
      console.log('hello NOT adding board');
    }
    }, (reason) => {
    });
  }
  addCard(index: number) {
    const modalRef = this.modalService.open(AddModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });

    let data = {
      attr: 'Card',
      action: 'Add'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
      if(result) {
          console.log('hello adding card');
          this.board.columns[index].tasks.push(result);
      }else{
        console.log('hello NOT adding card');
      }
    }, (reason) => {
    });
    // Want to add another board
  }
  editCard(index: number, taskIndex: number) {
    const modalRef = this.modalService.open(AddModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass'
      });

    let data = {
      attr: 'Card',
      action: 'Edit'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
      if(result) {
          console.log('hello editing card');
          this.board.columns[index].tasks[taskIndex] = result;
      }else{
        console.log('hello NOT editing card');
      }
    }, (reason) => {
    });
    // Want to add another board
  }
  editBoard(index: number) {
    const modalRef = this.modalService.open(AddModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass'
      });

    let data = {
      attr: 'Board',
      action: 'Edit'
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
      if(result) {
          console.log('hello editing board');
          this.board.columns[index].name = result;
      }else{
        console.log('hello NOT editing board');
      }
    }, (reason) => {
    });
    // Want to add another board
  }
  removeBoard(name: string) {
    this.board.removeCol(name);
  }

  removeTask(name: string, colIndex: number, taskIndex: number) {
    this.board.columns[colIndex].removeTask(name, taskIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
