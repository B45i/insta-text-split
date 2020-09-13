import { Component } from '@angular/core';
import { TextService } from '../text.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title: string;
  content: string;
  footer: string;

  constructor(public textService: TextService) {}
}
