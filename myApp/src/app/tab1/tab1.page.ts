import { Component } from '@angular/core';
import { TextService } from '../text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title: string;
  content: string;
  footer: string;

  constructor(public textService: TextService, public router: Router) {}

  onClick() {
    this.textService.genarateText(this.title, this.content, this.footer);
    this.router.navigate(['tabs/tab2']);
  }
}
