import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  code1: string = `import { ModalsModule } from '{path-to-src_metronic-folder}/_metronic/partials';`
  code2: string = `import { ModalConfig } from '{path-to-src_metronic-folder}/_metronic/partials';
....
modalConfig: ModalConfig = {
  modalTitle: 'Modal title',
  dismissButtonLabel: 'Submit',
  closeButtonLabel: 'Cancel'
};
....
`
code3: string = `import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '{path-to-src_metronic-folder}/_metronic/partials';
....
@ViewChild('modal') private modalComponent: ModalComponent;
....
async openModal() {
  return await this.modalComponent.open();
}
....
`
code4: string = `<app-modal #modal [modalConfig]="modalConfig">
Modal body html
</app-modal>
<button class="btn btn-primary" (click)="openModal()">Open modal</button>
`

  constructor() { }
  ngOnInit(): void {
  }
}
