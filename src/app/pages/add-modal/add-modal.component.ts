import { Component, OnInit, Input } from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {
  @Input() fromParent: any;

  closeResult = '';
  value = '';
  constructor(public activeModal: NgbActiveModal) { }

  closeModal(sendData: any) {
    if(sendData == 'close') {
      this.activeModal.close('');
    }else{
      this.activeModal.close(this.value);
    }
  }
  closeModalEvent(event: any ) {
    if(event.keyCode === 13){
      this.closeModal('add');
   }
  }

}
