import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-rtlversion',
  templateUrl: './rtlversion.component.html',
  styleUrls: ['./rtlversion.component.scss'],
})
export class RTLVersionComponent implements OnInit {
  docUrl: string = '';
  code1 = `yarn run rtl`;

  code2 = `<body root id="kt_body" class="mat-typography" direction="rtl" dir="rtl" style="direction: rtl">
<!-- <body root id="kt_body" class="mat-typography"> -->`;

  code3 = `// @import "./assets/sass/style";
@import "./assets/css/style.rtl";`;

  constructor() {}

  ngOnInit(): void {
    this.docUrl = environment.appHTMLRTLDocUrl;
  }
}
